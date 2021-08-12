var username,
    password,
    btnCloseLogin = document.getElementById('close'),
    btnLogin = document.getElementById('login'),
    btnUsuario = document.getElementById('create-user'),
    btnCloseUsuario = document.getElementById('closeUsuario'),
    btnIngresar = document.getElementById('ingresar'),
    btnUsuarios = document.getElementById('btnUsuarios'),
    btnCloseUsuarios = document.getElementById('closeUsuarios');


function showModal(modal) {
    switch (modal) {
        case "login":
            $('.container-modal').addClass('show');
            $('.modal').addClass('show');
            break;
        case "crearUsuario":
            $('.container-usuario').addClass('show');
            $('.mod-usuario').addClass('show');
            break;
        case "usuarios":
            $('.container-usuarios').addClass('show');
            // $('.usuarios').addClass('show');
            break;
    }
};

function downShowModal(modal) {

    switch (modal) {
        case "login":
            $('.container-modal').removeClass('show');
            $('.modal').removeClass('show');
            break;
        case "crearUsuario":
            $('.container-usuario').removeClass('show');
            $('.mod-usuario').removeClass('show');
            break;
        case "usuarios":
            $('.container-usuarios').removeClass('show');
            // $('.usuarios').addClass('show');
            break;
    }
}

function showSnake() {
    $('.container-flex').addClass('showSnake');
};

btnCloseLogin.addEventListener("click", function(e) {
    e.preventDefault();
    downShowModal('login');
});

btnCloseUsuario.addEventListener("click", function(e) {
    e.preventDefault();
    downShowModal('crearUsuario');
});

btnCloseUsuarios.addEventListener("click", function(e) {
    e.preventDefault();
    downShowModal('usuarios');
});

btnLogin.addEventListener('click', function(e) {
    e.preventDefault();
    showModal('login');
});

btnUsuario.addEventListener('click', function(e) {
    e.preventDefault();
    showModal('crearUsuario');
});
//$(".btnLogin").button().on("click", showModal);

btnUsuarios.addEventListener('click', function(e) {
    e.preventDefault();
    showModal('usuarios');
});


btnIngresar.addEventListener("click", function(e) {
    e.preventDefault();
    username = $('#username').val();
    password = $('#password').val();
    if (username === "admin" && password === "admin") {
        Swal.fire({
            title: '¡BIENVENIDO ' + username + ' !',
            text: 'Vamos a jugar',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Genial!',
        })
        downShowModal('login');
        showSnake();
        $("#login").html(username); // pensar como hacer para que no renderice el login de nuevo
    }
});

export { showModal, downShowModal, showSnake };