function guardarDatos() {
    // Obtener valores del formulario
    const titularMenu = document.getElementById("titular_menu").value;
    const nombreLogo = document.getElementById("nombre_logo").value;
    const imagenLogo = document.getElementById("imagen_logo").files[0];
    const opciones = [];
    const iconSelects = []; // Cambié el nombre a iconSelects

    for (let i = 1; i <= 4; i++) {
        const opcion = document.getElementById(`opcion${i}`).value;
        const iconSelect = document.getElementById(`iconSelect${i}`).value; // Asegúrate de que cada select tenga un id único
        opciones.push(opcion);
        iconSelects.push(iconSelect);
    }

    // Guardar datos en localStorage
    localStorage.setItem("titularMenu", titularMenu);
    localStorage.setItem("nombreLogo", nombreLogo);

    // Guardar la imagen (deberías manejar esto para obtener la URL)
    if (imagenLogo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem("imagenLogo", e.target.result); // Guarda la URL de la imagen
        };
        reader.readAsDataURL(imagenLogo);
    }

    // Guardar opciones y iconos
    opciones.forEach((opcion, index) => {
        localStorage.setItem(`opcion${index + 1}`, opcion);
        localStorage.setItem(`iconSelect${index + 1}`, iconSelects[index]);
    });

    // Redirigir a la página
    window.location.href = "dadis_cartagena_de_indias.html";
}
