function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
console.log(random(1,45))

let contadorsito = 11;
let tota = 0;
setInterval(() => {
    tota += 11;
    console.log(tota);
    contadorsito.innerHTML = tota;
}, 1000)
console.log(11);

let contador = document.getElementById(contadorsito);
contador.setAttribute("id", random());
contador.id=random(1,45);
console.log(contador);

setInterval(() => {
    console.log(random(1,45));
    contador.innerHTML = random(1,45);
}, 1000)

// let divColor = document.getElementById();
// divColor.style.background="red";

