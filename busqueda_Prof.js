const objetivo = 'abcdefghi',
    cadena = 'afgibcdhe';
let tam = cadena.length,
    s,
    solActual = [],
    mejorSol = [],
    maxProf = tam,
    tamSol = 0,
    nodos = 0,
    tamMejorSol = 100;

function voltear(cadena, tamaño) {
    let nuevaCad = cadena.slice(0, cadena.length - tamaño) + cadena.slice(cadena.length - tamaño).split('').reverse().join('');
    return nuevaCad;
}

function busquedaProfundidad(cadena, numAnt) {
    nodos++ // cuento los nodos que estoy visitando
    if ( cadena === objetivo ) { // si mi cadena S es igual a mi objetivo
        if (tamSol < tamMejorSol) {// comparo si el camino que recorrio es mejor al camino que tengo desigando como mejor
            mejorSol = []// si es mejor, vacio mi camino mejor
            for (let j = 0; j < tamSol; j++) {
                mejorSol.push(solActual[j])          // agrego mis elementos de la solucion actual
            }
            tamMejorSol = tamSol;                   // ahora el tamaño mejor sera el actual
            maxProf = tamSol - 1;                               // redusco la profundidad de busqueda
        }
        return;

    }
    if (maxProf <= tamSol) { // si mi tamaño de solucion actual es mayor o igual a la profundida paro el metodo
        return;
    }
    for (let i = 2; i <= tam; i++) {
        if (i === numAnt) {// si ya hay una combinacion igual al numAnt salto a la siguiente iteracion
            continue;
        }
        s = voltear(cadena, i); // volteo i letras de mi cadena
        solActual[tamSol++] = i + ' ' + s;// agrego otro paso a mi camino actual
        busquedaProfundidad(s, i);// busco de nuevo en base a la nueva cadena creada
        s = voltear(s, i);// volteo mi cadea a como estaba
        tamSol--; // reduzco el tamaño de mi solicion
    }
}

console.time('busquedaProfundidad');
busquedaProfundidad(cadena);
console.timeEnd('busquedaProfundidad');
console.log('Los movimientos para la mejor solucion son:');
console.table({mejorSol});
console.log('Nodos visitados:', nodos);
