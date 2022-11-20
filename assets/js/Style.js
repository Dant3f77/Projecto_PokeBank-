function validate() {
    var pin=document.getElementById('pin').value;
    if (pin=="1234"){
        window.location.href="../transacciones.html?pin=1234";
        
    }
    else{
        swal("PIN invalido", "Ingrese otro PIN y vuelva a intentarlo", "error");
        
        
    }
}
