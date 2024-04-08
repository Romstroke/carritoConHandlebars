
$(function () {
    let seleccionados = []; // Define un array para almacenar los elementos clickeados
    const modal = document.querySelector('.modal-body'); //no agarra el modal la funcion actualizarModal xd

    $(".col-4").each(function() {
        $(this).on('click', function() {
            $(this).css("opacity","0.4");
            let elemento = $(this).attr('id'); // Obtiene el ID del elemento clickeado
            seleccionados.push(elemento); // Agrega el elemento al array
            console.log(seleccionados); // Muestra el array en la consola (para propósitos de depuración)
            actualizarModal()
        });

        $(this).on('dblclick', function() {
            $(this).css("opacity","1");
            let elemento = $(this).attr('id'); // Obtiene el ID del elemento clickeado
            let index = seleccionados.indexOf(elemento); // Encuentra el índice del elemento en el array
            if (index !== -1) {
                seleccionados.splice(index, 1); // Elimina el elemento del array si ya estaba presente
                console.log(seleccionados); // Muestra el array en la consola (para propósitos de depuración)
            }
            actualizarModal()
        });
    });

    function actualizarModal() {
        $('.modal-body').empty(); // Vacía el contenido actual del modal
        seleccionados.forEach(function(elemento) { // Recorre los elementos seleccionados
            $('.modal-body').append(`<div class="col-2"><img src="${elemento}.png" alt="${elemento}" width="100%"></div>`); // Agrega cada elemento al modal
        });
    }
});
