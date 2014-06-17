/**
* Funcion que se ejecuta cada vez que se añade una letra en un cuadro de texto
* Suma los valores de los cuadros de texto
*/
function sumar()
{
   var cant1=verificar("valor1");
   var cant2=verificar("valor2");
   var cant3=verificar("valor3");
   
   var valor1=parseInt(cant1)*2500;
   var valor2=parseInt(cant2)*3500;
   var valor3=parseInt(cant3)*2800;
   // realizamos la suma de los valores y los ponemos en la casilla del
   // formulario que contiene el total
   //var total=parseInt(valor1)+parseInt(valor2)+parseInt(valor3);
   document.getElementById("total").value=parseInt(valor1)+parseInt(valor2)+parseInt(valor3);
   document.getElementById("total2").innerHTML =parseInt(valor1)+parseInt(valor2)+parseInt(valor3);
   
}

/**
* Funcion para verificar los valores de los cuadros de texto. Si no es un
* valor numerico, cambia de color el borde del cuadro de texto
*/
function verificar(id)
{
   var obj=document.getElementById(id);
   if(obj.value=="")
       value="0";
   else
       value=obj.value;

   if(validate_importe(value))
   {
       // marcamos como erroneo
       obj.style.borderColor="#808080";
       return value;

   }else{
       // marcamos como erroneo
       obj.style.borderColor="#f00";
       alert("Cantidad incorrecta");
       return 0;
   }
}

/**
* Funcion para validar el importe
* Tiene que recibir:
*  El valor del importe (Ej. document.formName.operator)
*  Determina si permite o no decimales [1-si|0-no]
* Devuelve:
*  true-Todo correcto
*  false-Incorrecto
*/
function validate_importe(value,decimal)
{

   if(decimal==undefined)
   {decimal=0;
   }
   if(decimal==1)
   {
       // Permite decimales tanto por . como por ,
       var patron=new RegExp("^[0-9]+((,|\.)[0-9]{1,2})?$");
   }else{
       // Numero entero normal
       var patron=new RegExp("^([0-9])*$")
   }

   if(value && value.search(patron)==0)
   {
       return true;
   }
   return false;
}
