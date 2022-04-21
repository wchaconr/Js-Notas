
// IF  --> revisa si se cumple una condición

const puntaje = 1000;

if (puntaje >= 999) {    // == igial a, < menor a, !== diferente, === igual teniendo en cuenta el formato 
    console.log("El puntaje es suficiente")
}else {
    console.log("El puntaje es insificiente")   //se ejecuta else cuando no se cumple la condición
};


const rol = "ADMINISTRADOR";

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a las funciones del sistema')
} else if (rol === 'EDITOR') {
    console.log('Acceso limitado al sistema')
} else {
    console.log('Acceso como invitado')
};



// Switch  --> cuando son varias condiciones

const metodoPago = 'Tarjeta';

switch (metodoPago) {
    case 'Tarjeta':
        console.log('A su pago con tarjeta se agregará el impuesto 4x100')
        break;
    case 'Cheque':
        console.log('Para pagar con cheque asegurese de tener fondos')
        break;  
    case 'Efectivo':
        console.log('Para pago en efectivo debe acercarse a una de nuestras sucursales')
        break;   
    default: console.log('Debe selecionar un método de pago')
        break;
}
