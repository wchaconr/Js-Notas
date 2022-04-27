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

/// Ejercicio BUZZ y FIZZZ
for (let i = 1; i < 100; i++) {
    if(i%15 === 0) {                    // if(i%5 === 0 && i%3 == 0)
        console.log(`FizzBuzz`)
    }
    else if(i%5 === 0) {
        console.log(`Buzz`)
    }
    else if(i%3 === 0) {
        console.log(`Fizz`)
    }
    else {
        console.log(i)
    }
}

// While loop     --> primero evalua la condición y si es verdadera, luego ejecuta el código

let i = 1;  //indice

while (i <= 20) {    //Condición
    if(i%2 == 0) {
        console.log(`${i} Número par`)
    }
    if(i%2 == 1) {
        console.log(`${i} Número inpar`)
    }
     i++;            //incremento
}



// Do While loop   --> ejecuta el codigo al menos una vez y despues evalua si la condición es verdedera

let x = 0;

do {
    console.log(x)
    x++;
} while (x < 10)


////// AHORA LOS MÁS USADOS  -- metodos exclusivos de arreglos

const carrito2 = [  // esto es un arreglo
    {nombre: 'Monitor', precio: 452},
    {nombre: 'Torre', precio: 2452},
    {nombre: 'Teclado', precio: 52},
    {nombre: 'Mouse', precio: 49},
    {nombre: 'Audio', precio: 152}
];

// forEach   --> Para iterar y mostrar en consola
    // Se ejecuta almenos una vez por cada elemento que haya en el arreglo

carrito2.forEach(function(wil) {
    console.log(wil)   //wil. nombre  o wil.precio
});

carrito2.forEach(wil => console.log(wil));   //wil. nombre  o wil.precio


// map    --> Para crear un nuevo arreglo 

carrito2.map(function(wil) {
    console.log(wil)   
});

carrito2.map(wil => console.log(wil));

const arreglo2 = carrito2.map(wil => `${wil.nombre} - ${wil.precio}`); //el nuevo arreglo queda asignado a una nueva variable

console.log(arreglo2);
