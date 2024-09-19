function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe antes de la validación

    // Obtener los valores de los campos
    let nombreUsuario = document.getElementById('nombre_usuario').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    let genero = document.getElementById('genero').value;
    let contraseña = document.getElementById('contraseña').value;
    let tipoDeCuenta = document.getElementById('tipo_de_cuenta').value;

    // Validación de campos vacíos
    if (nombreUsuario.trim() === "") {
        alert("El campo 'Nombre de Usuario' es obligatorio.");
        return false;
    }
    if (apellido.trim() === "") {
        alert("El campo 'Apellido' es obligatorio.");
        return false;
    }
    if (email.trim() === "") {
        alert("El campo 'Correo Electrónico' es obligatorio.");
        return false;
    }
    if (telefono.trim() === "") {
        alert("El campo 'Teléfono' es obligatorio.");
        return false;
    }
    if (fechaNacimiento.trim() === "") {
        alert("El campo 'Fecha de Nacimiento' es obligatorio.");
        return false;
    }
    if (genero.trim() === "") {
        alert("El campo 'Género' es obligatorio.");
        return false;
    }
    if (contraseña.trim() === "") {
        alert("El campo 'Contraseña' es obligatorio.");
        return false;
    }
    if (tipoDeCuenta === "Tipo de cuenta") {
        alert("Por favor, selecciona un tipo de cuenta.");
        return false;
    }

    // Validación de formato de correo electrónico
    let patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!patronEmail.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }

    // Validación de teléfono (debería ser un número y tener una longitud mínima)
    let patronTelefono = /^[0-9]{7,15}$/;
    if (!patronTelefono.test(telefono)) {
        alert("El número de teléfono debe contener entre 7 y 15 dígitos.");
        return false;
    }

    // Si todas las validaciones son correctas
    alert("Formulario enviado correctamente.");
    document.getElementById('miFormulario').submit(); // Enviar el formulario
}