let conf, pwr, eco, sport;

let entred = [];

let Hnda = [3, 3, 4, 4];
let Mrc = [5, 4, 2, 4];
let Toyt = [3, 3, 4, 3];
let Vw = [4, 3, 3, 3];
let Opl = [2, 2, 5, 2];
let Ford = [2, 3, 5, 3];

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

loadCar();

function loadCar() {
    getMyArr();
    console.log(entred)
}



function getMyArr() {
    entred[0] = document.getElementById("conf").innerHTML;
    entred[1] = document.getElementById("pwr").innerHTML;
    entred[2]= document.getElementById("eco").innerHTML;
    entred[3]= document.getElementById("spr").innerHTML;
}
