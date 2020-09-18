//Navbar

let header = $(`
  <nav>
  <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><img src="./assets/images/logo.png"></a>
      <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
              class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
          <li><a class="white-text" href="index.html">Home</a></li>
          <li><a class="white-text" href="index.html">About</a></li>
          <li><a class="white-text" href="index.html">Team</a></li>
          <li><a class="white-text" href="index.html">Contact</a></li>
          <li><a class="white-text" href="index.html">Editor</a></li>
      </ul>
  </div>
  </nav>
  
  <!--Side Nav Bar -->
  <ul class="sidenav" id="mobile-demo">
  <li><a href="index.html">Home</a></li>
  <li><a href="index.html">About</a></li>
  <li><a href="#mentor-container">Team</a></li>
  <li><a href="index.html">Contact</a></li>
  <li><a href="index.html">Editor</a></li>
  </ul>`);

let footer = $(`
<footer>
<svg viewBox="0 0 120 28">
 <defs> 
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
      <xfeBlend in="SourceGraphic" in2="goo" />
    </filter>
     <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
  </defs> 

   <use id="wave3" class="wave" xlink:href="#wave" x="0" y="-2" ></use> 
   <use id="wave2" class="wave" xlink:href="#wave" x="0" y="0" ></use>
 
 
  <g class="gooeff" filter="url(#goo)">
  <circle class="drop drop1" cx="20" cy="2" r="8.8"  />
  <circle class="drop drop2" cx="25" cy="2.5" r="7.5"  />
  <circle class="drop drop3" cx="16" cy="2.8" r="9.2"  />
  <circle class="drop drop4" cx="18" cy="2" r="8.8"  />
  <circle class="drop drop5" cx="22" cy="2.5" r="7.5"  />
  <circle class="drop drop6" cx="26" cy="2.8" r="9.2"  />
  <circle class="drop drop1" cx="5" cy="4.4" r="8.8"  />
  <circle class="drop drop2" cx="5" cy="4.1" r="7.5"  />
  <circle class="drop drop3" cx="8" cy="3.8" r="9.2"  />
  <circle class="drop drop4" cx="3" cy="4.4" r="8.8"  />
  <circle class="drop drop5" cx="7" cy="4.1" r="7.5"  />
  <circle class="drop drop6" cx="10" cy="4.3" r="9.2"  />
  
  <circle class="drop drop1" cx="1.2" cy="5.4" r="8.8"  />
  <circle class="drop drop2" cx="5.2" cy="5.1" r="7.5"  />
  <circle class="drop drop3" cx="10.2" cy="5.3" r="9.2"  />
    <circle class="drop drop4" cx="3.2" cy="5.4" r="8.8"  />
  <circle class="drop drop5" cx="14.2" cy="5.1" r="7.5"  />
  <circle class="drop drop6" cx="17.2" cy="4.8" r="9.2"  />
  <use id="wave1" class="wave" xlink:href="#wave" x="0" y="1" />
 </g>  
</svg>

  <div>Made with ❤️ in India for the students of the world.</div>
</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

// Map added

function initMap() {
  var uluru = { lat: 28.501859, lng: 77.41032 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
}

// Captcha Script

function checkform(theform) {
  var why = "";

  if (theform.CaptchaInput.value == "") {
    why += "- Please Enter CAPTCHA Code.\n";
  }
  if (theform.CaptchaInput.value != "") {
    if (ValidCaptcha(theform.CaptchaInput.value) == false) {
      why += "- The CAPTCHA Code Does Not Match.\n";
    }
  }
  if (why != "") {
    alert(why);
    return false;
  }
}

var a = Math.ceil(Math.random() * 9) + "";
var b = Math.ceil(Math.random() * 9) + "";
var c = Math.ceil(Math.random() * 9) + "";
var d = Math.ceil(Math.random() * 9) + "";
var e = Math.ceil(Math.random() * 9) + "";

var code = a + b + c + d + e;
document.getElementById("txtCaptcha").value = code;
document.getElementById("CaptchaDiv").innerHTML = code;

// Validate input against the generated number
function ValidCaptcha() {
  var str1 = removeSpaces(document.getElementById("txtCaptcha").value);
  var str2 = removeSpaces(document.getElementById("CaptchaInput").value);
  if (str1 == str2) {
    return true;
  } else {
    return false;
  }
}

// Remove the spaces from the entered and generated code
function removeSpaces(string) {
  return string.split(" ").join("");
}
