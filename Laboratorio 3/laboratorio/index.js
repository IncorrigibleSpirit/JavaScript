// DIBUJANDO CON BUCLES

//Ciclo externo: Genera los renglones o índices (en este caso espacios en blanco por iteración)
//Ciclo interno: itera TODAS las columnas del indice
//Funcionamiento: 
//1 El bucle externo comienza su primera iteración [0]
//2 En cada iteración del bucle externo, el bucle interno completa TODAS sus iteraciones (todas las columnas).
//3 Tan pronto termina el bucle interno, el bucle externo inicia nuevamente con su siguiente valor o renglon[1].


//CUADRADO

var square = (n,char) =>{

    for (var i = 0; i < n; i++) {
        var row = "";
        console.log(row)

        for (var j = 0; j < n ; j++) {
            row += char;
            } 
    
    console.log(row)
    } 
}
(square(5,"*"))


// CUADRADO CON BORDE

var squareWithBorder = (n, charBorder,charInner) => {

for (let i = 0; i < n; i++) {
    var row = "";
    console.log(row)
    
    for (var j = 0; j < n; j++) {
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        row += charBorder;
        } else {
        row += charInner;
        }
    }
    console.log(row);

}
}
(squareWithBorder(5,"B","*"))


//CUADRADO DIAGONAL LEFT-RIGHT

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {

    for (var i = 0; i < n; i++) {
        var row = "";
        console.log(row)

        for (let j = 0; j < n; j++) {
                                                             //  r  c   r  c   r  c                                         
            if (i===j) {   // Así se calcula la chardiagonal // [0][0],[1][1],[2][2],
                row += charDiagonal;
            } else if (j > i) {
                row += charUp;
            } else{ (j < i) 
                row += charDown ; 
            }
    }
console.log(row);
    }
} 
  
squareDiagonalLR(5,"\\","A","B")



//CUADRADO DIAGONAL RIGHT-LEFT
//Clave: Recorrer de forma inversa "los renglones" y realizar cambios en los operadores lógicos]

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {

    for (var i = n - 1; i >= 0; i--) {
        var row = "";
        console.log(row)

        for (let j = 0; j < n; j++) {                                                                                          
            if (i===j) {   
                row += charDiagonal;
            } else if (j < i) {
                row += charUp;
            } else{ (j > i) 
                row += charDown ; 
            }

    }
    console.log(row);
    }
}
squareDiagonalRL(5, "/", "A", "B");


//MEDIO DIAMANTE

var halfDiamond = (n,char) => {

    // Triángulo 1
    for (var i = 0; i < n; i++) {  // renglones
        var row = "";  
        
        for (var j = 0; j < n; j++) {  // columnas
            if (j <= i ) {    
                row += char;
            }   
        }
        console.log(row) 
    }

    // Triángulo 2
    for (var i = n-1; i >= 0; i--) {  // renglones
        var row = "";  
        
        for (var j = 0; j < n; j++) {  // columnas
            if (j < i) {    
                row += char;
            }   
        }
        console.log(row) 
    }
}
halfDiamond(5,"*")



// PIRAMIDE  - RESPUESTA TOMADA DE AI
var pyramid = (n, char) => {

    //Generación de índices
    for (var i = 1; i <= n; i++) {
        var row = ""; // generacion de indices
        console.log(row)

    // Generación de espacios vacíos (.) al interior de cada indice
        for (var j = 1; j <= n-i; j++) {
        row += "."; 
    // n = numero de renglones que componen las piramides   i = numero de renglon que actual/ se está iterando
    // Para la 1era fila se agregaría n-1 espacios vacios(4.). Para la 2da fila se agregaría n-2 espacios vacíos(3.), y así sucesivamente (no se agregaría en el ultimo renglón)
        }

    // GENERACION DE CARACTERES EN LA PIRAMIDE (*) 
        for (var x = 1; x <= 2 * i - 1; x++) {
            row += char;
    // i = numero de renglon que actual/ se está iterando
    // Para la primera fila, se agregará un aterisco (*), para la segunda fila se agregarán tres asteriscos (*), y así sucesivamente,
        }
        console.log(row);
    }
}
pyramid(5,"*");