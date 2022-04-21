// For loops    --> Me arroja datos mientras la sentencia sea verdadera

// for (let i = 1; i < 10; i++) {
//     console.log(i)
// }

for (let i = 1; i < 20; i++) {
    if(i%2 === 0) {
        console.log(`${i} Número par`)
    }
    console.log(i)
}

const carrito = [
    {nombre: 'Monitor', precio: 452},
    {nombre: 'Torre', precio: 2452},
    {nombre: 'Teclado', precio: 52},
    {nombre: 'Mouse', precio: 49},
    {nombre: 'Audio', precio: 152}
]

for (let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre, carrito[i].precio)

}

// While loop     --> primero evalua la condición y si es verdadera, luego ejecuta el código

let i = 1;  //indice

while (i <= 20) {    //Condición
    if(i%2 == 0) {
        console.log(`${i} Número par`)
    }
    console.log(i)
    i++;            //incremento
}



// Do While loop   --> ejecuta el codigo al menos una vez y despues evalua si la condición es verdedera

let x = 0;

do {
    console.log(x)
    x++;
} while (x < 10)