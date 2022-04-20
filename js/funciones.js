// Declaración de la función

function sumar() {
    console.log(10+10)
}

sumar();  // Llamar la funcion

// Expresion de la funcion 

const sumar2 = function() {
    console.log( 3 + 3)
}

sumar2();

// IIFE  --> No se necesita llamar y no se abren en otros archivos. P¨royegen para que las variables no se mezclen.

(function() {
    console.log('Esto es una función')
})();

// Diferencia entre Métodos y funciones

const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); //parseInt es una funcion. Primero funcion y luego variable
console.log(numero1.toString());  //.toString es un método. Primero variable y luego método

// Funciones con parametros y argumentos

function restar (numero1, numero2) { //Aqui se definen los parametros
    console.log(numero1-numero2)
}
restar(15, 10); // Aqui van los argumentos o los valores reales
restar(20, 10);
restar(25, 10);
restar(30, 10);


const restar2 = function(n1 =0, n2, n3) { // = 0 Parametros con dafoult
    console.log(n3 - n2 - n1)
}
restar2(5, 10, 20);

// retornar valores  --> Para añadir más funciones a los valores 

function restar3(n1, n2, n3) {   
    return n3 - n2 - n1;
}
const resultado = restar3(5, 10, 20); 
console.log(resultado);

let total = 0;
function agregarCarrito(precio) {   // funcion 1
    return total += precio;
}
function calcularImpuesto(total) {  // funcion 2
    return 1.19 * total
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(100);

console.log(total);

const totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de: $${totalAPagar}`); 