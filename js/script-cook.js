
function getCookie(cName) {
    let name = cName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cName, cValue, expDays){
    let name = encodeURIComponent(cName);
    let value = encodeURIComponent(cValue);
    let day = new Date();
    day.setTime(day.getTime() + expDays*24*60*60*1000);
    let expires = `expires= ${day.toDateString()}`

    document.cookie = `${name}=${value};${expires}`;
};

function checkCookie(cName) {
    let user = getCookie(cName);
    if (user != "") {
     alert("Bienvenido " + user);
    } else {
      let createUser = prompt("Por favor ingrese su nombre:", "");
      if (createUser != "" && createUser != null) {
        setCookie(cName, createUser, 1);
      }
    }
}

function darkT(){
  
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.getElementById("caja").style.backgroundColor = "rgb(41, 40, 42)";
  document.getElementById("enlace").style.backgroundColor = "rgb(134, 100, 246)";
  document.getElementById("theme").innerHTML = '<i class="fas fa-toggle-on fa-2x"></i>';
}

function whiteT(){
  document.body.style.backgroundColor = "#eee";
  document.body.style.color = "black";
  document.getElementById("caja").style.backgroundColor = "#fff";
  document.getElementById("enlace").style.backgroundColor = "rgb(39, 126, 240)";
  document.getElementById("theme").innerHTML = '<i class="fas fa-toggle-off fa-2x"></i>';
}

function rememberTheme(){
  let theme = getCookie("theme");
    if(theme === ""){
       return;
      }else if(theme === "white") {
       return whiteT();
      }else{
        return darkT();

      }
}

function changeTheme(){ 
  let theme = getCookie("theme");
  switch (theme) {
    
    case "":
      let tema = "dark";
      setCookie("theme", tema, 1);
      return darkT();
    case "dark":
      let white = "white";
      setCookie("theme", white, 1);
      return whiteT();
    case "white":
      let dark = "dark";
      setCookie("theme", dark, 1);
      return darkT();
    
    default:
      break;
  }
}


  



checkCookie("usuario");





