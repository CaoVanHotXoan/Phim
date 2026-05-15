

-- ==============================
-- LOẠI PHIM
-- ==============================
CREATE TABLE LoaiPhim (
    MaLoai INT IDENTITY PRIMARY KEY,
    TenLoai NVARCHAR(100) NOT NULL
);

-- ==============================
-- PHIM
-- ==============================
CREATE TABLE Phim (
    MaPhim INT IDENTITY PRIMARY KEY,
    TenPhim NVARCHAR(200),
    MoTa NVARCHAR(MAX),
    ThoiLuong INT,
    NgayKhoiChieu DATE,
    TrangThai NVARCHAR(50), -- Đang chiếu, Sắp chiếu

    MaLoai INT,
    HinhAnh NVARCHAR(500),
    Trailer NVARCHAR(500),

    FOREIGN KEY (MaLoai) REFERENCES LoaiPhim(MaLoai)
);

-- ==============================
-- LOẠI USER
-- ==============================
CREATE TABLE LoaiUser (
    MaLoaiUser INT IDENTITY PRIMARY KEY,
    TenLoai NVARCHAR(50)
);

-- ==============================
-- KHÁCH HÀNG (TÀI KHOẢN)
-- ==============================
CREATE TABLE KhachHang (
    MaKH INT IDENTITY PRIMARY KEY,
    Ten NVARCHAR(150),
    TenDangNhap NVARCHAR(100) UNIQUE,
    MatKhau NVARCHAR(255),
    Email NVARCHAR(150),
    SDT NVARCHAR(20),
    MaLoaiUser INT,

    FOREIGN KEY (MaLoaiUser) REFERENCES LoaiUser(MaLoaiUser)
);

-- ==============================
-- PHÒNG CHIẾU
-- ==============================
CREATE TABLE Phong (
    MaPhong INT IDENTITY PRIMARY KEY,
    TenPhong NVARCHAR(100)
);

-- ==============================
-- LOẠI GHẾ
-- ==============================
CREATE TABLE LoaiGhe (
    MaLoaiGhe INT IDENTITY PRIMARY KEY,
    TenLoai NVARCHAR(50),
    GiaGhe DECIMAL(18,2) DEFAULT 80000
);

-- ==============================
-- GHẾ
-- ==============================
CREATE TABLE Ghe (
    MaGhe INT IDENTITY PRIMARY KEY,
    MaPhong INT,
    SoGhe NVARCHAR(10),
    MaLoaiGhe INT,

    FOREIGN KEY (MaPhong) REFERENCES Phong(MaPhong),
    FOREIGN KEY (MaLoaiGhe) REFERENCES LoaiGhe(MaLoaiGhe)
);

-- ==============================
-- SUẤT CHIẾU (CÓ NGÀY + GIỜ)
-- ==============================
CREATE TABLE SuatChieu (
    MaSuat INT IDENTITY PRIMARY KEY,
    MaPhim INT,
    MaPhong INT,

    NgayChieu DATE,          -- ngày chiếu
    GioBatDau TIME,          -- giờ bắt đầu
    GioKetThuc TIME,         -- giờ kết thúc

    FOREIGN KEY (MaPhim) REFERENCES Phim(MaPhim),
    FOREIGN KEY (MaPhong) REFERENCES Phong(MaPhong)
);

-- ==============================
-- HÓA ĐƠN
-- ==============================
CREATE TABLE HoaDon (
    MaHoaDon INT IDENTITY PRIMARY KEY,
    MaKH INT,
    NgayDat DATETIME DEFAULT GETDATE(),
    TongTien DECIMAL(10,2),
    PhuongThuc NVARCHAR(50),

    FOREIGN KEY (MaKH) REFERENCES KhachHang(MaKH)
);

-- ==============================
-- CHI TIẾT VÉ
-- ==============================
CREATE TABLE ChiTietHoaDon (
    MaCT INT IDENTITY PRIMARY KEY,
    MaHoaDon INT,
    MaPhim INT,
    MaSuat INT,
    MaGhe INT,
    GiaVe DECIMAL(10,2),
    MaGiaoDich NVARCHAR(100),

    FOREIGN KEY (MaHoaDon) REFERENCES HoaDon(MaHoaDon),
    FOREIGN KEY (MaPhim) REFERENCES Phim(MaPhim),
    FOREIGN KEY (MaSuat) REFERENCES SuatChieu(MaSuat),
    FOREIGN KEY (MaGhe) REFERENCES Ghe(MaGhe)
);

-- ==============================
-- PHƯƠNG THỨC THANH TOÁN
-- ==============================
CREATE TABLE ThanhToan (
    MaThanhToan INT IDENTITY PRIMARY KEY,
    TenPhuongThuc NVARCHAR(100),
    HinhAnh NVARCHAR(500)
);
GO
-- ==============================
-- INSERT DATA DEMO FULL
-- ==============================


-- 2. Phim
INSERT INTO Phim (TenPhim, MoTa, ThoiLuong, NgayKhoiChieu, TrangThai, MaLoai, HinhAnh, Trailer) VALUES
(N'Fast & Furious', N'Đua xe tốc độ', 120, '2024-05-01', N'Đang chiếu', 1, 'fast.jpg', 'trailer1'),
(N'Titanic', N'Tình yêu', 180, '2024-06-01', N'Đang chiếu', 2, 'titanic.jpg', 'trailer2'),
(N'Conjuring', N'Phim ma', 110, '2024-07-01', N'Sắp chiếu', 3, 'conjuring.jpg', 'trailer3');

-- 3. LoaiUser
INSERT INTO LoaiUser (TenLoai) VALUES
(N'Admin'),
(N'Khách hàng'),
(N'Nhân viên');

-- 4. KhachHang
INSERT INTO KhachHang (Ten, TenDangNhap, MatKhau, Email, SDT, MaLoaiUser) VALUES
(N'Nguyễn Văn A', 'user1', '123', 'a@gmail.com', '0123456789', 2),
(N'Trần Thị B', 'user2', '123', 'b@gmail.com', '0987654321', 2),
(N'Admin', 'admin', '123', 'admin@gmail.com', '0111111111', 1);

-- 5. Phong
INSERT INTO Phong (TenPhong) VALUES
(N'Phòng 1'),
(N'Phòng 2'),
(N'Phòng VIP');

-- 6. LoaiGhe
INSERT INTO LoaiGhe (TenLoai, HeSoGia) VALUES
(N'Thường', 1.0),
(N'VIP', 1.5),
(N'Đôi', 2.0);

-- 7. Ghe
INSERT INTO Ghe (MaPhong, SoGhe, MaLoaiGhe) VALUES
(1, 'A1', 1),
(1, 'A2', 2),
(2, 'B1', 1);

-- 8. SuatChieu
INSERT INTO SuatChieu (MaPhim, MaPhong, NgayChieu, GioBatDau, GioKetThuc) VALUES
(1, 1, '2024-05-10', '18:00', '20:00'),
(2, 2, '2024-05-11', '19:00', '22:00'),
(3, 3, '2024-05-12', '20:00', '22:00');

-- 9. HoaDon
INSERT INTO HoaDon (MaKH, TongTien) VALUES
(1, 200000),
(2, 150000),
(1, 300000);

-- 10. ChiTietHoaDon
INSERT INTO ChiTietHoaDon (MaHoaDon, MaPhim, MaSuat, MaGhe, GiaVe) VALUES
(1, 1, 1, 1, 100000),
(1, 1, 1, 2, 100000),
(2, 2, 2, 3, 150000);

-- 11. ThanhToan
INSERT INTO ThanhToan (MaHoaDon, PhuongThuc, SoTien, MaGiaoDich) VALUES
(1, N'Tiền mặt', 200000, 'GD001'),
(2, N'Chuyển khoản', 150000, 'GD002'),
(3, N'Momo', 300000, 'GD003');