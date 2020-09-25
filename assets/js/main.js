//Navbar

let header = $(`
  <nav id="navbar">
  <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><img src="./assets/images/logo.png"></a>
      <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
              class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
          <li><a class="white-text" href="index.html">Home</a></li>
          <li><a class="white-text" href="#about-intro">About</a></li>
          <li><a class="white-text" href="#team">Team</a></li>
          <li><a class="white-text" href="#contact">Contact</a></li>
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
  <div>Made with ❤️ in India for the students of the world.</div>
</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//sticky navbar

window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

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

/* Contributor section */

const contributor = document.querySelector(".contributor");
const contributorsection = [
  {
    title: "Adyasha",
    image: "assets/images/contributors/1.jpeg",
    githublink: "https://github.com/Adyasha8105",
  },
  {
    title: "Harshita",
    image: "assets/images/contributors/23.jpg",
    githublink: "https://github.com/mharshita",
  },
  {
    title: "Ayushi",
    image: "assets/images/contributors/2.jpg",
    githublink: "https://github.com/AyuSoni25",
  },
  {
    title: "Himanshu",
    image: "assets/images/contributors/3.jpg",
    githublink: "https://github.com/himanshujaidka",
  },
  {
    title: "Sameer",
    image: "assets/images/contributors/4.jpg",
    githublink: "https://github.com/sameersrivastava13",
  },
  {
    title: "Anurag",
    image: "assets/images/contributors/5.jpg",
    githublink: "https://github.com/eagleanurag",
  },
  {
    title: "Srishti",
    image: "assets/images/contributors/6.png",
    githublink: "https://github.com/srishtimaggo15",
  },
  {
    title: "Prashant",
    image: "assets/images/contributors/7.jpg",
    githublink: "https://github.com/imPGupta",
  },
  {
    title: "Nikita",
    image: "assets/images/contributors/8.png",
    githublink: "https://github.com/nikita-1801",
  },
  {
    title: "Rutuja",
    image: "assets/images/contributors/9.jpg",
    githublink: "https://github.com/rutujadhanawade",
  },
  {
    title: "Ritik",
    image: "assets/images/contributors/11.png",
    githublink: "https://github.com/ritiksoni00",
  },
  {
    title: "Ejkot",
    image: "assets/images/contributors/12.jpg",
    githublink: "https://github.com/EkjotKaur",
  },
  {
    title: "Bhavya",
    image: "assets/images/contributors/13.jpg",
    githublink: "https://github.com/Bhavya-Sehgal",
  },
  {
    title: "Raksha",
    image: "assets/images/contributors/10.png",
    githublink: "https://github.com/raksha009",
  },
  {
    title: "Aniruddh",
    image: "assets/images/contributors/14.png",
    githublink: "https://github.com/Aniruddhmuley2001",
  },
  {
    title: "Shudhanshu",
    image: "assets/images/contributors/15.jpg",
    githublink: "https://github.com/shudhanshu03",
  },
  {
    title: "Shilpe",
    image: "assets/images/contributors/16.jpg",
    githublink: "https://github.com/shilpe26",
  },
  {
    title: "Debanshu",
    image: "assets/images/contributors/17.jpg",
    githublink: "https://github.com/debanshu08",
  },
  {
    title: "Varun",
    image: "assets/images/contributors/18.jpg",
    githublink: "https://github.com/Varun-28",
  },
  {
    title: "Aman",
    image: "assets/images/contributors/19.jpg",
    githublink: "https://github.com/thealphacod3r",
  },
  {
    title: "Avisek",
    image: "assets/images/contributors/20.jpg",
    githublink: "https://github.com/shawavisek35",
  },
  {
    title: "Sonali",
    image: "assets/images/contributors/21.jpg",
    githublink: "https://github.com/Sonali12920",
  },
  {
    title: "Varun",
    image: "assets/images/contributors/22.jpg",
    githublink: "https://github.com/varunvj1",
  },
];

const showCards = () => {
  let output = "";
  contributorsection.forEach(
    ({ title, image, githublink }) =>
      (output += `       
     <figure class="position-relative display-inline-block va-top text-center">
      <img src="${image}" class="grid-wd-100 va-top">
       <figcaption class="position-absolute grid-wd-100 va-top pad font-small futura">
        <div class="text">${title} <a href="${githublink}" class="social-icon fa fa-github"></a></div>
       </figcaption>
     </figure>`)
  );
  contributor.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
