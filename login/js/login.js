var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

var loginBtn = document.getElementById("loginBtn");
var loginMessage = document.getElementById("loginMessage");
var users = [];

if(localStorage.getItem("user") != null);{
    users = JSON.parse(localStorage.getItem("user"));
}

function logIn (){
    
if(checkInputs()== true){
    alertMessage("all inputs required", "red")

}else{
    if(checkEmailPassword()== true){
        window.location.href = "/home/home.html";

    }
else{
    alertMessage("Email or Password incorrect", "red")

}

}


    


}

function checkEmailPassword(){
    for ( var i=0; i<users.length;i++){
        if(users[i].email == loginEmail.value && users[i].password == loginPassword.value ) {
           localStorage.setItem("userName" , users[i].name)
            return true ;
        }
    }
}

function alertMessage(text, color) {
    loginMessage.classList.remove("d-none");
    loginMessage.innerHTML = text;
    loginMessage.style.color = color;
  }

  function checkInputs() {
    if (
      
      loginEmail.value == "" ||
      loginPassword.value == ""
    )
      return true;
    else return false;
  }

  loginBtn.addEventListener("click", logIn);