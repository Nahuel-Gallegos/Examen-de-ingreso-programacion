/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/
function mostrar()
{
	
	var marcaProducto;
	var tipoProducto;
	var precio;
	var cantidadUnidades;
	var tipoInflamable;

	var acumuladorAlcohol = 0;
	var contadorAlcohol = 0;
	var promedioAlcohol;

	var acumuladorQuat = 0;
	var contadorQuat = 0;
	var promedioQuat;

	var promedioIac;
	var acumuladorIac = 0;
	var contadorIac = 0;

	var inflamableMaximo;
	var nombreInflamableMaximo;

	var acumuladorIacMenosDe200 = 0;

	var precioMaximo;
	var tipoProductoPrecioMaximo;
	var marcaProductoPrecioMaximo;



	for (var i=0; i<1; i++)
		{


		marcaProducto = prompt ("Ingrese la marca del producto:");

		while(!isNaN(marcaProducto))
		{
			marcaProducto = prompt("Error, reingrese la marca del producto:");
		}

		tipoProducto = prompt ("Ingrese tipo de producto:");//ALCOHOL", "IAC" o "QUAT"

		while(tipoProducto != "ALCOHOL" && tipoProducto != "IAC" && tipoProducto != "QUAT")
		{
			tipoProducto = prompt ("Error, reingrese tipo de producto:");
		}

		precio = prompt ("Ingrese precio:");//100 y 300
		precio  = parseInt (precio);

		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = prompt ("Error, reingrese precio:");
			precio = parseInt (precio);
		}

		cantidadUnidades = prompt ("Ingrese cantidad de unidades:");
		cantidadUnidades  = parseInt (cantidadUnidades);

		while(cantidadUnidades < 0 || cantidadUnidades > 1000 || isNaN(cantidadUnidades))
		{
			cantidadUnidades = prompt ("Error, reingrese cantidad de unidades:");
			cantidadUnidades = parseInt (cantidadUnidades);
		}

		
		tipoInflamable = prompt ("Ingrese tipo de inflamable:");

		while(tipoInflamable != "ignífugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
		{
			tipoInflamable = prompt ("Error, reingrese tipo de inflamable:");
		}


		switch(tipoProducto)
		{
			case "ALCOHOL":
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				break;

			case "QUAT":
				contadorQuat++;
				acumuladorQuat = acumuladorQuat + cantidadUnidades;
				break;

			case "IAC":
				contadorIac++;
				acumuladorIac = acumuladorIac + cantidadUnidades;
				if(precio<201)
				{
					acumuladorIacMenosDe200 = acumuladorIacMenosDe200 + cantidadUnidades;
				}
				break;
		}
		
		if(i==0 || inflamableMaximo < cantidadUnidades)
				{
					tipoInflamableMaximo = tipoInflamable;
					inflamableMaximo = cantidadUnidades;
				}

		if(i == 0 || precioMaximo<precio)
		{
			tipoProductoPrecioMaximo = tipoProducto;
			marcaProductoPrecioMaximo = marcaProducto;
		}

	console.log ("El promedio de cantidad de acohol es: " + promedioAlcohol + ". " +
		"El promedio de cantidad de quat es: " + promedioQuat +
		". El promedio de cantidad de iac es: " + promedioIac +
		". El tipo de inflamable con mas cantidad de unidades es: " + nombreInflamableMaximo +
		". Hay " + acumuladorIacMenosDe200 + " unidades de iac menos de 200" +
		". La marca y el tipo del producto mas caro es: " + tipoProductoPrecioMaximo + " y " +
		marcaProductoPrecioMaximo);

	}


	if(contadorAlcohol > 0)
	{
		promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
	}
	else
	{
		promedioAlcohol = 0;
	}

	if(contadorQuat > 0)
	{
		promedioQuat = acumuladorQuat / contadorQuat;
	}
	else
	{
		promedioQuat = 0;
	}

	if(contadorIac > 0)
	{
		promedioIac = acumuladorIac / contadorIac;
	}
	else
	{
		promedioIac = 0;
	}


	document.write("El promedio de cantidad de acohol es: " + promedioAlcohol + ". <br>" +
		"El promedio de cantidad de quat es: " + promedioQuat +". <br>" +
		"El promedio de cantidad de iac es: " + promedioIac + ". <br>" +
		"El tipo de inflamable con mas cantidad de unidades es: " + nombreInflamableMaximo + ". <br>" +
		"Hay " + acumuladorIacMenosDe200 + "unidades de iac menos de 200" + ". <br>" +
		"La marca y el tipo del producto mas caro es: " + tipoProductoPrecioMaximo + " y " +
		marcaProductoPrecioMaximo) + ". ";









	
///////////////////////////////////////////////afuera del for x5
















































}
/*
var marcaProducto;
	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var tipoInflamable;
	var continuar;

	var contadorAlcohol = 0;
	var contadorIac = 0;
	var contadorQuat = 0;
	var acumuladorAlcohol = 0;
	var acumuladorIac = 0;
	var acumuladorQuat = 0;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;

	var inflamableMaximo;
	var tipoInflamableMaximo;
	var flagInflamable = true;

	var contadorIacMenos200 = 0;

	var maximoProductoMasCaro;
	var tipoProductoMasCaro;
	var marcaProductoMasCaro;


	do
	{

		do
		{
			marcaProducto=prompt("Ingrese la marca del producto:");
		}while (!isNaN(marcaProducto));

		do
		{
			tipoProducto=prompt("Ingrese el tipo del producto (ALCOHOL, IAC, QUAT):");
		}while(tipoProducto != "ALCOHOL" && tipoProducto != "IAC" && tipoProducto != "QUAT");


		do
		{
			precioProducto = prompt ("Ingrese precio producto(100 a 300):");
			precioProducto = parseInt (precioProducto);
		}while (precioProducto < 100 || precioProducto > 300 || isNaN(precioProducto));

		do
		{
			cantidadUnidades = prompt ("Ingrese la cantidad de unidades:");
			cantidadUnidades = parseInt (cantidadUnidades);
		}while(cantidadUnidades < 0 || cantidadUnidades > 1000 || isNaN(cantidadUnidades));

		do
		{ 
			tipoInflamable = prompt ("Ingrese estado en relacion al fuego (ignífugo, combustible, explosivo):");
		}while (tipoInflamable != "ignífugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo");



	switch(tipoProducto)
	{
		case "ALCOHOL":
			contadorAlcohol++;
			acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
		break;

		case "IAC":
			contadorIac++;
			acumuladorIac = acumuladorIac + cantidadUnidades;

			if(cantidadUnidades < 201)
			{
				contadorIacMenos200++;
			}
		break;

		case "QUAT":
			contadorQuat++;
			acumuladorQuat = acumuladorQuat + cantidadUnidades;
		break;
	}

	if(flagInflamable == true || inflamableMaximo < cantidadUnidades)
	{
		inflamableMaximo = cantidadUnidades
		tipoInflamableMaximo = tipoInflamable;
	}

	if(flagInflamable == true || maximoProductoMasCaro < precioProducto)
	{
		maximoProductoMasCaro = precioProducto;
		tipoProductoMasCaro = tipoProducto;
		marcaProductoMasCaro = marcaProducto;
		flagInflamable = false;
	}

	continuar = confirm ("Desea continuar?")
	}while (continuar == true)
		
 
	promedioAlcohol = acumuladorAlcohol / contadorAlcohol;

	promedioIac = acumuladorIac / contadorIac;

	promedioQuat = acumuladorQuat / contadorQuat;


	document.write ("A- el promedio de cantidad por tipo de producto es para alcohol: " + promedioAlcohol +
		", para Iac " + promedioIac+ ", y para Quat: " + promedioQuat + 
		". B- El tipo de inflamable con más cantidad de unidades en total de la compra es: " + tipoInflamableMaximo+
		". C- La cantidad de unidades IAC con precio menor a 200 es: " + contadorIacMenos200 +
		". D- La marca y tipo de producto mas caro es: " + marcaProductoMasCaro + " y " + tipoProductoMasCaro);

*/