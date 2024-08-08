// Loops o bucles

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(`Número ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let j = 1
let suma = 0
while (j <= 100) {
    suma += j
    j++
}
console.log(`Resultado de la suma: ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let k = 1
do {
    if (k % 2 == 0) {
        console.log(`Número par encontrado: ${k}`)
    }
    k++
} while (k <= 50)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Juan", "Pepe", "David", "María", "Laura"]

for (let nombre of nombres){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Esto es un texto con varias vocales"
let numeroVocales = 0
let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ"

for (let letra of texto) {
    if (vocales.includes(letra)) {
        numeroVocales++
    }
}
console.log(`El número de vocales en la cadena de texto es: ${numeroVocales}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4]
let producto = 1

for (let numero of numeros) {
    producto *= numero
}
console.log(`El producto es: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let n = 1; n <= 10; n++) {
    console.log(`${n}x5 = ${n*5}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let textoAInvertir = "Este texto se tiene que invertir"
let textoInvertido = ""

for (let c of textoAInvertir) {
    textoInvertido = c + textoInvertido
}
console.log(textoInvertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let num1 = 0, num2 = 1

console.log(num1); // Imprimimos el primer número de la secuencia
console.log(num2); // Imprimimos el segundo número de la secuencia

// Usamos un bucle para generar los siguientes 8 números
for (let i = 3; i <= 10; i++) {
    let siguienteNumero = num1 + num2; // Calculamos el siguiente número
    console.log(siguienteNumero);      // Lo imprimimos
    
    // Actualizamos los números para la siguiente iteración
    num1 = num2;
    num2 = siguienteNumero;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arrayNumeros = [1, 5, 10, 15, 20, 25]
let arrayNumerosMayores10 = []

for (let n of arrayNumeros) {
    if (n > 10) {
        arrayNumerosMayores10.push(n)
    }
}
console.log(arrayNumerosMayores10)