// Recuperar datos del localStorage
const titularMenu = localStorage.getItem("titularMenu");
const nombreLogo = localStorage.getItem("nombreLogo");
const opciones = [
    localStorage.getItem("opcion1"),
    localStorage.getItem("opcion2"),
    localStorage.getItem("opcion3"),
    localStorage.getItem("opcion4")
];
const iconos = [
    localStorage.getItem("iconSelect1"),
    localStorage.getItem("iconSelect2"),
    localStorage.getItem("iconSelect3"),
    localStorage.getItem("iconSelect4")
];

// Mostrar el titular del menú
document.getElementById("titular_menu_display").innerText = titularMenu;

// Mostrar el logo
const logoDisplay = document.getElementById("logo_display");
logoDisplay.src = localStorage.getItem("imagenLogo"); // Asegúrate de guardar la URL de la imagen en localStorage

// Crear el menú de navegación
const menuNavegacion = document.getElementById("menu_navegacion");
opciones.forEach((opcion, index) => {
    if (opcion) {
        const enlace = document.createElement("a");
        enlace.href = "#"; // Puedes cambiar esto para que dirija a otras páginas si lo deseas
        enlace.innerHTML = `<i class="${iconos[index]}"></i> ${opcion}`;
        menuNavegacion.appendChild(enlace);
    }
});

// Mostrar las opciones como una lista
const opcionesMenu = document.getElementById("opciones_menu");
opciones.forEach((opcion, index) => {
    if (opcion) {
        const li = document.createElement("li");
        li.innerHTML = `<i class="${iconos[index]}"></i> ${opcion}`;
        opcionesMenu.appendChild(li);
    }
});
