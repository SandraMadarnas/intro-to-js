// STRINGS
// Son cadenas de caracteres. Los definimos con comillas simples o dobles

// const example = 'Hello, world!';
// console.log(example);

// const secondExample = "Hello, world!"
// console.log(secondExample);

// También podemos utilizar los template literals, que nos permiten:
// 1. Introducir saltos de línea sin utilizar el escape \n
// 2. Introducir variables de JS dentro de la propia string

// const hello = 'Hello';
// const world = 'World';
// const fullString = hello + ' ' + world  // A COMPLETAR POR LOS ESTUDIANTES
// console.log(fullString);

// Podemos concatenar strings con el operador +

// const hello = 'Hello';
// const world = 'World';
// const fullString = '' // A COMPLETAR POR LOS ESTUDIANTES   
// console.log(fullString);

// Además, las strings tienen una propiedad length...
// const leaveThisUncommented = '   This is an Example String. Use your methods here   ';
// console.log(leaveThisUncommented.length);

// ...que nos permite utilizarlas como arrays

// console.log(leaveThisUncommented[1]);
// console.log(leaveThisUncommented[6]);
// console.log(leaveThisUncommented[0]);
// console.log(leaveThisUncommented[leaveThisUncommented.length - 1]);

// Por último, podemos utilizar los métodos nativos de JavaScript

// EJERCICIOS CON MÉTODOS
// const leaveThisUncommented = '   This is an Example String. Use your methods here   ';

// // 1.- Imprime leaveThisUncommented todo en minúsculas
// const minusculas = leaveThisUncommented.toLowerCase();
// console.log(minusculas);


// // 2.- Imprime leaveThisUncommented todo en mayúsculas
// const mayusculas = leaveThisUncommented.toUpperCase();
// console.log(mayusculas);


// // 3.- Quita los espacios iniciales y finales de leaveThisUncommented
// const sinEspacios = leaveThisUncommented.trim();  //Espacios delante y detrás
// console.log(sinEspacios);


// // 4.- Determina si leaveThisUncommented incluye la palabra 'stop'
// const stop = leaveThisUncommented.includes('stop');
// console.log(stop);


// // 5.- Determina si leaveThisUncommented termina con la palabra 'here'
// // const finish = leaveThisUncommented.trim().includes('here',leaveThisUncommented.length -5);
// const finish = leaveThisUncommented.trim().endsWith('here');
// console.log(finish);


// // 6.- Sustituye todas las "e" de leaveThisUncommented por "a"
// // const sustituyePorA = leaveThisUncommented.replace('e','a')  //Solo cambia la primera
// const sustituyePorA = leaveThisUncommented.toLocaleLowerCase().replaceAll('e','a')   //Reemplaza todas las e por as
// console.log(sustituyePorA);


// // 7.- Encuentra en qué posición de leaveThisUncommented se encuentra la palabra "Use"
// const searchUse = leaveThisUncommented.search('Use');
// console.log(searchUse);


// 8.- Divide leaveThisUncommented por el punto split . espacio



// 9.- Obtén el fragmento de leaveThisUncommented que va desde el índice 30 hasta el final
// const fromIndex = leaveThisUncommented.slice(30);
// console.log(fromIndex);


// // 10.- Obtén el fragmento de leaveThisUncommented que va desde el índice 30 hasta el 46
// const abcIndex = leaveThisUncommented.slice(30,46);
// console.log(abcIndex);
