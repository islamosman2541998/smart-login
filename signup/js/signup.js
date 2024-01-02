var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var signBtn = document.getElementById("signBtn");
var message = document.getElementById("message");

var users = [];

if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
}

function signUp() {
  var obj = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };
  if (checkInputs() == true) {
    alertMessage("all inputs is required", "red");
  } else {
    if (checkEmailExist() == true) {
      alertMessage("Email already Exist", "red");
    } else {
      users.push(obj);
     

      localStorage.setItem("user", JSON.stringify(users));
      clrInputs();
      alertMessage("success", "green");
    }
  }
}

function alertMessage(text, color) {
  message.classList.remove("d-none");
  message.innerHTML = text;
  message.style.color = color;
}

function clrInputs() {
  inputName.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
}

function checkInputs() {
  if (
    inputName.value == "" ||
    inputEmail.value == "" ||
    inputPassword.value == ""
  )
    return true;
  else return false;
}

function checkEmailExist() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == inputEmail.value) return true;
  }
}

signBtn.addEventListener("click", signUp);
