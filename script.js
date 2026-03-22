function entrar() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("contenido").style.display = "block";
}

// Carrusel
let index = 0;
let fotos = document.querySelectorAll(".carrusel img");

window.onload = () => {
  fotos[0].classList.add("active");
}

function cambiarFoto() {
  fotos[index].classList.remove("active");
  index = (index + 1) % fotos.length;
  fotos[index].classList.add("active");
}

// Carta
function abrirCarta(carta) {
  carta.querySelector(".contenido-carta").style.display = "block";
}

// Declaración
function mostrar() {
  document.getElementById("declaracion").style.display = "block";
}

function si() {
  document.getElementById("respuesta").innerHTML =
    "🥰 Ahora sí oficialmente… eres mi novia 💙!!";
}

// Botón NO que huye 😏
document.addEventListener("mousemove", function(e) {
  let btn = document.getElementById("no");

  let rect = btn.getBoundingClientRect();

  let distancia = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );

  if (distancia < 100) {
    let maxX = window.innerWidth - btn.offsetWidth;
    let maxY = window.innerHeight - btn.offsetHeight;

    btn.style.position = "fixed";
    btn.style.left = Math.random() * maxX + "px";
    btn.style.top = Math.random() * maxY + "px";
  }
});
// Corazones animados
setInterval(() => {
  let corazon = document.createElement("div");
  corazon.innerHTML = "💙";
  corazon.classList.add("corazon");
  corazon.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(corazon);

  setTimeout(() => corazon.remove(), 5000);
}, 300);