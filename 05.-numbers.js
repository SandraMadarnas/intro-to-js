// NUMBERS
// Son números, útiles para hacer operaciones matemáticas

// const positiveExample = 8291;
// console.log(positiveExample);

// const negativeExample = -8291;
// console.log(negativeExample);

// const floatExample = 82.91;
// console.log(floatExample);

// Podemos combinarlos con operadores aritméticos y comparadores lógicos
// ¿Necesitamos ejemplos?

// Podemos convertir otros tipos de datos en numbers

// const booleanExampleTrue = true;
// const booleanExampleFalse = false;

// const stringExampleOne = '123';
// const stringExampleTwo = '';

// console.log(Number(booleanExampleTrue));
// console.log(Number(booleanExampleFalse));
// console.log(Number(stringExampleOne));
// console.log(Number(stringExampleTwo));

// Tenemos un tipo especial de número: NaN

// const stringExampleThree = 'Something';

// console.log(Number(stringExampleThree));
// console.log(typeof Number(stringExampleThree));

// Y también tenemos el objeto Math, que nos permite realizar
// operaciones avanzadas e incluye funcionalidades relacionadas
// con las matemáticas

// EJERCICIOS CON MÉTODOS Y MATH

// const leaveThisUncommented = 156.34589;

// // 1. Cambia el tipo de leaveThisUncommented a string
// const str = leaveThisUncommented.toString();
// console.log(str);


// // 2. Redondeasin usar (Math.floor que solo redondea) leaveThisUncommented a dos decimales
// const redondeo = leaveThisUncommented.toFixed(2);
// console.log(redondeo);


// // 3. Determina si leaveThisUncommented es un número entero
// const entero = Number.isInteger(leaveThisUncommented);
// console.log(entero);


// // 4. Determina si leaveThisUncommented es NaN
// const noNumero = Number.isNaN(leaveThisUncommented);
// console.log(noNumero);

// // 5. Castea leaveThisUncommented a número entero
// const CasteoEntero = parseInt(leaveThisUncommented);
// console.log(CasteoEntero);


// // 6. Imprime el número PI
// const numeroPi= Math.PI;
// console.log(numeroPi);


// // 7. Redondea leaveThisUncommented al número entero superior más cercano
// const enteroSuperior = Math.ceil(leaveThisUncommented);  //Redondea hacia arriba
// console.log(enteroSuperior);


// // 8. Redondea leaveThisUncommented al número entero inferior más cercano
// const enteroInferior = Math.floor(leaveThisUncommented);
// console.log(enteroInferior);


// // 9. Genera un número entero aleatorio del 1 al 3
// // const aleatorio = Math.floor(Math.random() * 3);
// const aleatorio = Math.random() * 3;
// // const ent = Math.ceil(aleatorio); // No sirve porque toma el 0 el ceil
// const ent = Math.floor(aleatorio) + 1;
// console.log(ent);
