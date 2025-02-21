import romano from "./romano";

const first = document.querySelector("#numero");
const form = document.querySelector("#romano-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + romano(firstNumber) + "</p>";
});
