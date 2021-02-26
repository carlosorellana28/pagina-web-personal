
//bucle while normal 
var x = 0;
while(x<10){
    console.log("el valor es:"+x);
    x++
} //funcion recursiva la cual me permite recorrer datos sin utilizar bucles
console.log("esta es la funcion recursiva ")
function loop(x) {
    if (x <= 10){

        console.log("este es el valor: " +x)
        
        loop(x + 1); // la llamada recursiva
        
        return x;
    } // "x >= 10" es la condición de salida (equivalente a "!(x < 10)")
   
 }
 loop(0);
 

