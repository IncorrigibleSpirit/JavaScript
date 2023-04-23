

var randomPick = (n, min, max) => {
    var random = []
    for (var index = 0; index < n; index++) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min); 
        // randomNumber: Se obtiene valor aleatorio entre 1 y 100
        var checkNumber = random.indexOf(randomNumber); 
        // checkNumber: Revisamos si numero aleatorio obtenido está al interior del array
        if (checkNumber !== -1) { // Arroja el indice si coincide, -1 si no encuentra nada
            random.splice(checkNumber, 1); // Si encuentra valor similar, lo eliminamos (splice)
            index--; 
            // Se debe disminuir el índice cuando se elimina un valor del array, de modo que la 
            //próxima iteración del ciclo contemple el valor que viene a rellenar el número eliminado.
        }
            random.push(randomNumber); // si no se encuentra nada, que sea guardado en el array
    }
        return random;
}

console.log(randomPick(10, 1, 100));
