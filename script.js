/*

1) Necesitamos escribir una función la cual recibiendo un array con importes, nos devuelva el resultado final de la suma de los importes de todos los meses que tienen ganancia, a excepción de los que superen un importe de $ 1.000.

2) Una cadena de cines nueva quiere desarrollar su página web, y nos presentó la siguiente situación:

Cada vez que queremos ir al cine, además de ver si nuestra película está en cartelera, debemos verificar si el asiento que buscamos está disponibles.

Nos piden que escribamos una función, que tome como parámetro un conjunto de asientos disponibles y el asiento que quiere ocupar la persona. La función deberá verificar si el asiento solicitado se encuentra disponible y devolverle un mensaje claro y prolijo al cliente como: "Felicitaciones, el asiento número X está disponible" o "Lo sentimos, el asiento número X está ocupado, pero aún quedan X asientos disponibles".

Ayuda: 
asientos([15, 28, 44, 45, 70], 15);  

3) Ahora es el turno de una empresa de trenes la cual nos enfrenta a la siguiente situación:
Un tren va desde terminal hasta terminal con algunas estaciones intermedias, y la empresa necesita saber cuantos pasajeros lleva luego de la parada en cada estación. Para ello nos contrataron a nosotros, quienes somos responsables de generar un programa que lo resuelva.

Debemos escribir una función, la cual cuando reciba la cantidad de estaciones que avanzó el tren, nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren. La empresa nos dió los siguientes datos:

-El tren sale de la estación Uno siempre con 200 pasajeros.
-En cada estación el tren sube 50 pasajeros y se bajan 30.
-En la estación Olimpo (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.



*/

//1

function importes(array){
    let suma = 0;
    for( let i = 0 ; i < array.length ; i++){
        if(array[i] > 0 && array[i] <= 1000){
            suma= suma +array[i];
        }
    }
return suma;
}
console.log(importes([2000,999,500,1000]))

//2 

function asientos(array, numero){
    for( let i = 0 ; i < array.length; i++ ){
        if(array.indexOf(numero) != -1){
            return "Felicitaciones, el asiento número " + numero + " está disponible";
        }
    }
    return "Lo sentimos, el asiento número " + numero + " está ocupado, pero aún quedan " + array.length + " asientos disponibles";
}

console.log(asientos([15, 28, 44, 45, 70], 15))
console.log(asientos([15, 28, 44, 45, 70], 16))

//3

function reporte(estaciones){
    let pasajeros = 200;
    let reporte = [];
    for(let i = 0 ; i <= estaciones ; i++){
        if(i == 5){
            pasajeros = pasajeros + 120 - 80;
        }else if( i != 0){
            pasajeros = pasajeros + 50 - 30
        }
        reporte.push('En la estación ' + i + ' hay ' + pasajeros + ' pasajeros arriba del tren');
    }
    return reporte;
}
console.log(reporte(5))