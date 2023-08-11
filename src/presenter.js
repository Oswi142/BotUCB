import saludar from "./saludador.js";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#saludo-div");
const name = document.querySelector("#nombre");
const edad = document.querySelector("#edad");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + saludar(name.value,edad.value) + "</p>";
});
