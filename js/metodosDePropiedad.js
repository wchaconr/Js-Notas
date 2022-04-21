// Métodos de propiedad
    //Son funciones realmente pero tienen la sintaxis de un método

const reproductor = {
    reproducir : function(id) {
        console.log(`reproduciendo canción id: ${id}`)
    },
    pausar : function() {
        console.log('pausado')
    } 
}

reproductor.borarCancion = function(id) {
    console.log(`Elimimando la canción ... ${id}`)
}

reproductor.reproducir(3840);  // Aqui llamo la función
reproductor.pausar();           // Aqui llamo la función
reproductor.borarCancion(20);
