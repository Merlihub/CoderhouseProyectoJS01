/*Ingresar un acorde para obtener las notas que lo componen y hacerlo sonar*/

/*------------Notas--------------*/

/*Array*/
var notas = [
  "c" /*0*/,
  "csharp" /*1*/,
  "d" /*2*/,
  "dsharp" /*3*/,
  "e" /*4*/,
  "f" /*5*/,
  "fsharp" /*6*/,
  "g" /*7*/,
  "gsharp" /*8*/,
  "a" /*9*/,
  "asharp" /*10*/,
  "b" /*11*/,
];

/*-------Acordes-------- */

/*Declaro variables de los acordes*/

var CMaj7 = new Acorde(notas[0], notas[4], notas[7], notas[11]);
var Dm7 = new Acorde(notas[2], notas[5], notas[9], notas[0]);
var Em7 = new Acorde(notas[4], notas[7], notas[11], notas[2]);
var FMaj7 = new Acorde(notas[5], notas[9], notas[0], notas[4]);
var G7 = new Acorde(notas[7], notas[11], notas[2], notas[5]);
var Am7 = new Acorde(notas[9], notas[0], notas[4], notas[7]);
var Bm7b5 = new Acorde(notas[11], notas[2], notas[5], notas[9]);

/*---------Sonido-----------*/

var cajaAcorde = document.getElementById("cajaAcorde");

const reproducirSonido = (sonido) => {
  let audio = new Audio(`sound/${sonido}.mp3`);
  audio.play();
};

function playCMaj7() {
  var audio = new Audio("Sound/CMaj7.mp3");
  audio.play();
}

function playDm7() {
  var audio = new Audio("Sound/Dm7.mp3");
  audio.play();
}

function playEm7() {
  var audio = new Audio("Sound/Em7.mp3");
  audio.play();
}

function playFMaj7() {
  var audio = new Audio("Sound/FMaj7.mp3");
  audio.play();
}

function playG7() {
  var audio = new Audio("Sound/G7.mp3");
  audio.play();
}

function playAm7() {
  var audio = new Audio("Sound/Am7.mp3");
  audio.play();
}

function playBm7b5() {
  var audio = new Audio("Sound/Bm7b5.mp3");
  audio.play();
}

/*----------Ingresar acorde--------------*/

/*Hacer sonar un acorde en base a lo que meta en el input*/

function inputAcorde() {
  var value = document.getElementById("inputAcorde").value;
  switch (value) {
    case "CMaj7":
      reproducirSonido(value);
      // playCMaj7();
      contenidoCMaj7();
      break;
    case "Dm7":
      reproducirSonido(value);
      // playDm7();
      contenidoDm7();
      break;
    case "Em7":
      // playEm7();
      reproducirSonido(value);
      contenidoEm7();
      break;
    case "FMaj7":
      playFMaj7();
      contenidoFMaj7();
      break;
    case "G7":
      reproducirSonido(value);
      // playG7();
      contenidoG7();
      break;
    case "Am7":
      playAm7();
      contenidoAm7();
      break;
    case "Bm7b5":
      playBm7b5();
      contenidoBm7b5();
      break;
    default:
      alert("Todavía no ingresé este acorde en el sistema.");
      break;
  }
}

/*Llamados al DOM para mostrar u ocultar notas que componen los acordes
  Además, usar Ajax para cargar diferentes archivos html
*/

const contenidoCMaj7 = () => {
  $("#contenidodelacorde").empty();
  $("#contenidodelacorde").append(
    `Las notas que componen el acorde son: ${CMaj7.Tonica} ${CMaj7.Tercera} ${CMaj7.Quinta} ${CMaj7.Septima}`
  );
  document.body.style.backgroundImage = "url(Images/cool-background2.png)";
  $("#result").load("CMaj7.html");
};

const contenidoDm7 = () => {
  $("#contenidodelacorde").empty();
  $("#contenidodelacorde").append(
    `Las notas que componen el acorde son: ${Dm7.Tonica} ${Dm7.Tercera} ${Dm7.Quinta} ${Dm7.Septima}`
  );
  document.body.style.backgroundImage = "url(Images/cool-background3.png)";
  $("#result").load("Dm7.html");
};

const contenidoEm7 = () => {
  $("#contenidodelacorde").empty();
  $("#contenidodelacorde").append(
    `Las notas que componen el acorde son: ${Em7.Tonica} ${Em7.Tercera} ${Em7.Quinta} ${Em7.Septima}`
  );
  document.body.style.backgroundImage = "url(Images/cool-background4.png)";
  $("#result").load("Em7.html");
};

const contenidoFMaj7 = () => {
  $("#contenidodelacorde").empty();
  $("#contenidodelacorde").append(
    `Las notas que componen el acorde son: ${FMaj7.Tonica} ${FMaj7.Tercera} ${FMaj7.Quinta} ${FMaj7.Septima}`
  );
  document.body.style.backgroundImage = "url(Images/cool-background5.png)";

  $("#result").load("FMaj7.html");
};

const contenidoG7 = () => {
  $("#contenidodelacorde").empty();
  $("#contenidodelacorde").append(
    `Las notas que componen el acorde son: ${G7.Tonica} ${G7.Tercera} ${G7.Quinta} ${G7.Septima}`
  );
  document.body.style.backgroundImage = "url(Images/cool-background6.png)";

  $("#result").load("G7.html");
};

const contenidoAm7 = () => {
  $("#contenidodelacorde").empty();
  $("#contenidodelacorde").append(
    `Las notas que componen el acorde son: ${Am7.Tonica} ${Am7.Tercera} ${Am7.Quinta} ${Am7.Septima}`
  );
  document.body.style.backgroundImage = "url(Images/cool-background7.png)";

  $("#result").load("Am7.html");
};

const contenidoBm7b5 = () => {
  $("#contenidodelacorde").empty();
  $("#contenidodelacorde").append(
    `Las notas que componen el acorde son: ${Bm7b5.Tonica} ${Bm7b5.Tercera} ${Bm7b5.Quinta} ${Bm7b5.Septima}`
  );
  document.body.style.backgroundImage = "url(Images/cool-background8.png)";

  $("#result").load("Bm7b5.html");
};

$("document").ready(() => {
  // let boton = document.getElementById('elBoton');
  // boton.addEventListener('click', inputAcorde );
  let $boton = $("#elBoton");
  $boton.click(inputAcorde);
});

/*---------Piano------------*/

function play() {
  var audio = new Audio("Sound/C.mp3");
  audio.play();
}
function playd() {
  var audio = new Audio("Sound/D.mp3");
  audio.play();
}
function playg() {
  var audio = new Audio("Sound/G.mp3");
  audio.play();
}
function playa() {
  var audio = new Audio("Sound/A.mp3");
  audio.play();
}
function playdo() {
  var audio = new Audio("Sound/do.mp3");
  audio.play();
}
function playre() {
  var audio = new Audio("Sound/re.mp3");
  audio.play();
}
function playmi() {
  var audio = new Audio("Sound/mi.mp3");
  audio.play();
}
function playfa() {
  var audio = new Audio("Sound/fa.mp3");
  audio.play();
}
function playsol() {
  var audio = new Audio("Sound/sol.mp3");
  audio.play();
}
function playla() {
  var audio = new Audio("Sound/la.mp3");
  audio.play();
}
function playsi() {
  var audio = new Audio("Sound/si.mp3");
  audio.play();
}
function playdosharp() {
  var audio = new Audio("Sound/dosharp.mp3");
  audio.play();
}
function playresharp() {
  var audio = new Audio("Sound/resharp.mp3");
  audio.play();
}
function playfasharp() {
  var audio = new Audio("Sound/fasharp.mp3");
  audio.play();
}
function playsolsharp() {
  var audio = new Audio("Sound/solsharp.mp3");
  audio.play();
}
function playlasharp() {
  var audio = new Audio("Sound/lasharp.mp3");
  audio.play();
}
