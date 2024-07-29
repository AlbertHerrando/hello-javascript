// Ejercicios de Condicionales

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
const myName = "Albert"
let = a = "Albert"
if (a === myName){
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const username = "Albert"
const password = "1234"

let inputUsername = "Albert"
let inputPassword = "12345"

if (inputUsername === username && inputPassword === password){
    console.log(`Hola ${inputUsername}, bienvenido.`)
} else {
    console.log("Acceso denegado")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let n = 0

if (n > 0){
    console.log("El número es positivo")
} else if (n < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const mayoriaEdad = 18
let edad = 10
let diferencia

if (edad >= mayoriaEdad){
    console.log("Adelante, puede votar, usted es mayor de edad")
} else {
    diferencia = mayoriaEdad - edad
    console.log(`Usted no puede votar, tiene ${edad} años. Le quedan ${diferencia} años para poder votar.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
resultado = edad >= 18 ? "adulto" : "menor"
console.log(resultado)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 1
let estacion

if (mes === 1 || mes === 2 || mes === 12) {
    estacion = "Invierno"
} else if (mes === 3 || mes === 4 || mes === 5) {
    estacion = "Primavera"
} else if (mes === 6 || mes === 7 || mes === 8) {
    estacion = "Verano"
} else {
    estacion = "Otoño"
}

console.log(estacion)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let nDias

if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
    nDias = 31
} else if (mes === 2) {
    nDias = 28
} else {
    nDias = 30
}

console.log(nDias)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Inglés"
let saludo

switch (idioma) {
    case "Español":
        saludo = "Hola"
        break
    case "Inglés":
        saludo = "Hello"
        break
    case "Coreano":
        saludo = "Anyonhaseyo"
        break
    default:
        saludo = "Saludo por defecto"
}

console.log(`${saludo}, has escogido el siguiente idioma: ${idioma}`)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = 1;

switch (mes) {
    case 1:
    case 2:
    case 12:
        estacion = "Invierno"
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Primavera"
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Verano"
        break;
    default:
        estacion = "Otoño"
}

console.log(estacion);


// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = 4

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        nDias = 31
        break;
    case 2:
        nDias = 28
        break;
    default:
        nDias = 30
}

console.log(nDias)