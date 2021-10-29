
import { getUsers, updateUser, deleteUser } from './snakeApi.js';

let pageSize = 4; //Tamaño de la página
let pageNumber = 1; //Número de página

let posPage;

let buttonPreviusPage = document.getElementById('previusPage'); //Obtengo botón "Anterior"
let buttonNextPage = document.getElementById('nextPage'); //Obtengo botón "Siguiente"
let buttonUsuarios = document.getElementById('btnUsuarios'); //Obtengo botón "Usuarios"

//Configuro las expresiones regulares para cada campo de la grilla
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const campos = {
    usuario: false,
    nombre: false,
    email: false
};

const validarFormulario = (e) => {
    console.log('Entre al validarFormulario');
    switch (e.currentTarget.id) {
        case "usuario":
            console.log('Entre al validarFormulario - usuario');
            validarCampo(expresiones.usuario, e.currentTarget, 'usuario');
            break;
        case "nombre":
            console.log('Entre al validarFormulario - nombre');
            validarCampo(expresiones.nombre, e.currentTarget, 'nombre');
            break;
        case "email":
            console.log('Entre al validarFormulario - email');
            validarCampo(expresiones.email, e.currentTarget, 'email');
            break;
    }
};


const validarCampo = (expresion, columna, campo) => {
    if (expresion.test(columna.textContent)) {
        console.log(columna.textContent);
        console.log('Se valida OK el ingreso del campo');
        columna.classList.remove('grilla__campo-incorrecto');
        //console.log(columna.querySelector('span'));
        //columna.querySelector('span').hidden = "false";
        campos[campo] = true;
    } else {
        console.log('Se valida incorrecto el ingreso del campo');
        console.log(columna.textContent);
        columna.classList.add('grilla__campo-incorrecto');
        campos[campo] = false;
    }
};

(async() => {
    
    let users = await getUsers();
    console.log(users);

    //Obtengo cantidad total de páginas
    let pageCont = () => Math.ceil(users.length/pageSize);

    //Cantidad total de registros de la grilla
    let rowCont = () => pageSize * pageCont();

    //Calculo posición del primer usuario a paginar
    let firstPaginatedUser = () => pageSize*pageNumber-pageSize;

    //Calculo posición del último usuario a paginar 
    let lastPaginatedUser = () => pageSize*pageNumber;

    //Creo texto de paginación
    let textPagination = () => document.getElementsByClassName('paginationText')[0].textContent = `Registros del ${ firstPaginatedUser()+1 } al ${ lastPaginatedUser() } de un total de ${ users.length }`;

    //Método de carga de grilla
    let loadGrid = () => {

        let tbody = document.getElementById('busqueda');

        let id;
        let username;
        let nombre;
        let email;

        for (let i = 0; i < rowCont(); i++) {
            
            if (users[i] == null) {
                
                id = null
                username = null;
                nombre = null;
                email = null;

            } else {

                id = users[i].id
                username = users[i].username;
                nombre = users[i].fullname;
                email = users[i].email;

            }

            tbody.innerHTML += `
            <tr>
                <td hidden="true">${ id }</td>
                <td contenteditable="true" id="usuario">
                        ${ username }
                </td>
                <td contenteditable="true" id="nombre">
                        ${ nombre }
                </td>
                <td contenteditable="true" id="email">
                        ${ email }
                </td>
                <td id="actions">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                    <i class="fas fa-trash-alt" aria-hidden="true"></i>
                </td>
            </tr>`

        }

        const inputs = document.querySelectorAll("td[contentEditable='true']");
        console.log(inputs);

        inputs.forEach((input) => {
            input.addEventListener('keyup', validarFormulario);
            //input.addEventListener('blur', validarFormulario);
        });

        textPagination();

        let iconDelete = document.getElementsByClassName('fa-trash-alt');
        let iconEdit = document.getElementsByClassName('fa-edit');
    
        editUser(iconEdit);
        removeUser(iconDelete);
    }

    //Método de paginación
    let paginate = (pPosPage) => {

        //Creo vector con los usuarios a paginar
        let usersPaginated = users.slice(firstPaginatedUser(), lastPaginatedUser());

        for (let i = 0; i < pageSize; i++) {
            
            //Obtengo los tag tr y td de los usuarios paginados actualmente
            let tr1 = document.getElementsByTagName("tr")[i+1];
            let td1 = tr1.getElementsByTagName("td");
            let i1  = td1[4].getElementsByTagName("i");


            //Obtengo los tag tr y td de los usuario a paginar
            let tr2 = document.getElementsByTagName("tr")[i+pPosPage];
            let td2 = tr2.getElementsByTagName("td");

            //Almaceno en variables el valor de cada columna de los usuarios paginados actualmente
            let tdId1 = td1[0].textContent;
            let tdUsername1 = td1[1].textContent;
            let tdFullname1 = td1[2].textContent;
            let tdEmail1 = td1[3].textContent;

            //Reemplazo el usuario paginado por el usuario a paginar.
            //Si el usuario a paginar es null, rellena la posición de la tabla en null
            if (usersPaginated[i] == null) {

                td1[0].textContent = null;
                td1[1].textContent = null;
                td1[2].textContent = null;
                td1[3].textContent = null;

                //Escondo las acciones de los registros en null
                i1[0].toggleAttribute('hidden');
                i1[1].toggleAttribute('hidden');

            } else {

                td1[0].textContent = usersPaginated[i].id;
                td1[1].textContent = usersPaginated[i].username;
                td1[2].textContent = usersPaginated[i].fullname;
                td1[3].textContent = usersPaginated[i].email;

                i1[0].removeAttribute('hidden');
                i1[1].removeAttribute('hidden');

            }

            //Reemplazo el usuario a paginar por el usuario paginado
            td2[0].textContent = tdId1;
            td2[1].textContent = tdUsername1;
            td2[2].textContent = tdFullname1;
            td2[3].textContent = tdEmail1;

        }

        textPagination();
    }

    //Método de eliminación de grilla
    let removeGrid = () => {

        //Obtengo los elementos tr
        let trRemove = document.getElementsByTagName('tr');

        for (let i = 1; i < trRemove.length;) {
            trRemove[i].remove();
        }
    }

    //Método de eliminar usuarios
    let removeUser = (pIconDelete) => {
        for (let i = 0; i < pIconDelete.length; i++) {
            pIconDelete[i].addEventListener('click', function(e){

                //Obtengo usuario a eliminar
                let itemToDelete = e.currentTarget.parentElement.parentElement;
                        
                //Obtengo ID y username del usuario a eliminar
                let idItem = parseInt(itemToDelete.getElementsByTagName('td')[0].textContent);
                let usernameItem = itemToDelete.getElementsByTagName('td')[1].textContent;

                Swal.fire({
                    title: '¿Esta seguro que desea eliminar el usuario?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if (result.isConfirmed) {
                                        
                        //Obtengo el usuario a editar
                        let userToDelete = users.find( t => t.id === idItem );

                        //Llamo al método de borrar, y luego, actualizo la variable USERS con los usuarios actuales
                        (async() => {
                            const res = await deleteUser(userToDelete);
                            users = await getUsers();
                        })();
                        
                        //Actualizo número de pagina y llamo a los métodos de eliminar y cargar grilla
                        setTimeout(function() {
                            console.log(users);
                            pageNumber = 1;
                            removeGrid();
                            loadGrid();
                        }, 1000);

                        Swal.fire(
                            'Eliminado!',
                            `El usuario ${ usernameItem.toUpperCase() } fue eliminado correctamente`,
                            'success'
                        )

                    }
                })
            });
            
        }
    }

    //Método de editar usuarios
    let editUser = (pIconEdit) => {
        for (let i = 0; i < pIconEdit.length; i++) {
            pIconEdit[i].addEventListener('click', function(e) {

                //Obtengo usuario de la grilla a editar
                let itemToEdit = e.currentTarget.parentElement.parentElement;

                //Obtengo ID del usuario a editar
                let idItem = parseInt(itemToEdit.getElementsByTagName('td')[0].textContent);

                //Obtengo el usuario a editar
                let userToEdit = users.find( t => t.id === idItem );
                

                Swal.fire({
                    title: '¿Esta seguro que desea guardar los cambios?',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: `Guardar`,
                    denyButtonText: `No guardar`
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {

                        //Obtengo los datos editados del usuario
                        let usernameEdited = itemToEdit.getElementsByTagName('td')[1].textContent;
                        let fullnameEdited = itemToEdit.getElementsByTagName('td')[2].textContent;
                        let emailEdited = itemToEdit.getElementsByTagName('td')[3].textContent;

                        //Edito usuario en la base de datos
                        //1.Genero un objeto usuario
                        const usuario = {
                            id      : userToEdit.id,
                            username: usernameEdited,
                            fullname: fullnameEdited,
                            email   : emailEdited,
                            password: userToEdit.password
                        };

                        //2.Edito el usuario en el vector, y luego, actualizo la variable USERS
                        (async() => {
                            const res = await updateUser(usuario);
                            users = await getUsers();
                        })();

                        Swal.fire(`El usuario ${ usernameEdited.toUpperCase() } se ha editado correctamente`, '', 'success')
                    } else if (result.isDenied) {

                        //Vuelvo los valores del usuario a su estado anterior
                        itemToEdit.getElementsByTagName('td')[1].textContent = userToEdit.username;
                        itemToEdit.getElementsByTagName('td')[2].textContent = userToEdit.fullname;
                        itemToEdit.getElementsByTagName('td')[3].textContent = userToEdit.email;
                    }
                })
            })
            
        }
    }

    buttonUsuarios.addEventListener("click", function(e) {
        e.preventDefault();

        loadGrid();
    })

    buttonPreviusPage.addEventListener("click", function(e) {
        e.preventDefault();
        
        if (pageNumber > 1) {
            pageNumber --;
            posPage = pageNumber*pageSize+1
            paginate(posPage);
        }
        
    });
    
    buttonNextPage.addEventListener("click", function(e) {
        e.preventDefault();

        if (pageNumber < pageCont()) {
            pageNumber ++;
            posPage = pageNumber*pageSize-pageSize+1
            paginate(posPage);
        }
    
    });

})();