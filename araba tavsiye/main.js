//Girilen değerlerin aktarılıcağı dizi.
let entred = [];

// Tavsiye verilecek arabalar.
let Hnda = [3, 3, 4, 4];
let Mrc = [5, 4, 2, 4];
let Toyt = [3, 3, 4, 3];
let Vw = [4, 3, 3, 3];
let Opl = [2, 2, 5, 2];
let Ford = [2, 3, 5, 3];

// Parametrelerin değişen değerlerininin ekrana yansıtıldığı kısım.
//---------------------------------------
function confUpdate() {
    var val = document.getElementById("confInp").value;
    document.getElementById("conf").innerHTML = val;
};

function pwrUpdate() {
    var val = document.getElementById("pwrInp").value;
    document.getElementById("pwr").innerHTML = val;
};

function ecoUpdate() {
    var val = document.getElementById("ecoInp").value;
    document.getElementById("eco").innerHTML = val;
};

function sprUpdate() {
    var val = document.getElementById("sprInp").value;
    document.getElementById("spr").innerHTML = val;
};
//---------------------------------------


//Verilen parametre değerlerine göre ekrana arabanın döndürüldüğü kısm.
function loadCar() {
    getMyArr();
    arrMatch();
};


// Verilen değerlerin hangi arabayla eşleştiğinin kontrol edildiği kısım.
//---------------------------------------
function arrMatch() {
    if (entred.join() === Hnda.join()) {
        document.getElementById("Hnda").style.display = "flex";
    }
    else if (entred.join() === Mrc.join()) {
        document.getElementById("Mrc").style.display = "flex";
    }
    else if (entred.join() == Toyt.join()) {
        document.getElementById("Toyt").style.display = "flex";
    }
    else if (entred.join() == Vw.join()) {
        document.getElementById("Vw").style.display = "flex";
    }
    else if (entred.join() == Ford.join()) {
        document.getElementById("Ford").style.display = "flex";
    }
    else if (entred.join() == Opl.join()) {
        document.getElementById("Opl").style.display = "flex";
    } else {
        document.getElementById("none").style.display = "flex";
    }

};
//---------------------------------------

//Girilen parametre değerlerinin diziye aktarılıdığı kısım. 
function getMyArr() {
    entred[0] = Number(document.getElementById("conf").innerHTML);
    entred[1] = Number(document.getElementById("pwr").innerHTML);
    entred[2] = Number(document.getElementById("eco").innerHTML);
    entred[3] = Number(document.getElementById("spr").innerHTML);
};

