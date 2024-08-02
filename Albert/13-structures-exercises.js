// Ejercicios de Arrays, Sets y Maps

// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "elefante", "gallina", "serpiente"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("araña")   // Al principio
animales.push("camaleón")   // Al final
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros
let libros = new Set([
    "Cien años de soledad",
    "Orgullo y prejuicio",
    "1984",
    "El alquimista",
    "La sombra del viento"
])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido
libros.add("Dune")
libros.add("1984")
console.log(libros)

// 6. Elimina uno concreto a tu elección
libros.delete("El alquimista")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let calendario = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Setiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
])
console.log(calendario)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(calendario.has(5))
console.log(calendario.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
calendario.set("mesesVerano", [6, 7, 8])
console.log(calendario)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = ["Hola", "Dev", true, true, false, false, 1, 2, 1, 2, 3, "Dev"]
console.log(myArray)

let mySet = new Set(myArray)
console.log(mySet)

let myMap = new Map(mySet.entries())
console.log(myMap)