var Signin = document.getElementById("signin");
var Signup = document.getElementById("signup");

var Email = localStorage.getItem("email");
var Password = localStorage.getItem("password");

function check() {
  var Email1 = localStorage.getItem("email");
  var Password1 = localStorage.getItem("password");

   if(Email1){
    Signup.style.display = "none";
    Signin.style.display = "block";
    // console.log("ishlayapti");
  }
  else{
    Signup.style.display = "block";
    Signin.style.display = "none";
  }
}

function SignUp() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var job = document.getElementById("job").value;

  localStorage.setItem("email",email);
  localStorage.setItem("password",password);
  localStorage.setItem("name",name);
  localStorage.setItem("job",job);

  check()
 }


function SignIn() {
  var Email2 = localStorage.getItem("email");
  var Password2 = localStorage.getItem("password");
  var email1 = document.getElementById("email1").value;
  var password1 = document.getElementById("password1").value;
  var H1false = document.getElementById("h1false");

  if(email1=== Email2 && password1===Password2){
    window.location.href = "ind.html"
    // window.open("./ind.html")
  }
  else{
    // H1false.innerHTML = "Login yoki parol xato!";
    alert("Login yoki parol xato")
  }

}
   check()


   function Change() {
    var RangInput = document.getElementById("rang").value;
    var Cent = document.getElementById("cent")
    Cent.style.color = RangInput;
  }

  function Shax() {
    var a = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var c = Math.floor(Math.random() * 255);

    document.querySelector("body").style.backgroundColor = `rgb(${a},${b},${c})`
    document.querySelector("body").style.backgroundImage = `url('http://unsplash.it/g/${1000+a}/800?&gravity=center')`
    document.querySelector("body").style.backgroundSize = "cover"
    document.querySelector("body").style.backgroundRepeat = "no-repeat"
  }
      setInterval(Shax,4000)