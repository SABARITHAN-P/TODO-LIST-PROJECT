document.getElementById("email_password").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      TodoPage();
    }
  });
  function SignupPage() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  }

  function LoginPage() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }

  function Signup() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }

  function TodoPage() {
    var email = document.getElementById("email_address").value;
    var password = document.getElementById("email_password").value;

    if (email === "sabarithan@gmail.com" && password === "sab2005") {
      window.location.href = "todo.html";
    } else {
      document.getElementById("incorrect").style.display = "block";
    }
  }
