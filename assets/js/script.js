var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*https://blog.hubspot.es/website/bootstrap-navbar */

$(function () {

    $("#carousel").mouseenter(function () {
        $('#navbar_navegacion').removeClass("negro");
        $('#navbar_navegacion').addClass("transparente");
    })
    $("#header").mouseleave(function () {
        $('#navbar_navegacion').removeClass("transparente");
        $('#navbar_navegacion').addClass("negro");
    })


});


