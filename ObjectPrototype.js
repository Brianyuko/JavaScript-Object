// Object Prototype
function mahasiswa(Nama, NIM, Kelas){
    this.Nama = Nama;
    this.NIM = NIM;
    this.Kelas = Kelas;
}

// Tambah Property diluar fungsi
mahasiswa.prototype.hobi = "BOLOS";

var Arsyi = new mahasiswa("Arsyi", 124001231, "IS - 02")
var Faza = new mahasiswa("Faza", 2132137, 03)
var Angga = new mahasiswa("Angga", 418001580, 02)

document.getElementById('box').innerHTML = "Nama : " + Arsyi.Nama+ "<br>NIM: " + Arsyi.NIM+
"<br>Kelas: " + Arsyi.Kelas+ "<br>Hobi: " + Arsyi.hobi;
