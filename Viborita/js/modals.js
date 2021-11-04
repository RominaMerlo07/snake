var btnCloseLogin = document.getElementById("close"),
  btnLogin = document.getElementById("login"),
  btnUsuario = document.getElementById("create-user"),
  btnCloseUsuario = document.getElementById("closeUsuario"),
  btnIngresar = document.getElementById("ingresar"),
  btnUsuarios = document.getElementById("btnUsuarios"),
  btnCloseUsuarios = document.getElementById("closeUsuarios");

function showModal(modal) {
  switch (modal) {
    case "login":
      $(".container-modal").addClass("show");
      $(".modal").addClass("show");
      break;
    case "crearUsuario":
      $(".container-usuario").addClass("show");
      $(".mod-usuario").addClass("show");
      break;
    case "usuarios":
      $(".container-usuarios").addClass("show");
      // $('.usuarios').addClass('show');
      break;
  }
}

function downShowModal(modal) {
  switch (modal) {
    case "login":
      $(".container-modal").removeClass("show");
      $(".modal").removeClass("show");
      break;
    case "crearUsuario":
      $(".container-usuario").removeClass("show");
      $(".mod-usuario").removeClass("show");
      break;
    case "usuarios":
      $(".container-usuarios").removeClass("show");
      // $('.usuarios').addClass('show');
      break;
  }
}

function showSnake() {
  $(".container-flex").addClass("showSnake");
}

function showOpciones() {
  $(".btnUsuarios").addClass("show");
  $(".score").addClass("show");
  $(".puntaje").addClass("show");
}

btnCloseLogin.addEventListener("click", function (e) {
  e.preventDefault();
  downShowModal("login");
});

btnCloseUsuario.addEventListener("click", function (e) {
  e.preventDefault();
  downShowModal("crearUsuario");
});

btnCloseUsuarios.addEventListener("click", function (e) {
  e.preventDefault();
  downShowModal("usuarios");
});

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  showModal("login");
});

btnUsuario.addEventListener("click", function (e) {
  e.preventDefault();
  showModal("crearUsuario");
});
//$(".btnLogin").button().on("click", showModal);

btnUsuarios.addEventListener("click", function (e) {
  e.preventDefault();
  showModal("usuarios");
});

export { showModal, downShowModal, showSnake, showOpciones };
