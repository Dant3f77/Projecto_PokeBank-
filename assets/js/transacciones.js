//var usuario=[];
var transaccion=[];
var valores = window.location.search;
const urlParams = new URLSearchParams(valores);

var pin =  urlParams.get('pin');

//usuario.push(["Karla Bonilla", 1034, 200,22446688]);
//usuario.push(["Daniel Bonilla", 1244, 100,88991177]);
//usuario.push(["Ronald Bonilla", 1214, 500,11001100]);
//usuario.push(["Ash Ketchum", 1234, 500,0987654321]);





/* metodo para datos*/ 
        
    for( var user in usuario){
        
     if (pin == usuario[user][1]){
    document.getElementById("nombreCliente").innerHTML= "Nombre Cliente: "+usuario[user][0];
    document.getElementById("numeroDeCuenta").innerHTML= "Numero de Cuenta: "+usuario[user][3]
        
        break;
     }  
    }

/* metodo para saldo*/
for( var user in usuario){
        
    if (pin == usuario[user][1]){
   document.getElementById("SaldoActu").innerHTML= "$"+usuario[user][2];
          
       break;
    }  
   }




/* metodo para retirar*/
var retiros = function(){
    var retiro = document.getElementById("valorRetiro").value;    
    if(retiro != "0" && retiro != "" ){   
    for( var user in usuario){
     if (pin == usuario[user][1]){
       if (usuario[user][2]>0 && retiro<=usuario[user][2]){
            usuario[user][2] = usuario[user][2] - parseInt(retiro);
            //usuario,tipotransaccio, valor transaccion, saldo actual
            transaccion.push([usuario[user][0],"Retiro", "$"+retiro, "$"+usuario[user][2],"Su retiro es de: "+"$"+retiro]);  
            swal("¡Pokefantástico!", "La transacción fue realizada con éxito", "success");
            genera_tabla();
        }else{
            swal("Oooh no", "Usted no posee fondos suficientes para realizar la operación", "error");
        }  
        break;
     }  
    }
}else{
    swal("Operación incompleta", "Por Favor digite un monto para la transacción", "warning");
}
}
var retirar = function(){
    retiros();
}

/* metodo para depositar*/
var depositos = function(){
    
    var deposito = document.getElementById("valorDeposito").value;  
    if(deposito === "0" || deposito ==="" ){ 
        swal("Operación incompleta", "Por Favor digite un monto para la transaccioón", "warning");
       
    }else{
        for( var user in usuario){
            if (pin == usuario[user][1]){
                if(usuario[user][2]>0 && deposito<=usuario[user][2]){
                    usuario[user][2] = usuario[user][2] + parseInt(deposito);
                    //usuario,tipotransaccio, valor transaccion, saldo actual
                    transaccion.push([usuario[user][0],"Deposito", "$"+ deposito, "$"+usuario[user][2],"Su deposito es de $"+deposito]);  
                    swal("¡Pokefantástico!", "La transacción fue realizada con éxito", "success");
                    genera_tabla();
                }else{
                    swal("Oooh no", "Usted no posee fondos suficientes para realizar la operación", "error");
                }  
                break;
            }  
        }
        
    }
    
}
var depositar = function(){
    depositos();
}

/* Pago de servicios */

var pagos = document.getElementById("servicios");
pagos.addEventListener("change", function() {
    console.log(pagos.value)
});



var pagos = function(){
    
    var pago = document.getElementById("valorPago").value; 
    if(pago === "0" || pago ==="" ){ 
        swal("Operación incompleta", "Por Favor digite un monto para la transaccion", "warning"); 
         }else{   
            for( var user in usuario){
                if (pin == usuario[user][1]){
                   if(usuario[user][2]>0 && pago<=usuario[user][2]){
                       usuario[user][2] = usuario[user][2] - parseInt(pago);
                       //usuario,tipotransaccio, valor transaccion, saldo actual
                       transaccion.push([usuario[user][0],"Retiro", " $"+pago, usuario[user][2],"Pago de factura "+servicios.value+" $"+pago]);  
                       swal("¡Pokefantástico!", "La transacción fue realizada con éxito", "success");
                       genera_tabla();
                   }else{
                       swal("Oooh no", "Usted no posee fondos suficientes para realizar la operación", "error");
                   }  
                   break;
                }  
               }
          } 
   
}
var pagar = function(){
    pagos();
}



/* metodo de la tabla*/
function genera_tabla() {
    var tblBody = document.getElementById("tbody");
    tblBody.replaceChildren("");
    for(var trans in transaccion){
        var hilera = document.createElement("tr");
        for(var i =0;i<5;i++){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(transaccion[trans][i])
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        tblBody.appendChild(hilera);
    }
  }

  /*metodo datos */









