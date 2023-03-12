// login section
const username = "admin";
const password = "admin";

const loginForm = document.querySelector("#login form");
const loginInputs = document.querySelectorAll("#login input");
const inputsSection = document.querySelector("#inputs");

const loginInputValue = {};

loginInputs.forEach((input) => {
  input.addEventListener("change", function () {
    const { name: inputName, value } = this;
    loginInputValue[inputName] = value;
  });
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(loginInputValue);
  loginForm.style.display="none";
  inputsSection.style.display = "block";
});

// input section

const inputForm = document.querySelector("#inputs form");
const inputName = document.querySelectorAll("#inputs input");
const infoHeaders = document.querySelectorAll("#info h1");
const infoSection = document.querySelector("#info");

const inputValues = {};

inputName.forEach((input) => {
  input.addEventListener("change", function () {
    const { name: inputName, value } = this;
    inputValues[inputName] = value;
  });
});

// info section
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  inputForm.style.display="none";
  infoSection.style.display = "block";
  console.log(inputValues);
  infoHeaders.forEach((inputFields) => {
    inputFields.innerText += inputValues[inputFields.id];
  });
});
