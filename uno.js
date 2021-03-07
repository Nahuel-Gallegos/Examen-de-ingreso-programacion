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
			marcaProducto = prompt ("Ingrese la marca del producto:");

		}while (!isNaN(marcaProducto));

		do
		{
			tipoProducto = prompt ("Ingrese el tipo del producto (ALCOHOL, IAC, QUAT):");

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

	}
