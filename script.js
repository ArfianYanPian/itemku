// 1. Tombol "Beli Sekarang" pada tiap card
const listBtnBeli = document.querySelectorAll(".btn-beli");

listBtnBeli.forEach((tombol) => {
  tombol.addEventListener("click", (e) => {
    e.preventDefault();

    const kartu = tombol.closest(".card");
    const namaProduk = kartu.querySelector("h3").textContent;
    const hargaProduk = kartu.querySelector(".harga").textContent.trim();

    const email = prompt(
      `Beli "${namaProduk}" (${hargaProduk})\nMasukkan email untuk pengiriman kode/akun:`,
    );

    if (email) {
      alert(
        `Pesanan "${namaProduk}" berhasil dibuat.\nDetail transaksi akan dikirim ke ${email}.`,
      );
    }
  });
});

// 2. Tombol "Masuk"
const btnMasuk = document.querySelector(".btn-masuk");

if (btnMasuk) {
  btnMasuk.addEventListener("click", (e) => {
    e.preventDefault();
    const emailMasuk = prompt("Masuk ke akun itemku\nMasukkan email Anda:");
    if (emailMasuk) {
      alert(`Kode OTP telah dikirim ke ${emailMasuk}.`);
    }
  });
}
