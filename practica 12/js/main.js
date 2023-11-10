
function validarFormulario() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('exampleInputPassword1').value;
    
    if (email == 'usuario' && password == '1234'){
        alert('ingreso correcto');
        return true;

    }else{
        alert('usuario o contraseña incorrecta');
        return false;
    }
}
