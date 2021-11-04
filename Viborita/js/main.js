const container = document.getElementById("container");
const body = document.getElementsByTagName("body")[0];
//Devuleve la cantidad de columnas
const columnas = document.defaultView
  .getComputedStyle(container)
  .getPropertyValue("grid-template-columns")
  .split(" ").length;
//Devuelve la cantidad de casilleros
const limSuperior = document
  .querySelector("#container")
  .querySelectorAll("div").length;

let movAnterior;
let posSiguiente;
let direccion = 1;
let inGame = true;

let vSnake = [1, 0];
let posComida = 30;

let acumPuntos = 0; //Sole

container.children[posComida].classList.add("food");
container.children[1].classList.add("headSnake");
container.children[0].classList.add("bodySnake");

let alargarViborita = (cola) => {
  container.children[cola].classList.add("bodySnake");
  vSnake.push(cola);
};

let posAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//metodo sumarPuntos
let sumarPuntos = () => {
  // console.log('Entro a sumar puntos');
  let puntos = 10;
  acumPuntos = acumPuntos + puntos;
  document.getElementById("puntaje").value = acumPuntos;
  // console.log(acumPuntos);
};

let comer = () => {
  let nuevaPosComida;
  container.children[posComida].classList.toggle("food");

  do {
    nuevaPosComida = posAleatorio(0, limSuperior);
  } while (
    container.children[nuevaPosComida].classList.contains("headSnake") ||
    container.children[nuevaPosComida].classList.contains("bodySnake")
  );

  container.children[nuevaPosComida].classList.add("food");

  posComida = nuevaPosComida;
};

let movimiento = () => {
  let posCabeza;
  let parteCuerpo;
  let posActual;
  let movInicial = 1;
//       O ooooooooo
  if (direccion === 0) {
    movInicial = -columnas;
  } else if (direccion === 1) {
    movInicial = 1;
  } else if (direccion === 2) {
    movInicial = columnas;
  } else if (direccion === 3) {
    movInicial = -1
  }

  for (let i = 0; i < vSnake.length; i++) {
    if (i === 0) {
      posSiguiente = vSnake[i] + movInicial;
      posCabeza = posSiguiente;
      parteCuerpo = "headSnake";
      if (chocar(posCabeza)) break;
    } else parteCuerpo = "bodySnake";

    container.children[vSnake[i]].classList.toggle(parteCuerpo);
    container.children[posSiguiente].classList.add(parteCuerpo);
    posActual = vSnake[i];
    vSnake[i] = posSiguiente;
    posSiguiente = posActual;
  }

  if (posCabeza === posComida) {
    alargarViborita(posActual);
    comer();
    sumarPuntos();
  }
};

body.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowRight":
      if (direccion === 0 || direccion === 2) {
        direccion = 1;
        // movimiento(1);
        // movAnterior = e.key;
      }
      break;
    case "ArrowLeft":
      if (direccion === 0 || direccion === 2) {
        direccion = 3;
        // movimiento(-1);
        // movAnterior = e.key;
      }
      break;
    case "ArrowDown":
      if (direccion === 1 || direccion === 3) {
        direccion = 2;
        // movimiento(columnas);
        // movAnterior = e.key;
      }
      break;
    case "ArrowUp":
      if (direccion === 1 || direccion === 3) {
        direccion = 0;
        // movimiento(-columnas);
        // movAnterior = e.key;
      }
      break;
    default:
      break;
  }
});

const reiniciar = () => {
  for (i of vSnake) {
    container.children[i].classList.remove("headSnake");
    container.children[i].classList.remove("bodySnake");
    //guarda puntaje de score alcanzado
    let totalPuntos = document.getElementById("puntaje").value;
    //FALTA validar que grabe en la base solo si, el totalPuntos supera a lo que esta en la base
    //para ese usuario
    console.log(totalPuntos);
    //reinicia a 0
    acumPuntos = 0;
    document.getElementById("puntaje").value = acumPuntos;
  }
};

const chocar = (head) => {
  if (container.children[head].classList.contains("bodySnake")) {
    //alert("Game Over!");
    Swal.fire({
      title: "<strong>¡PERDISTE!</strong>",
      imageUrl:
        "https://media.istockphoto.com/vectors/rattlesnake-with-dizzy-face-vector-id821741746?b=1&k=6&m=821741746&s=170667a&w=0&h=asBMqYOVHC2mkz9YYRUn8ISRE1CqIj7zphO3kvu0uuc=",
      imageHeight: 200,
      imageAlt: "Perdiste",
      text: "Volve a intentarlo", // puntos alcanzados y mostrar totalPuntos!!
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    });
    reiniciar();
    container.children[1].classList.add("headSnake");
    container.children[0].classList.add("bodySnake");
    container.children[posComida].classList.add("food");
    vSnake = [1, 0];

    return true;
  }
};

window.setInterval(() => {
  if (inGame) {
    movimiento();
  }
}, 200);