// Strings (cadenas de texto)

// Concatenación
let myName = "Albert"
let greeting = "Hola, " + myName + "!"

console.log(greeting)   // Hola, Albert!
console.log(typeof greting)     // undefined

// Longitud
console.log(greeting.length)    // 13

// Acceso a caracteres
console.log(greeting[0])    // H
console.log(greeting[12])   // !

// Métodos comunes
console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Albert")) // Índice donde empieza
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Pepe"))
console.log(greeting.includes("Albert")) // Incluye
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Pepe"))
console.log(greeting.slice(0, 8)) // Sección
console.log(greeting.replace("Albert", "Pepe")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias línenas
let message = `Hola, me
llamo Albert
y estoy aprendiendo`
console.log(message)

// Interpolación de valores
let email = "nombre.apellido@gmail.com"
console.log(`Hola, ${myName}! Escribe tu email en el formato ${email}:`)