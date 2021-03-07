/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA,
 los datos solicitados son:
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

	var nombreIngresado;
	var tipoCursada; //"libre";"presencial";"remota"
	var cantidadMaterias;
	var sexo;
	var notaPromedio;
	var edad;
	var continuar;

	var mejorPromedio;
	var flagNoMasculino;
	var nombreMejorAlumnoNoMasculino;

	var edadMasJovenNoRemoto;
	var contadorAlumnos;
	var edadMasJovenLibre;
	var nombreMasJovenNoRemoto;

	flagNoMasculino = true;
	contadorAlumnos = 0;

	do 
	{




	nombreIngresado = prompt ("Ingrese el nombre del alumno:");

	while(nombreIngresado == " " || !isNaN(nombreIngresado))
	{
		nombreIngresado = prompt("Error, reingrese el nombre del alumno:");
	}

	tipoCursada = prompt ("Ingrese tipo de cursada:");

	while(tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota")
	{
		tipoCursada = prompt ("Error, reingrese tipo de cursada:");
	}

	cantidadMaterias = prompt ("Ingrese cantidad de materias:");
	cantidadMaterias = parseInt (cantidadMaterias);

	while(cantidadMaterias<15 || cantidadMaterias >50 || isNaN(cantidadMaterias))
	{
		cantidadMaterias = prompt ("Error, reingrese cantidad de materias:");
		cantidadMaterias = parseInt (cantidadMaterias);
	}

	sexo = prompt ("Ingrese sexo:");

	while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
	{
		sexo = prompt ("Error, reingrese sexo:");
	}


	notaPromedio = prompt ("Ingrese nota promedio:");
	notaPromedio  = parseInt (notaPromedio);

	while(notaPromedio < 1 || notaPromedio > 10 || isNaN(notaPromedio))
	{
		notaPromedio = prompt ("Error, reingrese nota promedio:");
		notaPromedio = parseInt (notaPromedio);
	}


	edad = prompt ("Ingrese edad:");
	edad  = parseInt (edad);

	while(edad <18 || edad >85 || isNaN(edad))
	{
		edad = prompt ("Error, reingrese edad:");
		edad = parseInt (edad);
	}


if((sexo != "masculino" && mejorPromedio < notaPromedio) || flagNoMasculino == true)
{
	mejorPromedio = notaPromedio;
	nombreMejorAlumnoNoMasculino = nombreIngresado;
	flagNoMasculino = false;
}


if(edadMasJovenNoRemoto < edad || contadorAlumnos == 0)
{
	edadMasJovenLibre = edad;
	nombreMasJovenNoRemoto = nombre;
}










contadorAlumnos++;
continuar = confirm ("Desea continuar?");

}while(continuar == true);

/*a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/











}

/*
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
*/


/*
1 De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log


	var personasIngresadas;
	var nombre;
	var peso;
	var sexo;
	var edad;
	var contadorFemenino = 0;
	var pesoMaximo;
	var nombreMasPesado;
	var promedioEdad;
	var acumuladorEdad = 0;
	var flagMasculino = true;


	for(var i = 0; i < 2; i++)
	{
		do
		{
			nombre = prompt ("Ingrese nombre de paciente.");
		}while(!isNaN(nombre) || nombre == "  ");

		do
		{
			peso = prompt ("Cuanto pesa?");
			peso = parseInt (peso);
		}while(isNaN(peso) || peso < 2 || peso > 300);

		do
		{
			sexo = prompt ("Ingrese sexo");
		}while(sexo != "no binario" && sexo != "masculino" && sexo != "femenino" && !isNaN(sexo));

		do
		{
			edad = prompt ("Ingrese edad:");
			edad = parseInt (edad);
		}while(edad < 1 || edad > 150 || isNaN(edad));


		if(sexo == "femenino")
		{
			contadorFemenino++;
		}
		else
		{
			if((sexo == "masculino" && pesoMaximo<peso) || flagMasculino == true )
			{
				pesoMaximo = peso;
				nombreMasPesado = nombre;
				flagMasculino = false;
			}
		}


		acumuladorEdad = acumuladorEdad + edad;
	}


	promedioEdad = acumuladorEdad / i;

	if (contadorFemenino>0)
	{
	 	document.write("La cantidad de mujeres es " + contadorFemenino);
	}
	else
	{
		document.write("No ingresaron mujeres" );
	}

	document.write(". La edad promedio es " + promedioEdad);

	if (flagMasculino == false) 
	{
		document.write (". El hombre mas pesado es " + nombreMasPesado);
	}
	else
	{
		document.write ("No se ingresaron hombres.");
	}

*/



