// Navigation Bar Declaration
let header = $(`
<nav class="navbar navbar-expand-lg navbar-light nav1" style="z-index: 9999" id="navbar">
  <a class="navbar-brand brand-logo" href="#"><img src="./assets/images/logo.png"></a>
  <button class="navbar-toggler res-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <b><a class="nav-link text-white menu-one" href="index.html">Home</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link text-white" href="index.html#about-intro">About</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link text-white" href="index.html#team">Team</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link text-white" href="index.html#contact">Contact</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link text-white" href="editor.html">Editor</a></b>
      </li>
    </ul>
  </div>
</nav>`);
// Footer Declaration
let footer = $(`
<footer>
  <div>Made with ❤️ in India for the students of the world.</div>
</footer>`);
// Dynamically loading navigation bar and footer
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

const projMaintainers = document.querySelector(".projectMaintainers");
//Data for Project Maintainers
const maintainerSection = [
  {
    image: "assets/images/smaranjit_ghose.png",
    name: "Smaranjit Ghose",
    title: "Lead Developer",
    github: "./https://github.com/smaranjitghose",
    linkedin: "https://www.linkedin.com/in/smaranjitghose/",
    imgclass: "image-1"
  },
  {
    image: "assets/images/anush_bhatia.png",
    name: "Anush Bhatia",
    title: "Lead Developer",
    github: "https://github.com/anushbhatia",
    linkedin: "https://www.linkedin.com/in/anushbhatia/",
    imgclass: "image-2"
  }
];

const maintainerInfo = () => {
  let output = "";
  maintainerSection.forEach(
    ({ title, image, github, linkedin, name, imgclass}) =>
      (output += `    
      <div class="${imgclass} d-flex d-self-center ml-md-5">
      <div class="profile-container">
       <div class="profile-wrapper">
         <div class="profile-card">
          <img src="${image}" alt="profile pics"> 
          <h4>${name}</h4>
          <h5>${title}</h5>
          <div class="icons">
            <a href="${github}" class="fa fa-github"></a>
            <a href="${linkedin}" class="fa fa-linkedin"></a>
          </div> 
         </div>
        </div>
      </div>
      </div>
    `)
  );
  projMaintainers.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", maintainerInfo);


const contributor = document.querySelector(".contributor");
// Data for Contributors: name, profile picture, github url
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
    image: "assets/images/contributors/21.jpg",
    githublink: "https://github.com/shawavisek35",
  },
  {
    title: "Sonali",
    image: "assets/images/contributors/22.jpg",
    githublink: "https://github.com/Sonali12920",
  },
  {
    title: "Varun",
    image: "assets/images/contributors/20.jpg",
    githublink: "https://github.com/varunvj1",
  },
];

const showCards = () => {
  let output = "";
  contributorsection.forEach(
    ({ title, image, githublink }) =>
      (output += `       
     <figure class="position-relative d-inline-block text-center ml-2 mb-4 grid-wd-100">
      <img src="${image}" class="grid-wd-100">
       <figcaption class="position-absolute grid-wd-100 va-top pad font-small futura">
        <div class="text">${title} <a href="${githublink}" class="social-icon fa fa-github"></a></div>
       </figcaption>
     </figure>`)
  );
  contributor.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
