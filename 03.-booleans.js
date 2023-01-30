// EN JS TRABAJAMOS CON DIFERENTES TIPOS DE DATOS
// Cada tipo de dato tiene sus propias características y funcionalidades

// ---
// BOOLEAN
// Sus valores son true o false

// const trueBool = true;
// const falseBool = false;

// Podemos convertir otros datos y expresiones en booleanos por medio de
// comparaciones lógicas o casteando su tipo (se tomará su valor)

// Boolean('');
// Boolean('something');

// Boolean(0);
// Boolean(-192);

// Boolean(undefined);
// Boolean(null);

// console.log(Boolean(''));    //false
// console.log(Boolean('something'));   //true
// console.log(Boolean(0));   //false
// console.log(Boolean(-192));   //true
// console.log(Boolean(undefined));   //false
// console.log(Boolean(null));   //false


// El operador && devuelve true si ambas partes de la comparación
// son true. false en cualquier otro caso

// console.log(true && false);
// console.log(false && false);
// console.log(false && true);
// console.log(true && true);

// El operador || devuelve true si cualquier parte de la comparación
// es true. false en cualquier otro caso

// console.log(true || false);
// console.log(false || false);
// console.log(false || true);
// console.log(true || true);

// El resto de operadores lógicos también devuelven true o false

// console.log(1 == '1');   //true
// console.log(1 === '1');   //false

// console.log(1 != '1');   //false
// console.log(1 !== '1');   //true

// console.log(1 > 2);
// console.log(1 >= 2);

// console.log(1 < 2);
// console.log(1 <= 2);

// Podemos encadenar comparaciones. Los paréntesis nos ayudan
// a determinar el orden de ejecución

// console.log((127 > 90) && ('asd' === null) || ([].length == 'SOMETHING'.toLowerCase()));
                //true    &&       //false    ||        //false
                     //false      ||        //false