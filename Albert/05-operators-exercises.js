// Ejercicios Albert

// 1. Crea una variable para cada operación aritmética
let a = 5
let b = 10

let variable1 = a + b
let variable2 = a - b 
let variable3 = a * b
let variable4 = a / b
let variable5 = a % b
let variable6 = a ** b
let variable7 = a++
let variable8 = b--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let variable9 = variable1
let variable10 = variable1 += variable2
let variable11 = variable1 -= variable2
let variable12 = variable1 *= variable2
let variable13 = variable1 /= variable2
let variable14 = variable1 %= variable2
let variable15 = variable1 **= variable2

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(10 < 100)
console.log(10 == 10)
console.log(10 == "10")
console.log(10 === 10)
console.log(10 !== "10")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(100 <= 10)
console.log(10 == 100)
console.log(10 != "10")
console.log(10 === true)
console.log(10 !== 10)

// 5. Utiliza el operador lógico and
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// 6. Utiliza el operador lógico or
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

// 7. Combina ambos operadores lógicos
console.log(5 > 10 && 15 > 20 || 30 < 40)

// 8. Añade alguna negación
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// 9. Utiliza el operador ternario
const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")

// 10. Combina operadores aritméticos, de comparáción y lógicas
let c = 20
let d = 100
const resultado = ((c + d > c * d) || (c - d <= c + d))
resultado ? console.log("Opción de true") : console.log("Opción de false")