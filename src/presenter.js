import saludar from "./saludador.js";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#saludo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + saludar() + "</p>";
});
