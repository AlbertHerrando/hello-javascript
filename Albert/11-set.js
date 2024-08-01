// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Albert","Pepe","Dev", 28, true,"pepe.garcia@gmail.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://google.com")     // Añade un valor al set (ordenado) y lo añade al final

console.log(mySet)

mySet.delete("https://google.com")  // Elimina un valor concreto del set

console.log(mySet)

console.log(mySet.delete("Albert"))     // true (devuelve un bool) true- se ha borrado / false - no se ha borrado
console.log(mySet.delete("Alberto"))    // false (devuelve un bool) true- se ha borrado / false - no se ha borrado

console.log(mySet)

// has

console.log(mySet.has("Dev"))   // Devuelve true o false si el set contiene un elemento
console.log(mySet.has("Hola"))

// size

console.log(mySet.size)     // Tamaño del set

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set
mySet = new Set(myArray)
console.log(mySet)

// Lo sets no admiten duplicados

mySet.add("Dev")    // No da error, pero tampoco añade nada si ya estaba en el set
mySet.add("Dev")
mySet.add("Dev")
mySet.add("Dev")
console.log(mySet)