/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
// Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/* Esto es
un comentario
en varias líneas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myString = "Albert"  // String
let myNumber = 8    // Number
let myBool = true   // Boolean
let myUndefined     // Undefined
let myNull = null   // Null
let mySymbol = Symbol("mysymbol")   // Symbol
let myBigInt = 3423423423423423423432423n // BigInt

// 4. Imprime por consola el valor de todas las variables
console.log(myString)
console.log(myNumber)
console.log(myBool)
console.log(myUndefined)
console.log(myNull)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBool)
console.log(typeof myUndefined)
console.log(typeof myNull)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myString = "Marc"  // String
myNumber = 10    // Number
myBool = false   // Boolean
myUndefined = undefined    // Undefined
myNull = null   // Null
mySymbol = Symbol("othersymbol")   // Symbol
myBigInt = 765534562134623456234513452346n // BigInt

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myString = 10  // String --> Number
myNumber = false    // Number --> Boolean
myBool = undefined   // Boolean --> Undefined
myUndefined = null    // Undefined --> Null
myNull = Symbol("thirdsymbol")   // Null --> Symbol
mySymbol = 765534562134623456234513452346n   // Symbol --> BigInt
myBigInt = "Marc" // BigInt --> String

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myString2 = "Pepe"  // String
const myNumber2 = 82    // Number
const myBool2 = false   // Boolean
const myUndefined2 = undefined     // Undefined
const myNull2 = null   // Null
const mySymbol2 = Symbol("mysymbol2")   // Symbol
const myBigInt2 = 56734563452345423423423432423n // BigInt

// 9. A continuación, modifica los valores de las constantes
// const myString2 = "Hola"  // String
// const myNumber2 = 53    // Number
// const myBool2 = true   // Boolean
// const myUndefined2 = undefined     // Undefined
// const myNull2 = null   // Null
// const mySymbol2 = Symbol("mysymbol3")   // Symbol
// const myBigInt2 = 56734563452345423423423432423n // BigInt

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser
// Cannot redeclare block-scoped variable 'myNumber2'
// Cannot redeclare block-scoped variable 'myBool2'
// Cannot redeclare block-scoped variable 'myUndefined2'
// Cannot redeclare block-scoped variable 'myNull2'
// Cannot redeclare block-scoped variable 'mySymbol2'
// Cannot redeclare block-scoped variable 'myBigInt2'
