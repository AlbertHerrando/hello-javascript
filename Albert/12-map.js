// Map (diccionario en otros lenguajes)

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
    ["name", "Albert"],
    ["email", "albertdev@gmail.com"],
    ["age", 28]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "albertdev")         // Agrega un elemento
myMap.set("name", "Albert Herrando")    // o bien Actualiza un elemento existente

console.log(myMap)

// get

console.log(myMap.get("name"))      // Devuelve un valor dada una clave
console.log(myMap.get("surname"))   // undefined (no da error)

// has

console.log(myMap.has("age"))       // true
console.log(myMap.has("surname"))   // false

// delete

myMap.delete("email")   // Elimina un par clave valor, dada una clave

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())       // Devuelve un objeto con las claves: [Map Iterator] { 'name', 'age', 'alias' }
console.log(myMap.values())     // Devuelve un objeto con los valores: [Map Iterator] { 'Albert Herrando', 28, 'albertdev' }
console.log(myMap.entries())    // Devuelve un objeto con las claves y valores

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)