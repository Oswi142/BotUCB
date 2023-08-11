import saludar from "./saludador.js";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#saludo-div");
const name = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const genre = document.querySelector("#genero");
const leng = document.querySelector("#idioma");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + saludar(name.value,edad.value,genre.value,leng.value) + "</p>";
});
