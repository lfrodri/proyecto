function suma(){
    let n1 = 3;
    let n2 = 4;
    let sum = n1 + n2;
    return sum;
}

// console.log(suma());



function resta(n1, n2){
    let resta = n1 - n2;
    return resta;
}

// console.log(resta(90, 10))


// const sumar = () => {
//     let n1 = 3;
//     let n2 = 2;
//     let su = n1 + n2;
// }
const fun = (mensa) => {
    let n1 = 3;
    let n2 = 2;
    let su = n1 + n2;
    return su + mensa;
}
console.log(fun("Hola"));

// let d;
// d = 50;
// d => d + 3;

// const nota = d => d + 3;

// function getNombre(){
//     let nombre = "Maria";
//     return(nombre);
// } 

// const getNombre = () => "Maria";

// let apellido;
// apellido = "Rodriguez";

// apellido => console.log(apellido)
// console.log(apellido);


// params => ({"foo": "a" })
// console.log(getNombre())

function multiplicacion (n1, n2=30){
    return n1*n2;
}
console.log(multiplicacion(6))

// let multi = (n1, n2=40) => n1*n2;

let multi = (n1, n2=40) => {
    let res = n1*n2;
    let mens = `el resultado de la multiplicacion es: ${res}`
    return mens;
}

console.log(multi(10))


let contador = document.getElementById("caja");
let tota = 0;
setInterval(() => {
    tota += 1;
    console.log(tota);
    contador.innerHTML = tota;
}, 1000)

