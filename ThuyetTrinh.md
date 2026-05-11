# Hướng Dẫn Kết Nối SQL Server Với Ứng Dụng Web (Node.js/TypeScript)

Tài liệu này tổng hợp các đoạn mã quan trọng để kết nối từ **SQL Server** sang **Web** (thông qua Backend Node.js), phục vụ cho bài thuyết trình môn **Hệ quản trị cơ sở dữ liệu**.

---

## 1. Chuẩn bị (Prerequisites)
Để kết nối, chúng ta cần cài đặt thư viện `mssql`. Nếu sử dụng Windows Authentication (Trusted Connection), cần cài thêm `msnodesqlv8`.

```bash
# Cài đặt thư viện kết nối SQL Server
npm install mssql msnodesqlv8
```

---

## 2. Cấu hình kết nối (Configuration)
Đây là bước định nghĩa thông tin máy chủ, cơ sở dữ liệu và phương thức xác thực.

```typescript
import sql from "mssql/msnodesqlv8";

const sqlConfig = {
  server: 'DESKTOP-FB4QTK4\\SQLEXPRESS', // Tên Server của bạn
  database: 'WebDatVePhim',              // Tên Database
  driver: 'msnodesqlv8',                 // Driver hỗ trợ kết nối Windows
  options: {
    trustedConnection: true              // Sử dụng tài khoản Windows để đăng nhập
  }
};
```

---

## 3. Khởi tạo kết nối (Establish Connection)
Sử dụng `async/await` để đảm bảo kết nối thành công trước khi thực hiện các truy vấn.

```typescript
let dbPool: sql.ConnectionPool | null = null;

async function getPool() {
  if (dbPool) return dbPool; // Nếu đã kết nối rồi thì dùng lại pool cũ

  try {
    dbPool = await sql.connect(sqlConfig);
    console.log("✅ Kết nối SQL Server thành công!");
    return dbPool;
  } catch (err) {
    console.error("❌ Lỗi kết nối:", err);
    return null;
  }
}
```

---

## 4. Truy vấn dữ liệu & Tạo API (Backend)
Đoạn code này lấy dữ liệu từ SQL Server và trả về định dạng JSON cho trình duyệt.

### Cách 1: Sử dụng truy vấn SQL thuần
```typescript
app.get("/api/movies", async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query("SELECT * FROM Phim");
    res.json(result.recordset); // Trả dữ liệu về Web
  } catch (err) {
    res.status(500).send(err.message);
  }
});
```

### Cách 2: Sử dụng Stored Procedure (Chuyên nghiệp hơn)
```typescript
app.get("/api/movie-types", async (req, res) => {
  try {
    const pool = await getPool();
    // Gọi Stored Procedure đã viết trong SQL Server
    const result = await pool.request().execute("sp_GetAllMovieTypes");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
```

---

## 5. Hiển thị dữ liệu lên Web (Frontend)
Sử dụng `fetch` trong JavaScript để lấy dữ liệu từ API và hiển thị.

```javascript
async function loadMovies() {
  const response = await fetch('http://localhost:3000/api/movies');
  const movies = await response.json();
  
  console.log("Dữ liệu nhận được:", movies);
  
  // Hiển thị ra HTML (Ví dụ)
  const list = document.getElementById('movie-list');
  movies.forEach(movie => {
    list.innerHTML += `<li>${movie.TenPhim}</li>`;
  });
}
```

---

## 6. Tại sao cần kết nối như vậy? (Dành cho thuyết trình)
1. **Tính bảo mật**: Web không kết nối trực tiếp vào DB mà thông qua Backend (API). Điều này giúp ẩn thông tin đăng nhập DB.
2. **Quản lý Pool**: Việc sử dụng `ConnectionPool` giúp tái sử dụng các kết nối, giảm tải cho SQL Server khi có nhiều người truy cập.
3. **Stored Procedures**: Giúp bảo mật khỏi tấn công SQL Injection và tăng hiệu năng truy vấn vì code SQL đã được biên dịch sẵn trên server.

---
*Chúc bạn có buổi thuyết trình thành công!*
