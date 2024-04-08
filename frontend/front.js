$(function () {

    let seleccionados = []; //array seleccionados para hacer push
    const modal = document.querySelector('.modal-body'); //no agarra variable modal la funcion actualizarModal

    $(".col-4").each(function () { //para un programa más grande habria que tener una clase más específica
        $(this).on('click', function () {
            $(this).css("opacity", "0.4");
            let elemento = $(this).attr('id'); // this se refiere al elemento clickeado y attr devuelve atributos de ese elemento, en este caso id
            if (!seleccionados.includes(elemento)) { //condicion que pregunta si no existe aun el elemento en el array, si es asi lo incluye
                seleccionados.push(elemento); //agregar elemento 
            }
            actualizarModal() 
        });

        $(this).on('dblclick', function () {
            $(this).css("opacity", "1");
            let elemento = $(this).attr('id'); 
            seleccionados = seleccionados.filter(function (producto) { //busca en el arreglo seleccionados si ya está el elemento que recibe el dblclick
                return producto !== elemento; // y si ya está ese elemento, crea un nuevo arreglo sin ese elemento
            });
            actualizarModal()
        });
    });

    function actualizarModal() {
        $('.modal-body').empty(); // elimina los elementos ya presentes en el modal, para que no se acumulen selecciones anteriores
        seleccionados.forEach(function (elemento) { //recorre lo acumulado en el array en ese momento y lo pinta en el modal
            $('.modal-body').append(`<div class="col-2"><img src="${elemento}.png" alt="${elemento}" width="100%"></div>`);
        });
    }

})