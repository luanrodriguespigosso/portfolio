// menu hamburguer START
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
// menu hamburguer END

/* Start valida email*/
function validaEmail(email) {
    var validate = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return validate(email)
}
/* End valida email*/

// contador de caracteres formulário START
$(document).on("input", "#msg" , function() {
    var limit = 500;
    var total = $(this).val().length;
    var remaining = limit - total;

    $("#counter").text(remaining);
});
// contador de caracteres formulário END