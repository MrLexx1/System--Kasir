let keranjangBelanja = [];

function main() {
  alert("Selamat datang di Sistem Kasir!");

  while (true) {
    let pilihan = prompt(
      "Pilih menu:\n1. Tambahkan barang\n2. Hitung total\n3. Keluar\nMasukkan nomor pilihan:"
    );

    if (pilihan === "1") {
      let namaBarang = prompt("Masukkan nama barang:");
      let hargaBarang = parseFloat(prompt("Masukkan harga barang:"));

      if (!isNaN(hargaBarang)) {
        tambahBarang(namaBarang, hargaBarang);
        alert(`Barang ${namaBarang} berhasil ditambahkan.`);
      } else {
        alert("Harga barang tidak valid!");
      }
    } else if (pilihan === "2") {
      let total = hitungTotal();
      alert("Total harga semua barang: Rp" + total);
      tampilkanKeranjang(0);
    } else if (pilihan === "3") {
      keluar();
      break;
    } else {
      alert("Pilihan tidak valid, coba lagi.");
    }
  }
}

function tambahBarang(nama, harga) {
  keranjangBelanja.push({ nama: nama, harga: harga });
}

function hitungTotal() {
  let total = 0;
  for (let item of keranjangBelanja) {
    total += item.harga;
  }
  return total;
}

function tampilkanKeranjang(index) {
  if (index >= keranjangBelanja.length) return;
  alert(
    `${index + 1}. ${keranjangBelanja[index].nama} - Rp${
      keranjangBelanja[index].harga
    }`
  );
  tampilkanKeranjang(index + 1);
}

const keluar = function () {
  alert("Terima kasih telah menggunakan Sistem Kasir.");
};

main();
