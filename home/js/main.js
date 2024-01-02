var welcomeMessage = document.getElementById("welcomeMessage");
var logOutBtn = document.getElementById("logOutBtn");

if(localStorage.getItem("userName") != null){
    welcomeMessage.innerHTML = `Welcome ${localStorage.getItem("userName")}`
}

function logOut(){
    window.location.href ="/login/index.html"
    localStorage.removeItem("userName");
}

logOutBtn.addEventListener("click", logOut )