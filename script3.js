var nilai = [1, 7, 4, 5, 3];

// Ini fungsi buat mengurutkan nilai dari yang terbesar ke yang terkecil.
nilai.sort(function (a, b) {
  return b - a;
});

// Print nilai.
// Nilai yang terbesar berada pada urutan pertama, jadi ngambilnya nilai[0]
// Nilai terkecil, jadi ngambilnya nilai[4]
console.log(nilai[0] + ", " + nilai[4]);
