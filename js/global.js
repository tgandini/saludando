(function ($) {
    $(boton).click(function () {
        var nombre = $('[name="first_name"]').val() + " " + $('[name="last_name"]').val() + " " + $('[name="apellido"]').val()
        Swal.fire({
            title: 'Saludando!!',
            html: "<p>Hola " + nombre + "!! Espero que andes muy bien!!</p><p>¿Vamos a ver a Peppa?</p>",
            icon: 'success',
            confirmButtonText: '¡¡Gracias!! ¡¡A ver Pepa Pig!!'
        })

            .then((result) => {
                if (result.isConfirmed) {
                    location.href = "https://youtu.be/DP1pQkm9Op0";
                }
            })
    });
})(jQuery);