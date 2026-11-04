const danhSachBangGia = [
  { ma: "VB-NL", ten: "Ve nguoi lon", gia: 60000 },
  { ma: "VB-TE", ten: "Ve tre em", gia: 40000 },
  { ma: "VB-SV", ten: "Ve sinh vien", gia: 45000 },
  { ma: "VB-TOI", ten: "Ve buoi toi", gia: 50000 },
];

function hienThiBangGia() {
  const bang = document.getElementById("bang-gia");
  for (const muc of danhSachBangGia) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = muc.ma;
    dong.insertCell().textContent = muc.ten;
    dong.insertCell().textContent = muc.gia.toLocaleString("vi-VN");
  }
}

hienThiBangGia();
