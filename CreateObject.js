// Create Object Option One
var programmer = {
    nama    : "Erwin",
    umur    : 20,
    hobi   : "Photographer"
};

// Create Object Option Two
var designer = new Object();
designer.nama = "Alex";
designer.umur = 40;
designer.hobi = "Koki"

// Get Object Option One
document.getElementById('umur').innerHTML = programmer.umur;
document.getElementById('hobi').innerHTML = programmer.hobi;

// Get Object Option Two
document.getElementById('nama').innerHTML = designer["nama"];
