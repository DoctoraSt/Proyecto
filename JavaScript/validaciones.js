function validarLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

    // Obtener los valores de los campos
    let usuario = document.getElementById('nombre_usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    // Validación de campos vacíos
    if (usuario.trim() === "") {
        alert("El campo 'Usuario' es obligatorio.");
        return false;
    }
    if (contraseña.trim() === "") {
        alert("El campo 'Contraseña' es obligatorio.");
        return false;
    }

    // Validación de credenciales simples (esto se puede mejorar con autenticación de servidor)
    // Simulación de datos de usuario correcto
    let usuarioCorrecto = "admin";
    let contraseñaCorrecta = "1234";

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        alert("Inicio de sesión exitoso");
        // Redirigir a landing page
        window.location.href = "landingpage.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}