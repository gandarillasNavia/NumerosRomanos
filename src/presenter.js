import romano from "./romano.js";

const first = document.querySelector("#numero");
const form = document.querySelector("#convertir-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.textContent = romano(firstNumber);
});
