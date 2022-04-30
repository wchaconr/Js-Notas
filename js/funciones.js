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

// Arrow functions
    //otra forma de declarar funciones

const sumar3 = (n1, n2) => console.log(n1 + n2)    // Se cambia la palabra function por =>

sumar3(3, 20);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo("JavaScript")

    // los arrow functions brillan en los arroy metods porque los simplifica MUCHO

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const carrito = [
    {nombre: 'Monitor', precio: 452},
    {nombre: 'Torre', precio: 2452},
    {nombre: 'Teclado', precio: 52},
    {nombre: 'Mouse', precio: 49},
    {nombre: 'Audio', precio: 152}
]  

// forEach en arrow functions

meses.forEach ( mes => { if(mes == 'Marzo') {
        console.log('Existe');
    }
})        // Busca en cada uno y si existe arroja respuesta personalizada


// Some  en arrow functions
Resultado = carrito.some (producto => producto.nombre === 'Audio')   // Busca en cada uno y si existe arroja 'true' 


// Reduce en arrow functions 
Resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filer en arrow functions
Resultado = carrito.filter(producto => producto.precio > 400);  // Filtra según mis necesidades

Resultado = carrito.filter(producto => producto.nombre !== 'Audio'); // mustro todos excepto ... ( !== diferente)

console.log(Resultado);






// this

const reservacion = {
    nombre: 'Wilder',
    appellido: 'rokefeller',
    aPagar: 562400,
    pagado: true,
    informacion: function () {
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es ${this.aPagar}`);
    }
}
reservacion.informacion();




// Calculate and print the sum of the elements in an array

function aVeryBigSum(ar) {
    let total = 0
    for (let i in ar) {
        total += ar[i];
    }
    return total;
}