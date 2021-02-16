// Navigation Bar Declaration
let header = $(`
<nav class="navbar navbar-expand-lg navbar-light nav1" style="z-index: 9999;margin-bottom:5px; .text-grey:hover{color: #adadad; }" id="navbar">
  <a class="navbar-brand brand-logo" style="padding-top: 0; padding-bottom: 0" href="#"><img src="./assets/images/logo.webp"></a>
  <button class="navbar-toggler res-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <b><a class="nav-link" href="index.html">Home</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link" href="index.html#about-intro">About</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link" href="index.html#team">Team</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link" href="index.html#contact">Contact</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link" href="index.html#Support">Support Us</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link" href="editor.html">Editor</a></b>
      </li>
      <li class="nav-item active">
      <b><a class="nav-link" href="painter.html">Paint</a></b>
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
bodyElement.append(footer);
let navElement = $(`.nav-back`);
navElement.append(header);


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

// Remove the spaces from the entered and generated code
function removeSpaces(string) {
  return string.split(" ").join("");
}

const projMaintainers = document.querySelector(".projectMaintainers");
//Data for Project Maintainers
const maintainerSection = [
  {
    image: "assets/images/team/smaranjit_ghose.png",
    name: "Smaranjit Ghose",
    title: "Lead Developer",
    github: "https://github.com/smaranjitghose",
    linkedin: "https://www.linkedin.com/in/smaranjitghose/",
    imgclass: "image-1"
  },
  {
    image: "assets/images/team/anush_bhatia.png",
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
    ({ title, image, github, linkedin, name, imgclass }) =>
      (output += `    
      <div class="${imgclass} col-md-6 centeralign">
      <div class="profile-container">
       <div class="profile-wrapper">
         <div class="profile-card">
          <img srcset="${image} 1x, ${image} 2x" src="${image}" alt="profile pics"> 
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
    title: "Paras",
    image: "assets/images/contributors/0.jpg",
    githublink: "https://github.com/paraschhugani",
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
  {
    title: "Dipansh",
    image: "assets/images/contributors/24.jpg",
    githublink: "https://github.com/dipanshparmar"
  },
];

const showCards = () => {
  let output = "";
  contributorsection.forEach(
    ({ title, image, githublink }) =>
      (output += `       
     <figure class="position-relative d-inline-block text-center ml-2 mb-4 grid-wd-100">
      <img srcset="${image} 1x, ${image} 2x" src="${image}" class="grid-wd-100">
       <figcaption class="position-absolute grid-wd-100 va-top pad font-small futura">
        <div class="text">${title} <a href="${githublink}" class="social-icon fa fa-github"></a></div>
       </figcaption>
     </figure>`)
  );
  contributor.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Open source cards */

const recentEventsDetails = [
	{
		coverImage: 'assets/images/events/SLOP.webp',
		eventName: 'SLOP',
		altName: 'SLOP Logo',
		eventDescription: `An inititative by the Developer Student Club (DA-IICT), exclusively for students who are new to open source software development.`,
		referencePage: 'https://slop.dscdaiict.in/projects'
	},
	{
		coverImage: 'assets/images/events/hakin_codes.webp',
		eventName: 'Hakincodes',
		altName: 'Hakincodes Logo',
		eventDescription: `Established in 2020 with a mission to empower youth i.e. students, developers & many more by giving opportunities to grow and learn.`,
		referencePage: 'https://hakincodes.tech/'
	},
	{
		coverImage: 'assets/images/events/psoc_logo.webp',
		eventName: 'PSOC',
		altName: 'PSOC Logo',
		eventDescription: `It's a 2 month long event conducted by Programming Club, UIET, aiming to help beginners get started with Open Source development.`,
		referencePage: 'https://www.pclubsummerofcode.in/'
  },
  {
    coverImage: 'assets/images/events/woc-logo.webp',
    eventName:'DevScript Winter of Code 2020',
    altName:'WOC Logo',
    eventDescription: 'Winter of Code envisioned by DevScript that helps understand the paradigm of Open Source contribution.',
    referencePage:'https://devscript.tech/woc/'
  },
  {
    coverImage: 'assets/images/events/SWOC-logo.webp',
    eventName:'Script Winter of Code 2021',
    altName:'SWOC Logo',
    eventDescription: 'Script Winter of Code envisioned by the Script Foundation aims to bring students into the world of open source development.',
    referencePage:'https://swoc.tech/index.html'
  }
];

const generateEventsCard = (eventDetail, fixClassIndex) => {
	const { coverImage, eventName, altName, eventDescription, referencePage } = eventDetail;
	const eventCard = `<div class="card r-events-card">
						<div class="card-image">
							<img
								src="${coverImage}"
								alt="${altName}"
								aria-label="${altName}"
							/>
						</div>
						<div class="card-text">
							<h2>${eventName}</h2>
							<p class="pt-1 event-body">
								${eventDescription}
							</p>
						</div>
						<div class="card-stats">
							<a href="${referencePage}" class="btn card-btn card1-text card-btn2"> Read More</a>
						</div>
					</div>`;

	const recentEventsSection = document.getElementById('eventCards');
	recentEventsSection.innerHTML += eventCard;
};

const insertEventCards = () => {
	recentEventsDetails.forEach((detail, index) => {
		generateEventsCard(detail, index + 1);
	});
};
insertEventCards();