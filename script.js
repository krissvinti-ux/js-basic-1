//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp Femcoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí
console.log("Bienvenida al bootcamp Femcoders de Factoría F5");


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let string = "Hola mundo";
console.log(string);

let number = 5;
console.log(number);

let siesprofesor = true;
console.log(siesprofesor);

let gato = null;
console.log(gato);

let direction = "Via 25";
console.log(direction);

let indefinida;
console.log(indefinida);

let course = {
    name: "Femcoders",
    duration: 850,
    teacher: {
        name: "Cris Mouta",
        experience: 40,
        direction: "via 86",
    }
}
console.log(course.duration, course.teacher.name);

let countries = ["Ecuador", "México", "Cuba", ["Italia", "España", "Alemania,"]];
console.log("Array:", countries);


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres = ["helado", "tarta", "pastel",]
console.log("Array:", postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder = {
    nombre: "Cristina",
    edad: 28,
}
console.log(coder.nombre, coder.edad);

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.



//Escribe tu código aquí
console.log(typeof string);
console.log(typeof number);
console.log(typeof siesprofesor);
console.log(typeof gato);
console.log(typeof direction);
console.log(typeof indefinida);
console.log(typeof course);
console.log(typeof countries);
console.log(typeof postres);
console.log(typeof coder);


//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let number1 = 698;
let number2 = 999;
let suma = number1 + number2;
console.log(suma);


//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let number3 = 9999;
let number4 = 999;
let resta = number3 - number4;
console.log(resta);



//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let number5 = 2;
let number6 = 9;
let multiplicar = number5 * number6;
console.log(multiplicar);


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let number7 = 800;
let number8 = 2;
let dividir = number7 / number8;
console.log(dividir);



//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let number9 = 1;
let number10 = 2;
let comparar = number9 > number10;
console.log(comparar);


// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let number11 = 1;
let number12 = 2;
let resultado = number11 < number12;
console.log(resultado);

//Ejercicio 11: completa el ejercicio
/*
let num1 = 15
let num2 = 20

let comparacion = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)
*/
let num1 = 15
let num2 = 20
let comparar1 = num1 < num2;
console.log(comparar1);

let num22 = 15
let num4 = 20
let comparar2 = num22 < num4;
console.log(comparar2);


//Ejercicio 12: completa el ejercicio
/*
let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 
*/
let num3 = 1
let num3AsString = "1"
let result = num3 === num3AsString
console.log(result)



//Ejercicio 13: completa el ejercicio
/*
let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)
*/
let result2 = num3 == num3AsString
console.log(result2)


//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí


let nombre = "Cristina"
let apellido = "Viejó"

let nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto)



//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

/* let a = 6;
let b = 3;

let res =  a < 10 __ b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 __ b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 __ b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 __ b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) */


let a = 6;
let b = 3;

let res = a < 10 && b > 1
console.log(res)

let res2 = a < 10 && b < 1
console.log(res2)

let res3 = a == 5 || b == 5
console.log(res3)

let res4 = a == 6 || b == 0
console.log(res4)

let res5 = a == 0 || b == 3
console.log(res5)

let res6 = a == 6 && b == 3
console.log(res6)
