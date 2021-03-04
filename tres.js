/*Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata 
con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio 
final tiene un descuento del 25%, que solo mostramos si corresponde.
*/
function mostrar()
{
	var nombre;
	var estadoCivil;
	var edad;
	var temperaturaCorporal;
	var sexo;
	var precioPasajero = 600;

	var contadorViudos60 = 0;

	var edadMujerMasJoven;
	var flagMujerMasJoven = true;
	var nombreMujerMasJoven;

	var contadorTotal = 0;
	var porcentaje60Mas;
	var descuento = 25;

	var viajeSinDescuento;


	do
	{
		nombre = prompt ("Ingrese nombre");

	}while(isNaN(nombre) == false);

	do
	{
		estadoCivil = prompt ("Ingrese estado civil");//soltero", "casado" o "viudo
	}while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" || isNaN(estadoCivil) == false);

	do
	 {
	 	edad = prompt ("Ingrese edad:")
	 	edad = parseInt (edad)
	 }while(edad < 17 || edad > 125 || isNaN(edad));

	 do
	 {
	 	sexo = prompt ("Ingrese sexo");
	 }while(sexo != "masculino" && sexo != "femenino" || isNaN(sexo) == false);
	
	do
	{
		temperaturaCorporal = prompt ("Ingrese temperatura");
		temperaturaCorporal = parseInt (temperaturaCorporal);
	}while(temperaturaCorporal < 32 || temperaturaCorporal > 40 || isNaN(temperaturaCorporal));


	if(estadoCivil == "viudo" && edad > 60)
	{
		contadorViudos60++;
	}

//a) La cantidad de personas con estado "viudo" de mas de 60 años.

//b) el nombre y edad de la mujer soltera mas joven.
	if ((sexo == "mujer" && edad< edadMujerMasJoven) || (flagMujerMasJoven == true && sexo == "mujer") )
	{
		nombreMujerMasJoven = nombre;
		edadMujerMasJoven = edad;

		flagMujerMasJoven = false;
	}

	contadorTotal++




///////////////////////////////////////////////////////




	porcentaje60Mas = contadorTotal / contadorViudos60;

	viajeSinDescuento = contadorTotal * precioPasajero;

	if(porcentaje60Mas > 0.5)
	{
		precioPasajero = (precioPasajero * descuento) / 100;
	}

	
document.write("a) La cantidad de personas con estado viudo de mas de 60 años."+ contadorViudos60)

	if (flagMujerMasJoven == false)
	 {
	 	document. write ("b) el nombre y edad de la mujer soltera mas joven." + nombreMujerMasJoven + " y " + edadMujerMasJoven+
		"c) cuanto sale el viaje total sin descuento. "+ viajeSinDescuento)
	 }
	 else
	 {
	 	document. write ("b) noy hay mujeres jovenes" + nombreMujerMasJoven + " y " + edadMujerMasJoven+
		"c) cuanto sale el viaje total sin descuento. "+ viajeSinDescuento)
	

	 }


if(porcentaje60Mas > 0.5)
{
	document.write ("d) el pasaje con descuento: " + precioPasajero)
}
else
{
	document.write("d) no hay descuento ya que hay menos de 50% de ancianos.") 
}
}
