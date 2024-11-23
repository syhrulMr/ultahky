// Daftar ucapan yang akan muncul secara bergantian
const ucapan = [
  {
    message: "Selamat Ulang Tahun! 🎂",
    subtext: "Semoga harimu menyenangkan!",
  },
  {
    message: "Happy Birthday! 🎉",
    subtext: "Semoga semua impianmu menjadi kenyataan.",
  },
  {
    message: "2024-11-24🎉",
    subtext: "1995-11-24😊",
  },
  {
    message: "Barakallah Fii Umrik! 🌟",
    subtext: "Semoga selalu diberkahi.",
  },
  {
    message: "Wishing You the Best! 🎈",
    subtext:
      "Hari ini adalah harimu yang dimana saya pernah berjanji hal istimewa sama kita",
  },
  {
    message: "HBD! 🎁",
    subtext: "Semoga sukses selalu menyertai!",
  },
  {
    message: "Terimakasih untuk semua selama ini!😉",
    subtext:
      "Terima kasih banyak yahh atas semua kenangan, pengalaman pertama, firstime, dan momen-momen yang kita lewati bersama. Senang sekali bisa mengenalmu lebih dalam, meski akhirnya aku tahu bahwa aku hanya bagian kecil yang tidak diakui.",
  },
  {
    message: "Semoga kamu bahagia ke depannya😉",
    subtext: "03.10.23-03.10.24",
  },
];

// Indeks ucapan saat ini
let currentIndex = 0;

// Fungsi untuk mengubah ucapan dan mengatur backsound
function ubahUcapan() {
  const pesanUtama = document.getElementById("pesanUtama");
  const pesanKecil = document.getElementById("pesanKecil");

  // Ambil elemen audio
  const backsound = document.getElementById("backsound");
  const backsoundAkhir = document.getElementById("backsoundAkhir");

  // Update ke ucapan berikutnya
  currentIndex++;

  // Hitung jumlah kartu (untuk mempermudah logika)
  const totalKartu = ucapan.length;

  if (currentIndex < totalKartu - 2) {
    // Jika masih di kartu biasa (bukan 2-4 kartu terakhir)
    pesanUtama.textContent = ucapan[currentIndex].message;
    pesanKecil.textContent = ucapan[currentIndex].subtext;

    // Ganti warna kartu
    const kartu = document.getElementById("kartuUcapan");
    kartu.style.background = `hsl(${Math.random() * 360}, 80%, 90%)`;

    // Pastikan backsound utama tetap berjalan
    if (backsound.paused) {
      backsound.play();
      backsound.volume = 1; // Volume normal saat backsound utama diputar
    }
  } else if (currentIndex >= totalKartu - 2 && currentIndex < totalKartu) {
    // Jika di 2-4 kartu terakhir
    pesanUtama.textContent = ucapan[currentIndex].message;
    pesanKecil.textContent = ucapan[currentIndex].subtext;

    // Hentikan backsound utama dan mainkan backsound akhir
    if (!backsound.paused) {
      backsound.volume = 0.5; // Menurunkan volume backsound utama
    }
    if (backsoundAkhir.paused) {
      backsoundAkhir.play();
      backsoundAkhir.volume = 0.9; // Volume normal untuk backsound akhir
    }
  } else {
    // Jika melewati kartu terakhir, kembali ke awal
    currentIndex = 0;

    // Reset ke kartu pertama
    pesanUtama.textContent = ucapan[currentIndex].message;
    pesanKecil.textContent = ucapan[currentIndex].subtext;

    // Hentikan backsound akhir dan mainkan backsound utama
    if (!backsoundAkhir.paused) {
      backsoundAkhir.pause();
      backsoundAkhir.currentTime = 0;
    }
    backsound.play();
    backsound.volume = 1; // Volume normal saat backsound utama diputar
  }
}
