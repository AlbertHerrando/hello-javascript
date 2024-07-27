// Operadores aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División´

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)


// Operadores de asignación

let myVariable = 2
console.log(myVariable)

myVariable += 2 // Suma con asignación
console.log(myVariable)

myVariable -= 2 // Resta con asignación
myVariable *= 2 // Multiplicación con asignación
myVariable /= 2 // División con asignación
myVariable %= 2 // Módulo con asignación
myVariable **= 2 // Exponente con asignación


// Operadores de comparación

a = 6
b = 9

console.log(a > b)  // Mayor que
console.log(a < b)  // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que

// Igualdad por valor
console.log(a == b)     // false
console.log(a == 6)     // true
console.log(a == "6")   // true
console.log(a == a)     // true

// Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === a)    // true
console.log(a === 6)    // true
console.log(a === "6")  // false

// Desigualdad por valor
console.log(a != 6)     // false

// Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(a !== "6")  // true

// Otros
// 0 --> false
// 1 --> true
// qualquier número --> true

console.log(0 == false) // true
console.log(1 == false) // false
console.log(2 == false) // false
console.log(0 == "")    // true
console.log(0 == " ")   // true
console.log(0 == '')    // true
console.log(0 == "Hola")    // false
console.log(0 === "")   // false
console.log(undefined == null)  // true
console.log(undefined === null) // false


/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)  // false
console.log(5 < 10 && 15 < 20)  // true
console.log(5 < 10 && 15 > 20)  // false
console.log(5 > 10 && 15 > 20 && 30 > 40)   // false

// or (||)
console.log(5 > 10 || 15 > 20)  // false
console.log(5 < 10 || 15 < 20)  // true
console.log(5 < 10 || 15 > 20)  // true 
console.log(5 > 10 || 15 > 20 || 30 > 40)   // false

console.log(5 > 10 && 15 > 20 || 30 < 40)   // true

// not (!)
console.log(!true)  // false
console.log(!false) // true
console.log(!(5 > 10 && 15 > 20))   //true
console.log(!(5 > 10 || 15 > 20))   //true


// Operadores ternarios

const isRaining = true
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")