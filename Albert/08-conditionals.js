// Conditionals in JavaScript

// if, else if, else

// if (si)

let age = 28

if (age === 28){
    console.log(`Tienes ${age} años`)
}

// else (si no)

if (age === 28){
    console.log("Tienes 28 años, ¡la edad perfecta!")
} else {
    console.log(`Tienes ${age} años`)
}

// else if (si no, si)

if (age === 28){
    console.log("Tienes 28 años, ¡la edad perfecta!")
} else if (age < 18){
    console.log(`Eres menor de edad`)
} else {
    console.log(`Tienes ${age} años`)
}


// Operador ternario
const message = age === 28 ? "La edad es 28" : "La edad no es 28"
console.log(message)

// Switch

let day = 3
let dayName

switch (day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)