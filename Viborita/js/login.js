import { downShowModal, showSnake } from './modals.js';
import { expresiones } from './regex.js';
import { getUserByUsername } from './snakeApi.js'

var username,
    password,
    btnIngresar = document.getElementById('ingresar'),
    formulario = document.getElementById('formularioLogin'),
    inputs = document.querySelectorAll('#formularioLogin input');


const campos = {
    username: false,
    password: false
};


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "username":
            validarCampo(expresiones.usuario, e.target, 'username');
            break;
        case "password":
            validarCampo(expresiones.contrasenia, e.target, 'password');
            break;
    }
};

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formularioLogin__input-error`).classList.remove('formularioLogin__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formularioLogin__input-error`).classList.add('formularioLogin__input-error-activo');
        campos[campo] = false;
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    if (campos.username && campos.password) {

        username = $('#username').val();
        password = $('#password').val();

        // console.log(username);
        (async() => {
            console.log('entre al login');
            const res = await getUserByUsername(username);
            if (username === res.username && password === res.password) {
                Swal.fire({
                    title: '¡BIENVENIDO ' + res.username + ' !',
                    text: 'Vamos a jugar',
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Genial!',
                })
                downShowModal('login');
                showSnake();
                $("#login").html(res.username); // pensar como hacer para que no renderice el login de nuevo
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: '¡Uups!',
                    text: 'Usuario y/o contraseña incorrectos',
                    showConfirmButton: false,
                    timer: 2500
                })
            };
        })();

        formulario.reset();
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });

    } else {
        //   console.log("entre");
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }

});