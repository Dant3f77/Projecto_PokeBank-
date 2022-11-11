function validate() {
    var pin=document.getElementById('pin').value;
    if (pin=="1234"){
        alert("Ingreso exitoso");
        window.location.href="../transacciones.html?pin=1234";
        
    }
    else{
        alert("Ingrese un pin valido");
        
        
    }
}
