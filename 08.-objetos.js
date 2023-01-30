// OBJETOS
// Los objetos nos permiten almacenar datos estructurados,
// conforme a pares llave:valor (key:value)

const exampleObject = {
    name: 'Zarigüeya',
    age: 2.5,
    owners: [
        {
            name: 'Garzón',
            job: 'teacher'
        }
    ]
}

const unknownKey = 'age';
console.log(exampleObject.name);
console.log(exampleObject[unknownKey]);

// Los inicializamos utilizando llaves. Dentro de ellas podemos
// guardar funciones (métodos) u otro tipo de datos (propiedades).
// A continuación podemos acceder mediante tres notaciones distintas:

console.log(exampleObject.name);
// console.log(exampleObject?.age);
console.log(exampleObject['owners']);