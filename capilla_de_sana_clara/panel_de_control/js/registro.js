document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        // Obtener los valores de los campos del formulario
        const usuario = document.getElementById("usuario").value.trim();
        const email = document.getElementById("email").value.trim();
        const confirmEmail = document.getElementById("confirm-email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const rol = document.getElementById("rol").value;
        const barrio = document.getElementById("barrio").value;

        // Expresión regular para validar correos electrónicos
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Limpiar errores anteriores
        const errors = document.querySelectorAll(".error");
        errors.forEach(function(error) {
            error.remove();
        });

        let formIsValid = true;

        // Validar campo Usuario (no vacío)
        if (usuario === "") {
            showError("usuario", "El campo usuario es obligatorio.");
            formIsValid = false;
        }

        // Validar correos electrónicos
        if (!emailPattern.test(email)) {
            showError("email", "Por favor, ingrese un correo electrónico válido.");
            formIsValid = false;
        }
        if (email !== confirmEmail) {
            showError("confirm-email", "Los correos electrónicos no coinciden.");
            formIsValid = false;
        }

        // Validar contraseñas
        if (password.length < 8) {
            showError("password", "La contraseña debe tener al menos 8 caracteres.");
            formIsValid = false;
        }
        if (password !== confirmPassword) {
            showError("confirm-password", "Las contraseñas no coinciden.");
            formIsValid = false;
        }

        // Validar nombre y apellido
        if (nombre === "") {
            showError("nombre", "El campo nombre es obligatorio.");
            formIsValid = false;
        }
        if (apellido === "") {
            showError("apellido", "El campo apellido es obligatorio.");
            formIsValid = false;
        }

        // Validar selección de rol
        if (rol === "") {
            showError("rol", "Seleccione un rol.");
            formIsValid = false;
        }

        // Validar selección de barrio
        if (barrio === "") {
            showError("barrio", "Seleccione un barrio.");
            formIsValid = false;
        }

        // Si el formulario no es válido, prevenir el envío
        if (!formIsValid) {
            event.preventDefault();
        }
    });

    // Función para mostrar mensajes de error
    function showError(inputId, message) {
        const inputField = document.getElementById(inputId);
        const errorElement = document.createElement("div");
        errorElement.className = "error";
        errorElement.textContent = message;
        inputField.parentNode.insertBefore(errorElement, inputField.nextSibling);
    }
});
