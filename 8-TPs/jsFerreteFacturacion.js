/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var p1;
var p2;
var p3;
var suma;

p1 = parseInt(document.getElementById("PrecioUno").value);
p2 = parseInt(document.getElementById("PrecioDos").value);
p3 = parseInt(document.getElementById("PrecioTres").value);

suma = p1 + p2 + p3;

alert("La suma es " + suma);

}
function Promedio () 
{
var p1;
var p2;
var p3;
var suma;
var promedio;

p1 = parseInt(document.getElementById("PrecioUno").value);
p2 = parseInt(document.getElementById("PrecioDos").value);
p3 = parseInt(document.getElementById("PrecioTres").value);

suma = p1 + p2 + p3;
promedio = suma / 3;

alert("El promedio es " + promedio);
}

function PrecioFinal () 
{
    var p1;
    var p2;
    var p3;
    var suma;
    var final;
    
    p1 = parseInt(document.getElementById("PrecioUno").value);
    p2 = parseInt(document.getElementById("PrecioDos").value);
    p3 = parseInt(document.getElementById("PrecioTres").value);
    
    suma = p1 + p2 + p3;
    final = suma + suma * 0.21;
    
    alert("El precio final es " + final);	
}