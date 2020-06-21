// Create Object Option One
var programmer = {
    nama    : "Erwin",
    umur    : 20,
    hobi    : "Photographer",
    getData : function(){
        return "Nama: " + this.nama + "<br>" + "Umur: " + this.umur;
    },
    setData: function(nama){
        this.nama = nama;
    }
};

// Create Object Option Two
var designer = new Object();
designer.nama = "Alex";
designer.umur = 40;
designer.hobi = "Koki"

// Set Object
programmer.setData('Brian')

// Get Object Option One
document.getElementById('umur').innerHTML = programmer.umur;
document.getElementById('hobi').innerHTML = programmer.hobi;

// Get Object Option Two
document.getElementById('nama').innerHTML = designer["nama"];
document.getElementById('box').innerHTML = programmer.getData();
