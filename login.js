function SignupPage() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

function LoginPage() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

function Signup(){
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

function TodoPage(){
  window.location.href="todo.html";
}