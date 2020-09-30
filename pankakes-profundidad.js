'use strict'

const fs = require('fs');

//"gbdafce" "bacd"
var cadenaInicial = "bhagcdifej";
var cadenaFinal = "abcdefghij";
var profundidadMax = 10;
var profundidad = 0;
var tam_Mejor_Solucion = -1;

var solucion = [];
var mejor_Solucion = [];
var nodos_visitados = 0;

function Busqueda_Profundidad(cadendaInical, profundidad, indexVolteos){
    
    if (profundidad >= profundidadMax){  
        return;
    }
    nodos_visitados ++;
    solucion.push(cadendaInical);
    for (let index = 0; index < cadendaInical.length - 1; index++) {

        if (indexVolteos == cadendaInical.length - 1) {
            indexVolteos = 0;
        }

        var cadenaVolteada = cadendaInical.slice(0,indexVolteos) + cadendaInical.slice(indexVolteos).split('').reverse().join('');

        if (cadenaVolteada == cadenaFinal) {
            //console.log("Entreeeee " + cadenaVolteada);
            solucion.push(cadenaVolteada);
            //imprimirCadena(cadenaVolteada,profundidad,true)
            profundidadMax = profundidad - 1;
            // console.log("solucion: " + solucion);
            // console.log("mejor solucion: " + mejor_Solucion);
            // console.log(mejor_Solucion.length);
            if (mejor_Solucion.length == 0 || solucion.length < mejor_Solucion.length) {
               mejor_Solucion = [];
               for( let nodo in solucion) {
                mejor_Solucion.push(solucion[nodo]);
               }
            }
            solucion.splice(profundidad);
            break
            
        }
        
        solucion.splice(profundidad + 1);
        Busqueda_Profundidad(cadenaVolteada,profundidad + 1, indexVolteos + 1);
        
        indexVolteos += 1;
    }
    profundidad -= 1;
}

//var txt = cadenaInicial + "\n\n"

function imprimirCadena(c,nivel,termino){
    let cadena = "";

    for (let index = 0; index <= nivel; index++) {
        cadena += "\t\t";
    }
    
    nivel += 1;
    if (termino) {
        c = "<< " + c + " >>";
        cadena += nivel + " " + c;
        //console.log('%c ' + cadena, 'color: #EB4034');

        
    }else{
        cadena += nivel + " " + c;
        //console.log(cadena); 
    } 

   // txt += "\n" + cadena;
    
}

console.log("\n");
console.time("Busqueda_Profundidad");
Busqueda_Profundidad(cadenaInicial,profundidad, 0);
console.timeEnd("Busqueda_Profundidad");
console.log("Nodos visitados: " + nodos_visitados);
/*
fs.writeFile("log.txt", txt, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
*/

console.log("Mejor Solucion: " + mejor_Solucion + "\n");