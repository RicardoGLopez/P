//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000
// Porcentaje de recargos
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%
var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%
var hijos_recargo = 0.2; // 20%
var propiedad_re = 0.35; // 35% 
var salario_cliente_re = 0.05; // 5%
//Recargos
var recargo_conyuge = 0
var recargo_hijos = 0
var recargo = 0
var recargo_total = 0
var precio_final = 0
var re_propiedad = 0
var re_salario = 0
//


    
  //Solicitud de información del cliente
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var casado = prompt("¿Está casado actualmente?")

var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
}

var hijos = prompt("¿Tiene hijos o hijas?")

if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuántos hijos tiene?")
}

var no_propiedades = prompt("Ingrese el número de propiedades que posee")
var salario = prompt("Ingrese su salario mensual")

//
//Conversión de datos a números
var no_propiedades_num = 0
var salario_num = 0

var no_propiedades_num = parseInt(no_propiedades)
var salario_num = parseInt(salario)

var edad_numero = parseInt(edad)
// Cantidad de años conyuge en número
var edad_conyuge_numero = 0

if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}


/**
 * 1. convierta la cantidad de hijos a numero
*/
var cantidad_hijos_numero = 0
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}




//Aquí es donde debe de calcular los recargos y el valor final

//Recargo de propiedad y salario

re_propiedad = (precio_base * propiedad_re) * no_propiedades_num
re_salario = salario_num * salario_cliente_re

//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
}
//aqui puede colocar un else if() con el siguiente rango
else if(edad_numero>=25 && edad_numero<50){
  recargo = precio_base * edad_25
}
else if(edad_numero>=50){
  recargo = precio_base * edad_50
}
/** 
 * 2. Recargo por la edad del conyuge
 */
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  recargo_conyuge = precio_base * casado_18
}
else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
  recargo_conyuge = precio_base * casado_25
}
else if(edad_conyuge_numero>=50){
  recargo_conyuge = precio_base * casado_50
}
/**
 * 3. Recargo por la cantidad de hijos 
 */ 
 recargo_hijos = (precio_base * hijos_recargo) * cantidad_hijos_numero

//suma de recargos
recargo_total = recargo + recargo_conyuge + recargo_hijos + re_propiedad + re_salario

precio_final = precio_base + recargo_total



//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo por su propiedad sera de: "+re_propiedad)
alert ("El recargo por su salario sera de:"+re_salario)
alert ("Su recargo individual sera de: "+recargo)
alert ("El recargo de su conyuge sera de: "+recargo_conyuge)
alert ("El recargo por sus hijos sera de: "+recargo_hijos)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

