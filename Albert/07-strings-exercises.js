// Ejercicios Strings

// 1. Concatena dos cadenas de texto
console.log("Hola " + "mundo!")

// 2. Muestra la longitud de una cadena de texto
let myName = "Albert"
console.log(myName.length)

// 3. Muestra el primer y último carácter de un string
console.log(myName[0])
console.log(myName[myName.length-1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(myName.toLowerCase())
console.log(myName.toUpperCase())

// 5. Crea una cadena de texto en varias líneas
let myLongString = `Esto es un
texto en varias
líneas.`
console.log(myLongString)

// 6. Interpola el valor de una variable en un string
let day = "Lunes"
let message = `Hola ${myName}, buenos días, hoy es ${day}. ¿Qué harás hoy?`
console.log(message)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = "Esto es una frase con muchos espacios en blanco."
console.log(frase.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(frase.includes("frase"))

// 9. Comprueba si dos strings son iguales
console.log("Lunes"=="Lunes")
console.log("Lunes"==="Lunes")

console.log("Lunes"=="Martes")
console.log("Lunes"==="Martes")

// 10. Comprueba si dos strings tienen la misma longitud
const mes = "Enero"
const hora = "Dos y cuarto"
console.log(mes.length === mes.length)
console.log(mes.length === hora.length)
