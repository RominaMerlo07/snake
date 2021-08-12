
let users = [{
    id: 1,
    username: 'adri',
    fullname: 'Adrian Ojeda',
    email: 'aojeda@claro.com.ar',
    password: '123'
},
{
    id: 2,
    username: 'francotiss',
    fullname: 'Franco Tissera',
    email: 'franco.tissera@claro.com.ar',
    password: '12366'
},
{
    id: 3,
    username: 'paco',
    fullname: 'Francisco Ponssa',
    email: 'francisco.ponssa@claro.com.ar',
    password: '12366'
},
{
    id: 4,
    username: 'cele',
    fullname: 'Celeste Vocos',
    email: 'victoria.vocos@claro.com.ar',
    password: '12366'
},
{
    id: 5,
    username: 'ladolo',
    fullname: 'Dolores Suarez',
    email: 'dolores.suarez@claro.com.ar',
    password: '12366'
},
{
    id: 6,
    username: 'shomi',
    fullname: 'Romina Merlo',
    email: 'romina.merlo@claro.com.ar',
    password: '12366'
},
{
    id: 7,
    username: 'Sole',
    fullname: 'Soledad Cuello',
    email: 'soledad.cuello@claro.com.ar',
    password: '12366'
},
{
    id: 8,
    username: 'gaby',
    fullname: 'Gabriela Rincon',
    email: 'franco.tissera@claro.com.ar',
    password: '12366'
}
];

let pageSize = 4; 
let pageNumber = 1;
let pageCont = Math.ceil(users.length/pageSize);

let buttonPreviusPage = document.getElementById('previusPage');
let buttonNextPage = document.getElementById('nextPage');

//4*1 - 4
//4*2 - 4
//4*3 - 4 

console.log('Tamaño de la página: '+pageSize);
console.log('Cantidad de páginas: '+pageCont);
console.log('Total de registros: '+users.length);

let paginate = () => {

    for (i = pageSize*pageNumber-pageSize; i < pageSize*pageNumber; i++) {
        
        //Obtengo el elemento tbody
        let tbody = document.getElementById('busqueda');

        //Creo el elemento tr
        let tr = document.createElement("tr");

        //Creo los elementos td para cada columna
        let tdUsername = document.createElement("td");
        let tdNombre = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdAcciones = document.createElement("td");

        //Creo los elementos i para el td de las acciones
        let iEdit = document.createElement("i");
        let iDelete = document.createElement("i");

        //Agrego el id actions para td de las acciones
        tdAcciones.id = "actions";

        //Agrego las clases para el editar y eliminar
        iEdit.className = "fas fa-edit";
        iDelete.className = "fas fa-trash-alt";

        //Agrego el contenido de cada td
        tdUsername.textContent = users[i].username;
        tdNombre.textContent = users[i].fullname;
        tdEmail.textContent = users[i].email;

        //Inserto el elemento tr dentro de tbody
        tbody.appendChild(tr);

        //Inserto el elemento td de username dentro de tr
        tr.appendChild(tdUsername);

        //Añado el resto de los elementos td
        tdUsername.insertAdjacentElement("afterend", tdNombre);
        tdNombre.insertAdjacentElement("afterend", tdEmail);
        tdEmail.insertAdjacentElement("afterend", tdAcciones);

        //Inserto el elemento i del edit dentro de td
        tdAcciones.appendChild(iEdit);
        iEdit.insertAdjacentElement("afterend", iDelete);
        
    }
}

let nextPage = () => {
    pageNumber ++;
    paginate();
}

let previusPage = () => {
    //pageNumber --;
    paginate();
}

window.onload = paginate();


//buttonPreviusPage.addEventListener("click", previusPage());
//buttonNextPage.addEventListener("click", nextPage());
