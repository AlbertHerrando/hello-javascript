// Loops o bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`Hola, valor ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle infinito
// while(true){
// }

// do while

i = 6
do {
    console.log(`Adiós ${i}`)
    i--
} while (i > 3)

// for of

myArray = [1, 2, 3, 4]

mySet = new Set(["Albert", "Dev", 37, true, "Hola"])

myMap = new Map([
    ["name", "Albert"],
    ["age", 28],
    ["alias", "Albertdev"]
])

myString = "Hello world!"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// break y continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue    // Salta al siguiente valor del for
    } else if (i === 7){
        break       // Acaba el for entero
    }
    console.log(`Hola ${i}`)
}