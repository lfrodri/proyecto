let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let c7 = document.getElementById("c7");
let c8 = document.getElementById("c8");
let c9 = document.getElementById("c9");
let i = new Boolean(false);
let lista = [];
let borrar = document.getElementById("boton");

c1.addEventListener("click", function () {
    color1(c1);
});
c2.addEventListener("click", function () {
    color1(c2);
});
c3.addEventListener("click", function () {
    color1(c3);
});
c4.addEventListener("click", function () {
    color1(c4);
});
c5.addEventListener("click", function () {
    color1(c5);
});
c6.addEventListener("click", function () {
    color1(c6);
});
c7.addEventListener("click", function () {
    color1(c7);
});
c8.addEventListener("click", function () {
    color1(c8);
});
c9.addEventListener("click", function () {
    color1(c9);
});
borrar.addEventListener("click", function () {
    ElimAll();
})

function ElimAll() {
    lista.forEach(t => elimin(t))
    lista = [];
    i = false;
}

function elimin(e) {
    e.style.background = "white";
}

function color1(e) {

    if (lista.indexOf(e) > -1) {
        return;
    }
    if (i == false) {
        e.style.background = "red";
        i = true
        lista.push(e);
    }
    else {
        e.style.background = "blue";
        i = false
        lista.push(e);
    }comprobar();    
}

function comprobar() {
    if ((c1.style.background == "red" && c2.style.background == "red" && c3.style.background == "red")
        || (c1.style.background == "red" && c4.style.background == "red" && c7.style.background == "red")
        || (c1.style.background == "red" && c5.style.background == "red" && c9.style.background == "red")
        || (c2.style.background == "red" && c5.style.background == "red" && c8.style.background == "red")
        || (c3.style.background == "red" && c6.style.background == "red" && c9.style.background == "red")
        || (c3.style.background == "red" && c5.style.background == "red" && c7.style.background == "red")
        || (c4.style.background == "red" && c5.style.background == "red" && c6.style.background == "red")
        || (c7.style.background == "red" && c8.style.background == "red" && c9.style.background == "red")) {
        alert("Ganó el rojo");
        return;
    }

    if ((c1.style.background == "blue" && c2.style.background == "blue" && c3.style.background == "blue")
        || (c1.style.background == "blue" && c4.style.background == "blue" && c7.style.background == "blue")
        || (c1.style.background == "blue" && c5.style.background == "blue" && c9.style.background == "blue")
        || (c2.style.background == "blue" && c5.style.background == "blue" && c8.style.background == "blue")
        || (c3.style.background == "blue" && c6.style.background == "blue" && c9.style.background == "blue")
        || (c3.style.background == "blue" && c5.style.background == "blue" && c7.style.background == "blue")
        || (c4.style.background == "blue" && c5.style.background == "blue" && c6.style.background == "blue")
        || (c7.style.background == "blue" && c8.style.background == "blue" && c9.style.background == "blue")) {
        alert("Ganó el azul");
    }

    if (lista.length == 9) {
        alert("Empate");
        ElimAll();
    }
}