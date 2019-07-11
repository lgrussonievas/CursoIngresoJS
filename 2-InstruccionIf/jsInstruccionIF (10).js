function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numeroRandom;
numeroRandom = Math.floor( Math.random() * 10 + 1);
	
if (numeroRandom > 8)
{ 
alert("Nota: " + numeroRandom + " EXCELENTE");	
}

else if (numeroRandom > 4 )
{
alert("Nota: "+ numeroRandom + " APROBO");
}

else 
{ 
alert("Nota: " + numeroRandom +  " NO ESTUDIASTE UNA MIERDA");
}
}//FIN DE LA FUNCIÓN