/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//saco las 3 variables necesarias
var sueldo;
var resultado; 
var aumento;

//busco donde esta mi variable sueldo en .html
sueldo = parseFloat(document.getElementById("sueldo").value);

//saco el aumento que es el sueldo * lo que quiera aumentar
aumento = sueldo * 0.1;

//asigno un valor a la variable resultado
resultado = sueldo + aumento;

//al cuandrante inferior le asigno el valor del resultado
document.getElementById("resultado").value = resultado;


}
