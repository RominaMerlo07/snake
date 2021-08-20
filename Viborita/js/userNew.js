import { getUsers, insertScore, createUser, updateUser, deleteUser } from './snakeApi.js';
import { downShowModal } from './modals.js'
const formulario = document.getElementById('formularioUser');
const inputs = document.querySelectorAll('#formularioUser input');
var username, fullname, password, email, puntaje;


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    contrasenia: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const campos = {
    usuario: false,
    nombre: false,
    contrasenia: false,
    email: false
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "contrasenia":
            validarCampo(expresiones.contrasenia, e.target, 'contrasenia');
            break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            break;
    }
};


const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.usuario && campos.nombre && campos.contrasenia && campos.email) {

        username = $('#usuario').val();
        fullname = $('#nombre').val();
        password = $('#contrasenia').val();
        email = $('#email').val();
        puntaje = 0;

        const usuario = { username, fullname, password, email };
        //   let score = username;

        /*     (async() => {
            console.log('entre al crear');
            const res = await createUser(usuario);
            console.log(res);
        })();
 */
        (async() => {
            try {
                const res = await createUser(usuario);
                //  score = Object.assign(res.username, score);
                const resScore = await insertScore(res);
                // console.log(resScore);
                /*como deberia unir las promises*/

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'El usuario "' + username + '" se creo con exito',
                    showConfirmButton: false,
                    timer: 2500,
                });
                //console.log(res);
                downShowModal('crearUsuario');
            } catch (e) {
                //console.log('error ' + e);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: '¡Uups! - Ocurrio un error.',
                    text: 'El email "' + email + '" o el usuario "' + username + '" ya se encuentran registrados',
                    showConfirmButton: false,
                    timer: 2500
                });
                // downShowModal('crearUsuario');
            }
        })();

        formulario.reset();
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });


    } else {
        console.log("entre");
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});