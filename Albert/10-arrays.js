// Arrays

// Declaración

let myArray = []            // RECOMENDADA
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]           // Genera un array con 1 elemento con valor 3
myArray2 = new Array(3) // Genera un array con 3 elementos co valores vacios

console.log(myArray)
console.log(myArray2)

myArray= [1, 2, 3, 4]               // Genera [1, 2, 3, 4] 
myArray2 = new Array(1, 2, 3, 4)    // Genera [1, 2, 3, 4] 

console.log(myArray)    
console.log(myArray2)

myArray = ["Albert", "Pepe", "Dev", 28, true]   // Mezcla de tipos de datos
myArray2 = new Array("Albert", "Pepe", "Dev", 28, true)

console.log(myArray)    
console.log(myArray2)

// Modificación de valores

myArray2 = new Array(3)
myArray2[2] = "Albert"
myArray2[1] = "Pepe"

console.log(myArray2)

myArray2[4] = "Dev"

console.log(myArray2)

myArray = []
myArray[2] = "Albert"
myArray[1] = "Pepe"

console.log(myArray)

// Métodos comunes

myArray = []

// push() y pop()

myArray.push("Albert") // Añade un valor al final del array
myArray.push("Pepe")
myArray.push(28)
myArray.push(true)

console.log(myArray)

console.log(myArray.pop())  // Elimina el último valor y lo devuelve
let eliminado = myArray.pop()

console.log(myArray)
console.log(eliminado)


// shift y unshift

console.log(myArray.shift())   // Elimina el primer elemento del array y lo devuelve
console.log(myArray)

myArray.unshift("Dev", 1234)    // Agrega uno o más valores al principio del array
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Albert", "Pepe", "Dev", 28, true]

let myNewArray = myArray.slice(1, 3)    // Devuelve una porcion de slice(a, b), de "a" a "b-1"

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)    // Elimina los elementos de splice(a, b), empieza en el índice "a" i elimina "b" número de elementos
console.log(myArray)

myArray = ["Albert", "Pepe", "Dev", 28, true]

myArray.splice(1, 2, "Nuevo valor") // También puede añadir valores en la posición de los valores eliminados
console.log(myArray)