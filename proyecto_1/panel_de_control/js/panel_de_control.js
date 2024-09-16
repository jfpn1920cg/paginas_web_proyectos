//funacionalidad_menu_de_navegacion
document.addEventListener('DOMContentLoaded', function() {
    const menu_de_navegacion_desplegable = document.getElementById('menu_de_navegacion_desplegable');
    const menu_de_navegacion = document.getElementById('menu_de_navegacion');

    if (menu_de_navegacion_desplegable && menu_de_navegacion) {
        menu_de_navegacion_desplegable.addEventListener('click', () => {
            menu_de_navegacion.classList.toggle('active');
        });
    }
});
