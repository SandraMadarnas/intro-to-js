// ARRAYS
// Las arrays son listas, donde podemos almacenar cualquier tipo de dato.

// const thisIsAnArray = [
//     1,
//     'perrete',
//     [1, 2, 3, 4, 5],
//     false,
//     {
//         name: 'Zarigüeya',
//         animal: 'cat',
//         age: 2.5
//     }
// ];

// console.log(thisIsAnArray);

// Las arrays tienen una propiedad length, como las strings,
// que nos permite conocer su longitud

// console.log(thisIsAnArray.length);

// Además, podemos acceder a cada uno de sus índices con
// corchetes: RECORDAD! EL PRIMER ÍNDICE SIEMPRE ES 0!

// console.log(thisIsAnArray[0]);
// console.log(thisIsAnArray[2]);
// console.log(thisIsAnArray[thisIsAnArray.length - 1]);

// Podemos utilizar el spread operator para hacer copias
// de una array

// const thisIsAnotherArray = [...thisIsAnArray];

// console.log(thisIsAnotherArray)

// Las arrays son pointers a un lugar de la memoria

// const arrayExampleOne = [1, 2, 3, 4];
// const ourSecondExampleArray = arrayExampleOne;

// arrayExampleOne[0] = "Did you expect this?";

// console.log(arrayExampleOne);
// console.log(ourSecondExampleArray);

// Para evitar modificar las arrays originales podemos
// hacer copias

// const arrayExampleOne = [1, 2, 3, 4];
// const ourSecondExampleArray = [...arrayExampleOne]; //Copia

// arrayExampleOne[0] = "Did you expect this?";

// console.log(arrayExampleOne);
// console.log(ourSecondExampleArray);

// Podemos iterar en una array gracias a su método forEach

// const forEachExampleArray = ['one', 'two', 'three'];

// forEachExampleArray.forEach(word => {
//     console.log(word);
// })

// const numbers = ['one', 'two', 'three'];

// number.forEach(word => {
//     console.log(word);
// })

// EJERCICIOS

const exercisesArray = ['one', 'two', 'three', 4, 5, 6, [7, 8, 9, 'ten']];

// 1. Imprime en el terminal la longitud de exercisesArray
// console.log(exercisesArray.length);

// 2. Imprime en el terminal el primer elemento de exercisesArray
// console.log(exercisesArray[0]);

// 3. Imprime en el terminal el elemento 'two' dentro de exercisesArray
// console.log(exercisesArray[1]);

// 4. Imprime en el terminal el array almacenado dentro de exercisesArray
// console.log(exercisesArray[6]);
// console.log(exercisesArray[exercisesArray[6].leght-1]);  //REVISAR

// 5. Imprime en el terminal la longitud del array almacenado dentro de exercisesArray
// console.log(exercisesArray[exercisesArray[6].leght-1].length);
// console.log(exercisesArray[exercisesArray[6].leght-(6(3))]);//REVISAR

// 6. Haz una copia de exercisesArray
// const copia = [...exercisesArray];
// console.log(copia);

// 7. Cambia el primer índice de exercisesArray por el valor numérico 1
// exercisesArray[0] = 1;

// 8. Utiliza la función printOnlyStrings para imprimir en consola
// todas las strings almacenadas en exercisesArray

// const printOnlyStrings = input => {
//     if (typeof input === 'string') {
//         console.log(input);
//     }
// }

// exercisesArray.forEach(element => printOnlyStrings(element));
// exercisesArray.forEach(printOnlyStrings);

// MÉTODOS

// 0. Determina si exampleArrayToCheck es un array

// const exampleArrayToCheck = { one: 'two' };
// console.log(Array.isArray(exampleArrayToCheck));
// console.log(typeof []);
// console.log(typeof []);

// 1. Une las arrays mergeOne y mergeTwo en una única array

// const mergeOne = ['one', 'two', 'three'];
// const mergeTwo = [1, 2, 3];

// const unir = mergeOne + mergeTwo;
// console.log(unir);
// console.log(typeof unir);

// const unir2 = mergeOne.concat(mergeTwo);
// console.log(unir2);

// const unir3 = [...mergeOne,...mergeTwo];
// console.log(unir3);

// 2. Crea una función isLegalAge para determinar si el parámetro
// proporcionado es mayor que 18
// const isLegalAge = (age) => age > 18;


// 3. Utiliza la función isLegalAge para determinar si todos
// los elementos de la array cumplen la condición.
// NOTA: Queremos obtener un true/false

// const ageArray = [19, 38, 92, 84, 28, 71, 39, 44, 29, 91, 45, 32, 19, 63, 32, 33, 45, 18, 47, 54, 19, 46, 75, 51, 23, 34, 81, 108, 72, 26, 28, 24, 41, 51, 52, 75, 41, 51, 64, 81, 26];
// console.log(ageArray.every(age => isLegalAge(age))); //every espera una función





// 4. Crea una función isOverFifty para determinar si el parámetro
// proporcionado es mayor que 50

// 5. Utiliza la función isOverFifty para encontrar las edades
// superiores a 50

// const petsArray = ['dog', 'cat', 'goldfish', 'horse', 'cow', 'goat', 'python', 'parrot', 'ferret',  'hamster', 'pigeon', 'pig', 'rabbit',  'chicken', 'turtle', 'gorilla'];
// const result = petsArray.includes('gorilla');
// console.log(result);



// 6. ¿Puedes encontrar la palabra 'gorilla' en petsArray?

// 7. ¿Si existe, puedes encontrar el índice de 'gorilla' en petsArray?

// 8. Si existe, elimina la palabra 'gorilla' de petsArray

// 9. Imprime en la terminal la nueva lista de mascotas,
// separadas por una coma y un espacio. Ejemplo: "perro, gato, periquito... "

// 10. Vuelve a imprimir la ista, pero ahora en orden inverso

// 11. ¿Alguna de las mascotas tiene más de tres letras?

// 12. Ordena alfabéticamente la lista de mascotas

// 13. Añade un signo de exclamación al final del
// nombre de cada mascota

// 14. Elimina la última mascota de la lista, guarda su
// nombre en una variable e imprímela en la terminal

// 15. Ahora introduce ese nombre al principio del array

// 16. Elimínalo de nuevo del principio del array,
// guardándolo en una nueva variable

// 17. Ahora introdúcelo al final del array

// 19. Imprime por pantalla los primeros 5 animales de la lista

// 20. Completa la lista añadiendo 'Feb' en la segunda posición

const months = ['Jan', 'March', 'April', 'June'];
