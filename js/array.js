const num = 3;
// num = 4;

// edad = [18, 14, 15, 92, 78, 63];
// console.log(edad[2]);

// let nombre = ["Juliana", "Marbel", "Zuluaga", "Velez", "Santos"];

// console.log(nombre);

// let correo = [
//     "Juliana@misena.edu.co",
//     "Marbel@misena.edu.co",
//     "Zuluaga@misena.edu.co",
//     "Velez@misena.edu.co",
//     "Santos@misena.edu.co"
// ];

// console.log(correo.length);

let nombre1 = ["Luis", "Fernando", "Juan", "Sebastian", "Piedad"];
let apellidos = ["Rodriguez", "Cardona", "Rodriguez", "Cardona", "Cardona"];
let edades = [19, 20, 22, 23, 43];
let telefono = ["3184077246", "3028661865", "3163585331", "1223409876", "3164326162"];
let direccion = ["carrera 1", "carrera 2", "carrera 3", "carrera 4", "carrera 5"];

console.log(nombre1[0] + " " + apellidos[0] + " | " 
            + edades[0] + " | " + telefono[0] + " | " 
            + direccion[0]);
console.log(nombre1[1] + " " + apellidos[1] + " | " 
            + edades[1] + " | " + telefono[1] + " | " 
            + direccion[1]);
console.log(nombre1[2] + " " + apellidos[2] + " | " 
            + edades[2] + " | " + telefono[2] + " | " 
            + direccion[2]);
console.log(nombre1[3] + " " + apellidos[3] + " | " 
            + edades[3] + " | " + telefono[3] + " | " 
            + direccion[3]);
console.log(nombre1[4] + " " + apellidos[4] + " | " 
            + edades[4] + " | " + telefono[4] + " | " 
            + direccion[4]);


// nombre1.push("David") // se agrega
// nombre1.splice(0,1) //elimina el parametro y se especifica hasta donde va a borrar

for (let i = 0; i < nombre1.length ; i ++){
    // console.log(nombre1[1]);
    // console.log(nombre1[i] + " " + apellidos); concatenacion de la manera antigua
    console.log(`El nombre de la persona: ${nombre1[i]} ${apellidos[i]} 
la edad es: ${edades[i]} 
el telefono es: ${telefono[i]}
la direccion es: ${direccion[i]}`)
}

//FUNCIONA SOLO PARA UN ARREGLO
nombre1.forEach(element =>{
    console.log(`el nombre es ${element}`)        
});

// LAS `` SE VAN A UTILIZAR PARA CONBINAR TEXTOS Y ARREGLOS


// nombre1.map() investigar

let persona = {"nombre": "Luis", "Apellido": "Becerra", "gustos": ["futbol", "basket", "natacion"]};
console.log(persona)
// el valor que tiene una propiedad puede ser una valor o incluso un objeto
// Tambien es posible tener objetos dentro de arreglos-vectores

let cursos = [{
    "nombre": "ADSI",
    "id": "'098",
    "fecha": "20220202",
    "duracion": 10
}, {
    "nombre": "ADSO",
    "id": "78",
    "fecha": "1",
    "duracion": 10,
    "valor": "gratis"
}, {
    "nombre": "Recursos humanos",
    "id": "4",
    "fecha": "1",
    "duracion": 110
}, {
    "nombre": "dsalksklj",
    "id": "jkl",
    "fecha": "1",
    "duracion": 10
}, {
    "nombre": "",
    "id": "",
    "fecha": "1",
    "duracion": 10
}]; // todos los objetos deben tener un nombre 
console.log(cursos)
