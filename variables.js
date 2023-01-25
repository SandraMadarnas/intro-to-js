// LAS VARIABLES SON CONTENEDORES DE VALORES
// 1. Debemos definirlas para poder utilizarlas.
// 2. A continuación, podemos asignarles un valor

// var example;
// example = 'Hello, world!';
// console.log(example); // Hello, world!

// IMPORTANTE:
// DEBEMOS DEFINIR Y ASIGNAR VALOR A LA VEZ:

// var example = 'Hello, world!';
// console.log(example);

// IMPORTANTE:
// NO DEBEMOS UTILIZAR var, SINO:
// 1. const: siempre que podamos, ya que impide que luego le cambiemos el valor por accidente
// 2. let: cuando necesitemos reasignar valor más adelante en nuestro código

// let example = 'Hello, world!';
// const secondExample = 'Hello, world!';


// ¿QUÉ DIFERENCIAS HAY ENTRE var, let Y const?

// var es una forma antigua de declarar variables. En general, no la utilizamos.
// Actúa en el global scope y permite la reasignación de valores.
// El hoisting permite que las utilicemos en cualquier lugar del documento.

// let y const son la nueva forma de declarar variables. Utilizamos const siempre que podamos,
// y let cuando tengamos que reasignar valor posteriormente. Ambas actúan en local scope
// No se someten a hoisting, por lo que solo se pueden utilizar una vez declaradas


// ---
// Ejemplo de hoisting:
// La declaración de la variable sube al principio del archivo. No su inicialización

// console.log(hoistedHello);

// var hoistedHello = 'Hello, world!';

// console.log(notHoistedHello);

// let notHoistedHello = 'Hello, world';


// ---
// Ejemplo de reasignación:

// var varReassignExample = 'Hello, world!';
// console.log(varReassignExample);

// let letReassignExample = 'Hello, world!';
// console.log(letReassignExample);

// const constReassignExample = 'Hello, world!';
// console.log(constReassignExample);

// varReassignExample = 'Goodbye, world!';
// console.log(varReassignExample);

// letReassignExample = 'Goodbye, world!';
// console.log(letReassignExample);

// constReassignExample = 'Goodbye, world!';

