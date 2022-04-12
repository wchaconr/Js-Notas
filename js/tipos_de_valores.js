// String o cadenas de texto ********************************************

const producto = 'monitor de 20 pulgadas';
const producto2 = String('monitor de 20 pulgadas');

// Metodos para string

console.log(producto2) // funsion mostrar en consola
console.log(producto2.length) // Método para contar caracteres
console.log(producto.indexOf('pulgadas')) // para buscar una palabra en un string 
console.log(producto.includes('pulgadas')) // para buscar una palabra en un string, el retorno sera (true/false)

const nombre = "Juan"
const email = "correo@correo.com"

console.log(nombre + email); //concatenación  
console.log(nombre + " " + email); //concatenación 

console.log(`Nombre cliente: ${nombre} email: ${email}`) // template Strings o Strings literal --> más utilizada

 
// Números ******************************************************

const numero1 = 100; // Números van sin comillas para que lo lea como tal
const numero2 = 200;
const numero3 = -2;
const numero4 = .99;

// Operaciones

console.log(numero1+numero2);
console.log(numero1-numero2);
console.log(numero1*numero2);
console.log(numero2/numero2);
console.log(numero2%numero2); // Me muestra los residuos de una division con cosiente entero

// Objeto math

let resultado;
resultado = Math.PI;
resultado = Math.round(2.4);  // Para redondear por cercania 
resultado = Math.ceil(2.1); // Para redondear al entero siguiente
resultado = Math.floor(2.9); // Para redondear al entero anterior
resultado = Math.sqrt(9); // Raiz cuadrada
resultado = Math.abs(-200); // Convierte numeros en positivos
resultado = Math.min(3, 5, 1, 8, 9, 7); // arroja el número menor
resultado = Math.max(3, 5, 1, 8, 9, 7); // arroja el número mayor
resultado = Math.random(); // arroja número aleatorio entre 0 y 1
resultado = Math.floor(Math.random()*30); // arroja número aleatorio entre 1 y 30

console.log(resultado)

// Orden en el que se ejecutan las operaciones es igual que en algebra basica

// Incrementos y decrementos

let puntaje = 1;

puntaje += 10;

console.log(++puntaje); // Incrementa en 1
console.log(--puntaje); // Decrementa en 1

// Booleans **************************************************************
    //solo tienen dos valores

const boolean1 = true
const boolean2 = false

console.log(boolean1)
console.log(boolean2)

const en_existencias = true
const Sin_existencias = false

// Objetos *****************************************************************
    //puedes crear una variable que contenga varias variables

const nombreProducto = "monitos 27 pulgadas";
const Precio = 330;
const Disponoble = true;

    //puedes crear una variable que contenga varias variables

const Producto = {
    nombreProducto : "monitos 27 pulgadas",
    precio : 300,
    disponoble : true,
}

console.log(Producto);
console.log(Producto.precio);
console.log(Producto.disponoble);
console.log(Producto["precio"]); // Esto es lo mismo pero más complicado

// Modificar objetos

Producto.imagen = "imagen.jpg" // para agregar mas variables propíedades al objeto
delete Producto.disponoble // Para elimiar propiedades o variables del objeto

// Destructuring de un objeto
    //crear variables a partir de los valores de un objeto

const precioProducto = Producto.precio;   // forma antigua
const NombreProducto = Producto.nombreProducto;

const {precio, disponoble} = Producto; // Destructuring: crea la variable y extrae el valor en un solo paso

console.log(precio);
console.log(disponoble);







