/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/

function mostrar()
{
 	var nombre;
 	var tipoCursada;
 	var cantidadMaterias;
 	var sexo;
 	var notaPromedio;
 	var edad;
 	var continuar;

 	var mejorPromedioNoMasculino;
 	var nombreMejorPromedioNoMasculino;
 	var flagNoMasculino = true;

 	var edadMasJovenLibre;
 	var flagLibre;
 	var nombreMasJovenLibre;

 	var promedioNotaFemenino;
 	var promedioNotaMasculino;
 	var promedioNotaNoBinario;
 	var acumuladorNotaFemenino = 0;
 	var acumuladorNotaNoBinario = 0;
 	var acumuladorNotaMasculino = 0;
 	var contadorMasculino = 0;
	var contadorFemenino = 0;
	var contadorNoBinario = 0;

	var falgNoRemoto = true;
	var nombreNoRemoto;
	var edadNoRemoto;



	do
	{

		do
	 	{
	 		nombre = prompt ("Ingrese nombre:");
	 	}while (isNaN(nombre) == false);


	 	do
	 	{

	 		tipoCursada = prompt ("Ingrese tipo de cursada (libre, presencial, remota):")
	 	}while (tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota");

	 	do
	 	{
	 		cantidadMaterias = prompt("Ingrese cantidad de materias:");
	 		cantidadMaterias = parseInt (cantidadMaterias);
	 	}while (isNaN(cantidadMaterias || cantidadMaterias > 50));

	 	do
	 	{
	 		sexo = prompt ("Ingrese sexo:");
	 	}while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario");

	 	do
	 	{
	 		notaPromedio = prompt ("Ingrese nota promedio:");
	 		notaPromedio = parseInt (notaPromedio);
	 	}while (notaPromedio < 1 || notaPromedio > 10 || isNaN(notaPromedio));

	 	do
	 	{
	 		edad = prompt ("Ingrese edad:")
	 		edad = parseInt (edad)
	 	}while(edad < 18 || edad > 75 || isNaN(edad));


		switch (sexo)
		{
			case "femenino":

				if(mejorPromedioNoMasculino < notaPromedio || flagNoMasculino == true)
	 				{
	 					mejorPromedioNoMasculino = notaPromedio;
	 					nombreMejorPromedioNoMasculino = nombre;
	 					flagNoMasculino = false;
	 				}

	 				acumuladorNotaFemenino = acumuladorNotaFemenino + notaPromedio;
	 	
					contadorFemenino++;
		
			break;

			case "no binario":

				if(mejorPromedioNoMasculino < notaPromedio || flagNoMasculino == true)
	 				{
	 					mejorPromedioNoMasculino = notaPromedio;
	 					nombreMejorPromedioNoMasculino = nombre;
	 					flagNoMasculino = false;
	 				}

	 				acumuladorNotaNoBinario = acumuladorNotaNoBinario + notaPromedio;
	 				contadorNoBinario++;
			break;

			case "masculino":

				acumuladorNotaMasculino = acumuladorNotaMasculino + notaPromedio;
				contadorMasculino++;

			break
		}

		if((tipoCursada == "libre" && edadMasJovenLibre > edad) || flagLibre == true || falgNoRemoto == true)
		{
			edadMasJovenLibre = edad;
			nombreMasJovenLibre = nombre;
		}
		else
		{
			if((tipoCursada != "remota" && cantidadMaterias>cantidadMateriasNoRemoto) || falgNoRemoto == true)
			{
				nombreNoRemoto = nombre;
				edadNoRemoto = edad;
			}
		}

		continuar = confirm ("Desea continuar agregando alumnos?")
	
	}while(continuar == true)
	 	

	promedioNotaMasculino = acumuladorNotaMasculino / contadorMasculino;

	promedioNotaFemenino = acumuladorNotaFemenino / contadorFemenino;

	promedioNotaNoBinario = acumuladorNotaNoBinario / contadorNoBinario;

	if(promedioNotaFemenino == "NaN")
	{
		promedioNotaFemenino = 0;
	}
	else
	{
		if(promedioNotaMasculino == "NaN")
		{
			promedioNotaMasculino = 0;
		}
		else
		{
			if (promedioNotaNoBinario == "NaN") 
			{
				promedioNotaNoBinario = 0;
			}
		}
	}

		document.write ("a) El nombre del mejor promedio que no sea masculino: " + mejorPromedioNoMasculino +
			". b) El nombre del mas joven de los alumnos entre los que la dan libre: " + nombreMasJovenLibre +
			". d) El promedio de nota por sexo, masculino: " + promedioNotaMasculino +
			". No binario: "+ promedioNotaNoBinario + ". femenino: " + promedioNotaFemenino +
			". f) La edad y el nombre del alumno que cursa mas materias que no sea remota es: " + edadNoRemoto +
			"y " + nombreNoRemoto);

	
}
