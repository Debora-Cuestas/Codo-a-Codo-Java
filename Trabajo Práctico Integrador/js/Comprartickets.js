 //Valor entrada
 const ValorTicket=200;

 //Valor descuentos
 const Estudiante  =80;
 const Trainee     =50;
 const Junior      =15;
 
 //informacion de inputs
 let Nombre      =document.getElementById("NomInput1")
 let Apellido    =document.getElementById("ApeInput1")
 let Mail        =document.getElementById("inputEmail")
 let Cantidad    =document.getElementById("inputCantidad")
 let Categoria   =document.getElementById("inputCategoria")

 
 quitarClaseError();

 function Calcular()
 {
     if(Nombre.value==="")
     {
         var aux=document.getElementById("NomInput1");
         aux.classList.add("is-invalid");
     }

     if(Apellido.value==="")
     {
         var aux=document.getElementById("ApeInput1");
         aux.classList.add("is-invalid");
     }

     if(Mail.value==="")
     {
         var aux=document.getElementById("inputEmail");
         aux.classList.add("is-invalid");
     }

     if((Cantidad.value<=0)||(isNaN(Cantidad.value)))
     {
         var aux=document.getElementById("inputCantidad");
         aux.classList.add("is-invalid");
     }
            
     var totalValorTickets=(Cantidad.value)*ValorTicket;

     if(Categoria.value=="Sin Categoria")
     {
         totalValorTickets=totalValorTickets;
     }
     if(Categoria.value=="Estudiante")
     {
         totalValorTickets=totalValorTickets-(Estudiante/100*totalValorTickets);
     }
     if(Categoria.value=="Trainee")
     {
         totalValorTickets=totalValorTickets-(Trainee/100*totalValorTickets);
     }
     if(Categoria.value=="Junior")
     {
         totalValorTickets=totalValorTickets-(Junior/100*totalValorTickets);
     }
     document.getElementById("Pago_total").innerHTML="Total a pagar: $ "+totalValorTickets;
 }

 function quitarClaseError()
 {
     let x=document.querySelectorAll(".form-control,.form-select");
     let i;
     for(i=0;i<x.length;i++)
     {
         x[i].classList.remove("is-invalid");
     }
 }
 //Desarrollo funcion 
 function reset_total_a_pagar()
 {
     quitarClaseError();
     document.getElementById("Pago_total").innerHTML="Total a pagar: $ ";
 }
