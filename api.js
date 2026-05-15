/**
 * FILE: api.js
 * Hệ thống xử lý dữ liệu tập trung: Kết nối SQL Server, Đăng nhập, Đăng ký, Đặt vé, Lịch sử, Phim & Tìm kiếm.
 */

// --- CẤU HÌNH API ---
// Khi chạy local, hãy để trống hoặc dùng localhost.
// Khi đã có link Ngrok, hãy dán link vào đây (Ví dụ: https://abcdef.ngrok-free.app)
const NGROK_URL = " https://2e77-2402-800-638c-b2be-e0fb-be13-2673-fcec.ngrok-free.app"; 

const API_BASE = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") 
    ? "" 
    : NGROK_URL;

// 1. XỬ LÝ ĐĂNG NHẬP
function handleLogin() {
    const loginForm = document.getElementById('login-form');
    if (!loginForm) return;

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;

        try {
            const response = await fetch(`${API_BASE}/api/login`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify({ username, password })
            });
            const result = await response.json();

            if (result.success) {
                const user = result.user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                alert(`Đăng nhập thành công! Chào mừng ${user.Ten}`);

                const returnUrl = localStorage.getItem('returnUrl');
                if (returnUrl) {
                    localStorage.removeItem('returnUrl');
                    window.location.href = returnUrl;
                } else if (user.roleName.toLowerCase() === 'admin') {
                    window.location.href = '../admin.html';
                } else {
                    window.location.href = '../index.html';
                }
            } else {
                alert(result.message || "Đăng nhập thất bại!");
            }
        } catch (error) {
            console.error("Lỗi đăng nhập:", error);
            alert("Có lỗi xảy ra khi kết nối tới máy chủ!");
        }
    });
}

// 2. XỬ LÝ ĐĂNG KÝ
function handleRegister() {
    const registerForm = document.getElementById('register-form');
    if (!registerForm) return;

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value.trim();
        const password = document.getElementById('reg-password').value;

        if (password.length < 8) {
            alert("Mật khẩu phải có ít nhất 8 kí tự!");
            return;
        }

        try {
            const newUser = {
                Ten: username, TenDangNhap: username, MatKhau: password,
                Email: username.includes('@') ? username : "",
                SDT: !username.includes('@') ? username : "",
                MaLoaiUser: 2 
            };

            const response = await fetch(`${API_BASE}/api/customers`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify(newUser)
            });

            if (response.ok) {
                alert("Đăng ký thành công! Bạn hiện là Customer.");
                registerForm.style.display = 'none';
                document.getElementById('login-form').style.display = 'block';
            } else {
                const err = await response.json();
                alert("Lỗi đăng ký: " + (err.error || "Không xác định"));
            }
        } catch (error) {
            console.error("Lỗi đăng ký:", error);
        }
    });
}

// 2.1 CHUYỂN ĐỔI QUA LẠI GIỮA ĐĂNG NHẬP VÀ ĐĂNG KÝ
function handleFormSwitching() {
    const showRegisterBtn = document.getElementById('show-register-btn');
    const showLoginBtn = document.getElementById('show-login-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (showRegisterBtn && loginForm && registerForm) {
        showRegisterBtn.addEventListener('click', () => {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });
    }

    if (showLoginBtn && loginForm && registerForm) {
        showLoginBtn.addEventListener('click', () => {
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }
}

// 3. XỬ LÝ ĐĂNG XUẤT
function handleLogout() {
    // Chú thích: login-icon là icon user ở header dùng chung cho cả Login và Logout
    const logoutBtn = document.getElementById('logout-btn') || document.querySelector('.login-icon');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            const currentUser = localStorage.getItem('currentUser');
            // Nếu đang có người dùng đăng nhập thì mới xử lý đăng xuất
            if (currentUser) {
                e.preventDefault();
                if (confirm('Bạn có chắc chắn muốn thoát khỏi tài khoản này không?')) {
                    localStorage.removeItem('currentUser');
                    alert('Đã thoát tài khoản!');
                    
                    // Tự động xác định tiền tố (prefix) cho đường dẫn
                    const isGitHub = window.location.hostname.includes('github.io');
                    const prefix = isGitHub ? '/Phim/' : '/';
                    
                    window.location.href = `${prefix}Login/Login.html`;
                }
            }
        });
    }
}

// 3.1 CẬP NHẬT GIAO DIỆN KHI ĐÃ ĐĂNG NHẬP
function updateAuthUI() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const loginIcon = document.querySelector('.login-icon');
    
    if (loginIcon) {
        if (user) {
            // Nếu đã đăng nhập: Đổi title thành tên người dùng và gợi ý đăng xuất
            loginIcon.title = `Thoát tài khoản (${user.Ten})`;
            loginIcon.style.color = '#ff3d49'; // Đổi màu icon sang đỏ để nhận biết
        } else {
            // Nếu chưa đăng nhập: Trả về trạng thái mặc định
            loginIcon.title = "Đăng nhập";
            loginIcon.style.color = '';
        }
    }
}

// 4. TRANG CHỦ - TẢI PHIM
async function loadMovies() {
    const trackNowShowing = document.getElementById('track-now-showing');
    const trackComingSoon = document.getElementById('track-coming-soon');
    if (!trackNowShowing && !trackComingSoon) return;

    try {
        const response = await fetch(`${API_BASE}/api/movies`, {
            headers: { 'ngrok-skip-browser-warning': 'true' }
        });
        const movies = await response.json();
        const nowShowing = movies.filter(m => m.TrangThai === "Đang chiếu");
        const comingSoon = movies.filter(m => m.TrangThai === "Sắp chiếu");

        if (trackNowShowing) renderMovieList(trackNowShowing, nowShowing, "PHIM ĐANG CHIẾU");
        if (trackComingSoon) renderMovieList(trackComingSoon, comingSoon, "PHIM SẮP CHIẾU");

        if (typeof setupCarousel === 'function') {
            setupCarousel('track-now-showing');
            setupCarousel('track-coming-soon');
        }
    } catch (error) { console.error(error); }
}

function renderMovieList(container, movies, tagText) {
    container.innerHTML = ''; 
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.className = 'movie-card';
        li.style.cursor = 'pointer';
        li.innerHTML = `
            <div class="poster-wrapper">
                <img src="${movie.HinhAnh}" alt="${movie.TenPhim}" onerror="this.src='https://placehold.co/300x450?text=No+Image'">
                <div class="movie-tag">${tagText}</div>
                <div class="age-tag">P</div>
            </div>
            <h3 class="movie-name">${movie.TenPhim}</h3>
        `;
        li.addEventListener('click', () => {
            localStorage.setItem('selectedMovieId', movie.MaPhim);
            
            // Tự động xác định tiền tố (prefix) cho đường dẫn
            // Nếu đang ở GitHub Pages (có /Phim/ trong URL), prefix sẽ là '/Phim/'
            const isGitHub = window.location.hostname.includes('github.io');
            const prefix = isGitHub ? '/Phim/' : '/';
            
            window.location.href = `${prefix}ChiTietPhim/MovieDetail.html`;
        });
        container.appendChild(li);
    });
}

// 5. TRANG CHI TIẾT PHIM & SUẤT CHIẾU
async function loadMovieDetail() {
    const movieTitleElem = document.querySelector('.movie-title');
    if (!movieTitleElem || !window.location.pathname.includes('MovieDetail.html')) return;

    const movieId = localStorage.getItem('selectedMovieId');
    if (!movieId) return;

    try {
        const response = await fetch(`${API_BASE}/api/movies`, {
            headers: { 'ngrok-skip-browser-warning': 'true' }
        });
        const movies = await response.json();
        const movie = movies.find(m => m.MaPhim == movieId);

        if (movie) {
            document.querySelector('.movie-title').innerText = movie.TenPhim;
            document.querySelector('.movie-synopsis p').innerText = movie.MoTa || "Đang cập nhật nội dung...";
            document.querySelector('.poster-card img').src = movie.HinhAnh;
            document.querySelector('.movie-banner img').src = movie.HinhAnh; 
            document.querySelector('.duration').innerHTML = `<i class="fa-regular fa-clock"></i> ${movie.ThoiLuong} phút`;
            
            const detailList = document.querySelector('.detail-list');
            const releaseDate = new Date(movie.NgayKhoiChieu).toLocaleDateString('vi-VN');
            detailList.innerHTML = `
                <li><strong>Ngày phát hành:</strong> ${releaseDate}</li>
                <li><strong>Quốc gia:</strong> Việt Nam</li>
                <li><strong>Thể loại:</strong> ${movie.TenLoai || "Hành động"}</li>
            `;

            // Xử lý Trailer Modal
            const trailerBtn = document.getElementById('movieTrailerBtn');
            const modal = document.getElementById('trailerModal');
            const closeModal = document.getElementById('closeModal');
            const iframe = document.getElementById('trailerIframe');
            if (trailerBtn && modal && iframe) {
                trailerBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    let trailerUrl = movie.Trailer;
                    if (trailerUrl) {
                        if (trailerUrl.includes('watch?v=')) trailerUrl = trailerUrl.replace('watch?v=', 'embed/');
                        else if (trailerUrl.includes('youtu.be/')) trailerUrl = trailerUrl.replace('youtu.be/', 'www.youtube.com/embed/');
                        iframe.src = trailerUrl + "?autoplay=1";
                        modal.classList.add('show');
                    } else alert("Hiện chưa có trailer cho phim này.");
                });
                closeModal.onclick = () => { modal.classList.remove('show'); iframe.src = ""; };
                window.onclick = (e) => { if (e.target === modal) { modal.classList.remove('show'); iframe.src = ""; } };
            }

            loadShowtimes(movieId, movie.TenPhim);
        }
    } catch (error) { console.error(error); }
}

async function loadShowtimes(movieId, movieTitle) {
    const dateSelector = document.getElementById('dateSelector');
    const timeSelector = document.getElementById('timeSelector');
    if (!dateSelector || !timeSelector) return;

    try {
        const response = await fetch(`${API_BASE}/api/showtimes`, {
            headers: { 'ngrok-skip-browser-warning': 'true' }
        });
        const allShowtimes = await response.json();
        const showtimes = allShowtimes.filter(s => s.MaPhim == movieId);

        if (showtimes.length === 0) {
            dateSelector.innerHTML = '<p style="padding: 20px;">Hiện chưa có lịch chiếu cho phim này.</p>';
            timeSelector.innerHTML = '';
            return;
        }

        const dates = [...new Set(showtimes.map(s => s.NgayChieu))];
        dateSelector.innerHTML = '';
        dates.forEach((date, index) => {
            const dateObj = new Date(date);
            const dateItem = document.createElement('div');
            dateItem.className = `date-item ${index === 0 ? 'active' : ''}`;
            dateItem.innerHTML = `<span class="day-text">Thứ ${dateObj.getDay() + 1 === 1 ? 'CN' : dateObj.getDay() + 1}</span><span class="date-text">${dateObj.getDate()}/${dateObj.getMonth() + 1}</span>`;
            dateItem.addEventListener('click', () => {
                document.querySelectorAll('.date-item').forEach(el => el.classList.remove('active'));
                dateItem.classList.add('active');
                renderTimes(date, showtimes, movieTitle);
            });
            dateSelector.appendChild(dateItem);
        });
        renderTimes(dates[0], showtimes, movieTitle);
    } catch (error) { console.error(error); }
}

function renderTimes(selectedDate, showtimes, movieTitle) {
    const timeSelector = document.getElementById('timeSelector');
    timeSelector.innerHTML = '';
    const filtered = showtimes.filter(s => s.NgayChieu === selectedDate);
    filtered.forEach(s => {
        const timeBtn = document.createElement('div');
        timeBtn.className = 'time-item';
        // Đảm bảo lấy chính xác Giờ và Phút từ dữ liệu gốc
        const start = s.GioBatDau ? s.GioBatDau.split(':').slice(0, 2).join(':') : "";
        const end = s.GioKetThuc ? s.GioKetThuc.split(':').slice(0, 2).join(':') : "";
        timeBtn.innerText = end ? `${start} ~ ${end}` : start;
        
        timeBtn.addEventListener('click', () => {
            const selectedShowtime = {
                MaSuat: s.MaSuat, MaPhim: s.MaPhim, MaPhong: s.MaPhong, TenPhim: movieTitle, TenPhong: s.TenPhong,
                NgayChieu: selectedDate, GioBatDau: start, GioKetThuc: end
            };
            localStorage.setItem('selectedShowtime', JSON.stringify(selectedShowtime));
            window.location.href = '../DatVe/Booking.html';
        });
        timeSelector.appendChild(timeBtn);
    });
}

// 6. TRANG ĐẶT VÉ & THANH TOÁN
async function loadBookingPage() {
    const seatGrid = document.getElementById('seatGrid');
    if (!seatGrid || !window.location.pathname.includes('Booking.html')) return;

    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => window.history.back());
    }

    const showtime = JSON.parse(localStorage.getItem('selectedShowtime'));
    if (!showtime) return;

    document.getElementById('fMovieTitle').innerText = showtime.TenPhim;
    document.getElementById('fDateTime').innerText = `${showtime.NgayChieu} | ${showtime.GioBatDau} ~ ${showtime.GioKetThuc}`;
    document.getElementById('fHall').innerText = showtime.TenPhong;

    try {
        const [seatsRes, bookedRes] = await Promise.all([
            fetch(`${API_BASE}/api/seats`, { headers: { 'ngrok-skip-browser-warning': 'true' } }), 
            fetch(`${API_BASE}/api/booked-seats/${showtime.MaSuat}`, { headers: { 'ngrok-skip-browser-warning': 'true' } })
        ]);
        const allSeats = await seatsRes.json();
        const bookedSeatIds = await bookedRes.json();
        const roomSeats = allSeats.filter(s => s.MaPhong == showtime.MaPhong);

        seatGrid.innerHTML = '';
        const rows = {};
        roomSeats.forEach(seat => {
            const rowLabel = seat.SoGhe.charAt(0);
            if (!rows[rowLabel]) rows[rowLabel] = [];
            rows[rowLabel].push(seat);
        });

        const sortedRowLabels = Object.keys(rows).sort();
        let selectedSeats = [];
        let totalPrice = 0;

        sortedRowLabels.forEach(label => {
            const labelEl = document.createElement('div');
            labelEl.className = 'row-label';
            labelEl.innerText = label;
            seatGrid.appendChild(labelEl);

            const rowSeats = rows[label].sort((a, b) => {
                const numA = parseInt(a.SoGhe.substring(1));
                const numB = parseInt(b.SoGhe.substring(1));
                return numA - numB;
            });

            rowSeats.forEach(seat => {
                const seatEl = document.createElement('div');
                let typeClass = 'regular';
                const seatType = seat.TenLoaiGhe ? seat.TenLoaiGhe.toLowerCase() : '';
                if (seatType.includes('vip')) typeClass = 'vip';
                else if (seatType.includes('đôi') || seatType.includes('sweetbox')) typeClass = 'sweetbox';
                
                const isBooked = bookedSeatIds.includes(seat.MaGhe);
                seatEl.className = `seat ${typeClass} ${isBooked ? 'booked' : ''}`;
                seatEl.innerText = seat.SoGhe.substring(1);

                if (!isBooked) {
                    seatEl.addEventListener('click', () => {
                        if (seatEl.classList.contains('selected')) {
                            seatEl.classList.remove('selected');
                            selectedSeats = selectedSeats.filter(s => s.MaGhe !== seat.MaGhe);
                            totalPrice -= seat.GiaGhe;
                        } else {
                            seatEl.classList.add('selected');
                            selectedSeats.push(seat);
                            totalPrice += seat.GiaGhe;
                        }
                        document.getElementById('fSeats').innerText = selectedSeats.map(s => s.SoGhe).join(', ') || '-';
                        document.getElementById('fPrice').innerText = totalPrice.toLocaleString('vi-VN') + ' VND';
                    });
                }
                seatGrid.appendChild(seatEl);
            });
        });

        document.getElementById('confirmBooking').addEventListener('click', () => {
            if (selectedSeats.length === 0) { alert("Vui lòng chọn ít nhất một ghế!"); return; }
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                alert("Vui lòng đăng nhập để tiếp tục đặt vé!");
                localStorage.setItem('returnUrl', window.location.href);
                window.location.href = '../Login/Login.html';
                return;
            }
            showPaymentModal(selectedSeats, totalPrice, showtime, currentUser);
        });

        // Zoom ghế
        let currentScale = 1;
        const seatMap = document.getElementById('seatMap');
        if (seatMap) {
            document.getElementById('zoomIn').onclick = () => { currentScale = Math.min(currentScale + 0.1, 1.5); seatMap.style.transform = `scale(${currentScale})`; };
            document.getElementById('zoomOut').onclick = () => { currentScale = Math.max(currentScale - 0.1, 0.5); seatMap.style.transform = `scale(${currentScale})`; };
        }
    } catch (error) { console.error(error); }
}

async function showPaymentModal(selectedSeats, totalPrice, showtime, user) {
    const overlay = document.getElementById('paymentOverlay');
    if (!overlay) return;
    overlay.style.display = 'flex';
    
    document.getElementById('pMovieTitle').innerText = showtime.TenPhim;
    document.getElementById('pDateTime').innerText = `${showtime.NgayChieu} | ${showtime.GioBatDau} ~ ${showtime.GioKetThuc}`;
    document.getElementById('pHall').innerText = showtime.TenPhong;
    document.getElementById('pSeats').innerText = selectedSeats.map(s => s.SoGhe).join(', ');
    document.getElementById('pPrice').innerText = totalPrice.toLocaleString('vi-VN') + ' VND';

    let selectedPayment = null;
    const bankGrid = document.getElementById('bankGrid');
    bankGrid.innerHTML = 'Đang tải phương thức...';
    try {
        const payRes = await fetch(`${API_BASE}/api/payments`, {
            headers: { 'ngrok-skip-browser-warning': 'true' }
        });
        const payments = await payRes.json();
        bankGrid.innerHTML = '';
        payments.forEach(p => {
            const item = document.createElement('div');
            item.className = 'bank-item';
            item.innerHTML = `<img src="${p.HinhAnh}" alt="${p.TenPhuongThuc}"><span>${p.TenPhuongThuc}</span>`;
            item.addEventListener('click', () => {
                document.querySelectorAll('.bank-item').forEach(el => el.classList.remove('selected'));
                item.classList.add('selected');
                // Gán MaThanhToan (ID dạng int) thay vì tên chuỗi để khớp với DB mới cập nhật
                selectedPayment = p.MaThanhToan; 
                document.getElementById('payNowBtn').disabled = false;
            });
            bankGrid.appendChild(item);
        });
    } catch (error) { bankGrid.innerHTML = 'Không thể tải phương thức.'; }

    document.getElementById('payNowBtn').onclick = async () => {
        if (!selectedPayment) return;
        try {
            const bookingRequest = {
                MaKH: user.MaKH, NgayDat: new Date().toISOString(), TongTien: totalPrice,
                MaPhim: showtime.MaPhim, MaSuat: showtime.MaSuat, MaGheList: selectedSeats.map(s => s.MaGhe),
                GiaVe: selectedSeats[0].GiaGhe, PhuongThuc: selectedPayment, MaGiaoDich: 'GD' + Date.now()
            };
            const response = await fetch(`${API_BASE}/api/invoices`, {
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify(bookingRequest)
            });
            if (response.ok) {
                alert("Chúc mừng! Bạn đã đặt vé thành công.");
                window.location.href = '../LichSu/History.html';
            } else alert("Lỗi đặt vé.");
        } catch (error) { console.error(error); }
    };
    document.getElementById('closePayment').onclick = () => overlay.style.display = 'none';
}

// 7. TRANG LỊCH SỬ GIAO DỊCH
async function loadHistoryPage() {
    const historyList = document.getElementById('historyList');
    if (!historyList || !window.location.pathname.includes('History.html')) return;

    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        historyList.innerHTML = '<div class="no-history">Vui lòng <a href="../Login/Login.html" style="color: #ff3d49;">đăng nhập</a> để xem lịch sử.</div>';
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/api/invoices`, {
            headers: { 'ngrok-skip-browser-warning': 'true' }
        });
        const allInvoices = await response.json();
        const userInvoices = allInvoices.filter(i => i.MaKH == user.MaKH);

        historyList.innerHTML = '';
        userInvoices.reverse().forEach(inv => {
            const item = document.createElement('div');
            item.className = 'history-item-bar';
            const date = new Date(inv.NgayDat);
            item.innerHTML = `
                <div class="history-info" style="padding: 0 25px; flex: 1; display: flex; justify-content: space-between; align-items: center;">
                    <div style="flex: 1;">
                        <div class="movie-name" style="font-size: 17px; font-weight: 800; color: #fff; text-transform: uppercase;">${inv.TenPhim || 'PHIM ĐÃ XEM'}</div>
                        <div class="booking-time" style="font-size: 12px; color: #aaa; margin-top: 4px;">
                            ${date.toLocaleDateString('vi-VN')} | ${date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })} | ${inv.PhuongThuc}
                        </div>
                    </div>
                    <div class="history-amount" style="font-size: 19px; font-weight: 900; color: #fff;">${inv.TongTien.toLocaleString('vi-VN')} VND</div>
                </div>
            `;
            item.onclick = () => showHistoryDetail(inv);
            historyList.appendChild(item);
        });
    } catch (error) { console.error(error); }
}

async function showHistoryDetail(invoice) {
    const modal = document.getElementById('historyModal');
    if (!modal) return;
    modal.style.display = 'flex';

    try {
        const res = await fetch(`${API_BASE}/api/invoice-details/${invoice.MaHoaDon}`, {
            headers: { 'ngrok-skip-browser-warning': 'true' }
        });
        const details = await res.json();

        if (details.length > 0) {
            const first = details[0];
            const paymentDate = new Date(invoice.NgayDat);
            document.getElementById('mPaymentDate').innerText = paymentDate.toLocaleDateString('vi-VN');
            document.getElementById('mPaymentTime').innerText = paymentDate.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
            document.getElementById('mTransactionId').innerText = first.MaGiaoDich || `#${invoice.MaHoaDon}`;

            const formatTimeNeutral = (t) => { if (!t) return ""; const s = t.toString(); return s.includes('T') ? s.substring(11, 16) : s.substring(0, 5); };
            const start = formatTimeNeutral(first.GioBatDau);
            const end = formatTimeNeutral(first.GioKetThuc);
            document.getElementById('mShowDate').innerHTML = `${new Date(first.NgayChieu).toLocaleDateString('vi-VN')}<br><span style="color: #ff3d49; font-weight: bold;">Thời gian: ${start} - ${end}</span>`;
            document.getElementById('mHall').innerText = first.TenPhong || "Phòng Chiếu";
            document.getElementById('mMovieTitle').innerText = first.TenPhim;
            document.getElementById('mTotalAmount').innerText = invoice.TongTien.toLocaleString('vi-VN') + ' VND';
            document.getElementById('mBankName').innerText = invoice.PhuongThuc;
            document.getElementById('mSeats').innerText = details.map(d => d.SoGhe).join(', ');
            
            // ĐỔ DỮ LIỆU RẠP CHIẾU VÀ ĐỊA CHỈ (DEMO)
            if (document.getElementById('mCinemaName'))
                document.getElementById('mCinemaName').innerText = "CGV Vincom Biên Hòa";
            if (document.getElementById('mCinemaAddress'))
                document.getElementById('mCinemaAddress').innerText = "Tầng 3, Vincom Biên Hòa, 1096 Phạm Văn Thuận, Biên Hòa, Đồng Nai";

            const bankIcon = document.getElementById('mBankIcon');
            if (bankIcon) {
                if (invoice.PhuongThuc.toLowerCase().includes('momo')) bankIcon.src = 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png';
                else bankIcon.src = 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png';
            }
        }
    } catch (error) { console.error("Lỗi chi tiết:", error); }
    document.getElementById('closeHistoryModal').onclick = () => modal.style.display = 'none';
}

// 8. TRANG DANH SÁCH PHIM (Movies.html) - TẢI, LỌC VÀ TÌM KIẾM
async function loadMoviesPage() {
    const moviesGrid = document.getElementById('moviesGrid');
    if (!moviesGrid || !window.location.pathname.includes('Movies.html')) return;

    const filterGroups = document.querySelectorAll('.filter-group');
    let genreContainer = null;
    filterGroups.forEach(group => {
        const btnText = group.querySelector('.filter-dropdown-btn span')?.innerText;
        if (btnText === 'THỂ LOẠI') {
            genreContainer = group.querySelector('.filter-dropdown-content');
        }
    });

    try {
        const [moviesRes, genresRes] = await Promise.all([
            fetch(`${API_BASE}/api/movies`, { headers: { 'ngrok-skip-browser-warning': 'true' } }),
            fetch(`${API_BASE}/api/movie-types`, { headers: { 'ngrok-skip-browser-warning': 'true' } })
        ]);
        
        const allMovies = await moviesRes.json();
        let allGenres = [];
        
        if (genresRes.ok) {
            allGenres = await genresRes.json();
        } else {
            const uniqueGenres = [...new Set(allMovies.map(m => m.TenLoai).filter(Boolean))];
            allGenres = uniqueGenres.map(name => ({ TenLoai: name }));
        }

        if (genreContainer) {
            genreContainer.innerHTML = `
                <label class="filter-item">
                    <input type="radio" name="genre" value="all" checked>
                    <span>Tất cả</span>
                </label>
            `;
            allGenres.forEach(g => {
                const label = document.createElement('label');
                label.className = 'filter-item';
                label.innerHTML = `
                    <input type="radio" name="genre" value="${g.TenLoai}">
                    <span>${g.TenLoai}</span>
                `;
                genreContainer.appendChild(label);
            });
        }

        const applyFilters = () => {
            let filtered = [...allMovies];
            const genreRadio = document.querySelector('input[name="genre"]:checked');
            if (genreRadio && genreRadio.value !== 'all') {
                filtered = filtered.filter(m => m.TenLoai === genreRadio.value);
            }

            const sortRadio = document.querySelector('input[name="sort"]:checked');
            if (sortRadio && sortRadio.value === 'latest') filtered.sort((a, b) => new Date(b.NgayKhoiChieu) - new Date(a.NgayKhoiChieu));
            else if (sortRadio && sortRadio.value === 'popular') filtered.sort((a, b) => (b.MaPhim || 0) - (a.MaPhim || 0));

            const searchInput = document.querySelector('.search-txt');
            if (searchInput && searchInput.value.trim() !== "") {
                const query = searchInput.value.toLowerCase().trim();
                filtered = filtered.filter(m => m.TenPhim.toLowerCase().includes(query));
            }
            renderMoviesGrid(moviesGrid, filtered);
        };

        document.addEventListener('change', (e) => {
            if (e.target.name === 'genre' || e.target.name === 'sort') {
                applyFilters();
            }
        });
        
        document.querySelectorAll('.filter-dropdown-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('i');
                if (content.style.display === 'none' || content.style.display === '') { content.style.display = 'flex'; icon.style.transform = 'rotate(0deg)'; }
                else { content.style.display = 'none'; icon.style.transform = 'rotate(-90deg)'; }
            });
        });

        applyFilters();
    } catch (error) { console.error("Lỗi tải trang Movies:", error); }
}

function renderMoviesGrid(container, movies) {
    container.innerHTML = '';
    if (movies.length === 0) { container.innerHTML = '<div class="no-history" style="grid-column: 1/-1; text-align: center; padding: 50px;">Không tìm thấy phim phù hợp.</div>'; return; }
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card'; card.style.cursor = 'pointer';
        const dateObj = new Date(movie.NgayKhoiChieu);
        card.innerHTML = `
            <div class="poster-wrapper">
                <img src="${movie.HinhAnh}" alt="${movie.TenPhim}" onerror="this.src='https://placehold.co/300x450?text=No+Image'">
                <div class="movie-tag">${movie.TrangThai}</div><div class="age-tag">P</div>
            </div>
            <div class="movie-info" style="padding: 15px;">
                <h3 class="movie-name" style="font-size: 16px; margin-bottom: 5px;">${movie.TenPhim}</h3>
                <p class="release-date" style="font-size: 13px; color: #888;">Khởi chiếu: ${dateObj.toLocaleDateString('vi-VN')}</p>
            </div>
        `;
        card.onclick = () => { localStorage.setItem('selectedMovieId', movie.MaPhim); window.location.href = '../ChiTietPhim/MovieDetail.html'; };
        container.appendChild(card);
    });
}

// 9. XỬ LÝ TÌM KIẾM & GỢI Ý (SEARCH AUTOCOMPLETE)
async function handleSearch() {
    const searchInput = document.querySelector('.search-txt');
    const searchBtn = document.querySelector('.search-btn');
    const suggestions = document.getElementById('searchSuggestions');
    if (!searchInput) return;

    try {
        const response = await fetch(`${API_BASE}/api/movies`, {
            headers: { 'ngrok-skip-browser-warning': 'true' }
        });
        const allMovies = await response.json();

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (suggestions) {
                suggestions.innerHTML = '';
                if (query.length > 0) {
                    const matches = allMovies.filter(m => m.TenPhim.toLowerCase().includes(query)).slice(0, 5);
                    if (matches.length > 0) {
                        matches.forEach(m => {
                            const item = document.createElement('div');
                            item.className = 'suggestion-item';
                            item.innerHTML = `<img src="${m.HinhAnh}"><div><div class="suggestion-title">${m.TenPhim}</div><div class="suggestion-category">${m.TenLoai || 'Phim'}</div></div>`;
                            item.onclick = () => { localStorage.setItem('selectedMovieId', m.MaPhim); window.location.href = window.location.pathname.includes('index.html') ? 'ChiTietPhim/MovieDetail.html' : '../ChiTietPhim/MovieDetail.html'; };
                            suggestions.appendChild(item);
                        });
                        suggestions.style.display = 'block';
                    } else { suggestions.innerHTML = '<div class="no-suggestion">Không tìm thấy phim</div>'; suggestions.style.display = 'block'; }
                } else { suggestions.style.display = 'none'; }
            }
            if (window.location.pathname.includes('Movies.html')) {
                const event = new Event('change');
                document.querySelector('input[name="sort"]:checked')?.dispatchEvent(event);
            }
        });

        const performSearch = () => {
            const query = searchInput.value.trim();
            if (query === "") return;
            if (!window.location.pathname.includes('Movies.html')) {
                localStorage.setItem('headerSearchQuery', query);
                window.location.href = window.location.pathname.includes('index.html') ? 'Phim/Movies.html' : '../Phim/Movies.html';
            }
        };

        if (searchBtn) searchBtn.addEventListener('click', (e) => { e.preventDefault(); performSearch(); });
        searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
        document.addEventListener('click', (e) => { if (suggestions && !searchInput.contains(e.target)) suggestions.style.display = 'none'; });

        if (window.location.pathname.includes('Movies.html')) {
            const pendingQuery = localStorage.getItem('headerSearchQuery');
            if (pendingQuery) { searchInput.value = pendingQuery; localStorage.removeItem('headerSearchQuery'); setTimeout(() => { const event = new Event('change'); document.querySelector('input[name="sort"]:checked')?.dispatchEvent(event); }, 500); }
        }
    } catch (error) { console.error(error); }
}

// KHỞI CHẠY HỆ THỐNG
document.addEventListener('DOMContentLoaded', () => {
    // Chú thích: Gọi updateAuthUI để cập nhật trạng thái icon đăng nhập ngay khi tải trang
    updateAuthUI();
    handleLogin(); handleRegister(); handleFormSwitching(); handleLogout(); handleSearch();
    loadMovies(); loadMovieDetail(); loadBookingPage(); loadHistoryPage(); loadMoviesPage();
});

// 10. HỖ TRỢ TÍNH TOÁN THỜI GIAN CHO ADMIN
// Hàm này được gọi từ main.js để tự động tính giờ kết thúc dựa trên giờ bắt đầu và thời lượng phim
window.calculateEndTime = function(startTimeStr, durationMinutes) {
    if (!startTimeStr || !durationMinutes) return "";
    const [hours, minutes] = startTimeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes + parseInt(durationMinutes), 0);
    return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
};
