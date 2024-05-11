$(document).ready(function() {
    // Manejar clics en enlaces de navegación
    $('a.nav-link').click(function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado de los enlaces

        // Obtener la URL del enlace
        var pageUrl = $(this).attr('href');

        // Cargar el contenido de la página utilizando AJAX
        $.get(pageUrl, function(data) {
            // Buscar el contenido de la página en el HTML devuelto
            var content = $(data).find('#content').html();

            // Actualizar el contenido en el layout
            $('#content').html(content);
        });
    });
});
