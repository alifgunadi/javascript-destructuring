// Destructuring Array
// const alatTulis = ["Buku", "Pensil", "Penghapus"];
// const buku = alatTulis[0];
// const pensil = alatTulis[1];
// const penghapus = alatTulis[2];
// console.log(buku, penghapus);
// console.log(buku, pensil);
// console.log(penghapus, pensil);
// console.log(alatTulis);


// Destructing Array Object
const siswa = {
    nama: "Muhammad Alif Gunadi,",
    umur: "17 tahun,",
    kelas: "12 SMA,",
    tempatLahir: "Padang/",
    tanggalLahir: "20 November 2005.",
}
const {nama, umur, kelas, tempatLahir, tanggalLahir} = siswa;
console.log(nama, umur, kelas, tempatLahir, tanggalLahir);


// Function
// const siswa = {
//     nama: "Muhammad Alif Gunadi,",
//     umur: "17 tahun,",
//     kelas: "12 SMA,",
//     tempatLahir: "Padang/",
//     tanggalLahir: "20 November 2005.",
// }
// function printDataSiswa(nama, umur, kelas, tempatLahir, tanggalLahir) {
//     console.log(nama, umur, kelas, tempatLahir, tanggalLahir);
// }
// printDataSiswa(siswa.nama, siswa.umur, siswa.kelas, siswa.tempatLahir, siswa.tanggalLahir);

// Alias && Default Value
// const siswa = {
//     nama: "Muhammad Alif Gunadi,",
//     umur: "17 tahun,",
//     kelas: "12 SMA,",
//     tempatLahir: "Padang/",
//     tanggalLahir: "20 November 2005.",

// }
// function printDataSiswa2({nama, umur, kelas, tempatLahir:tmp, tanggalLahir:tgl}) {
//     console.log(nama, umur, kelas, tmp, tgl, cita="Ingin memiliki superpower");
// }
// printDataSiswa2(siswa)