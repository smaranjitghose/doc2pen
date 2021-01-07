let outWinHeight = document.getElementById("contribute-wrapper").offsetHeight;
let outWinWidth = document.getElementById("contribute-wrapper").offsetWidth;

document.querySelector(".x-slido").style.width = outWinWidth + "px";
document.querySelector(".y-slido").style.width = outWinHeight + "px";
document.querySelector("#contributing").style.width = outWinWidth + "px";
document.querySelector("#contributing").style.height = outWinHeight + "px";

// Default Text
myData = `The quick brown fox jumps over the lazy dog`;
// Declaring and Intializing variables for various options in the editor
let img = [],
  myFont = [],
  myFonts = 15,
  imgNum = 14,
  fontNum = 0,
  pageNum = 0,
  xaxis = 20,
  yaxis = 20,
  fontsize = 30,
  w = 700,
  linespacing = false;

function preload() {
  loadPage();
  fontLoad();
}

document.getElementsByTagName("BODY")[0].onresize = function () {
  setup();
};

function setup() {
  let canvasHeight = document.getElementById("contribute-wrapper").offsetHeight;
  let canvasWidth = document.getElementById("contribute-wrapper").offsetWidth;
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("contributing");
  rectMode(CORNER);

  document.querySelector(".x-slido").style.width = canvasWidth + "px";
  document.querySelector(".y-slido").style.width = canvasHeight + "px";
  document.querySelector("#contributing").style.width = canvasWidth + "px";
  document.querySelector("#contributing").style.height = canvasHeight + "px";
}

// Default Ink Color
defInk = "#16264C";
// Functions for Choosing Ink Color
function chooseRed() {
  defInk = "red"; //red colour
}
function chooseBlue() {
  defInk = "blue"; //blue colour
}
function chooseGreen() {
  defInk = "green"; //green colour
}
function chooseBlack() {
  defInk = "black"; //black colour
}
function choosePink() {
  defInk = "#e11d74"; //pink colour
}
function chooseGolden() {
  defInk = "#ffd571"; //golden colour
}

function draw() {
  image(img[pageNum], 0, 0, width, height);
  textFont(myFont[fontNum]);
  textSize(fontsize);
  fill(defInk);
  if (linespacing) {
    textLeading(linespacing);
  }
  data = "\n" + myData;
  text(data, xaxis, yaxis, w, 900);
}

function fontLoad() {
  for (var i = 0; i < myFonts; i++) {
    myFont.push(loadFont("assets/fonts/font (" + str(i) + ").ttf"));
  }
}

function changeFont() {
  fontNum += 1;
  fontNum %= myFonts;
}

function loadPage() {
  for (var i = 0; i < imgNum; i++) {
    img.push(loadImage("assets/images/pages/page (" + str(i) + ").jpg"));
  }
}

function changePage() {
  pageNum += 1;
  pageNum %= imgNum;
}

function chooseFont(x) {
  fontNum = x;
  fontNum %= myFonts;
}

function choosePage(x) {
  pageNum = x;
  pageNum %= imgNum;
}

function changeMargin(x) {
  if (x == 1) {
    xaxis = 20;
    yaxis = 20;
    w = 700;
  } else if (x == 2) {
    xaxis = 30;
    yaxis = 40;
    w = 600;
  } else if (x == 3) {
    xaxis = 80;
    yaxis = 40;
    w = 500;
  } else {
    xaxis = 40;
    yaxis = 40;
    w = 600;
  }
}

function changeBorder(z) {
  if (z == 0) {
    choosePage(8);
  } else if (z == 1) {
    choosePage(9);
  } else if (z == 2) {
    choosePage(10);
  } else if (z == 3) {
    choosePage(11);
  } else if (z == 4) {
    choosePage(12);
  } else if (z == 5) {
    choosePage(13);
  }
}

function updateFontSize(size) {
  fontsize = float(size);
  document.getElementById("size-font").innerHTML = size;
}

// setting font size options
const noOfFontSizes = 20;
let fontSize = 2;

// adding font sizes in option
for (let i = 1; i <= noOfFontSizes; i++) {
  document.querySelector("#font-size-select").innerHTML += `<a onclick="updateFontSize(${
    fontSize * i
  })" class="dropdown-text dropdown-item text-right pr-4" href="#" value="${fontSize * i}">${fontSize * i}</a>`;
}

/*range field*/

// Function to count the number of words and limit the total number of words
$("#dataField").on("keydown", function (e) {
  // function event
  var words = $.trim(this.value).length ? this.value.match(/\S+/g).length : 0; //count length of word when space occur
  if (words <= 10000) {
    $("#count-words").text(10000 - words); // subtracts word from 10K and targets span-id"count-words"
    $("#words-strt").text(0 + words);
  } else {
    if (e.which !== 8) e.preventDefault(); //prevent user to enter more text
  }
});

let switches = document.querySelectorAll(".slider-btn");
switches.forEach(button => {
  button.addEventListener("click", () => {
    let name = button.dataset.name;

    if (
      document.querySelector(`.slider-open`) != null &&
      !document.querySelector(`#${name}`).classList.contains(`slider-open`)
    )
      document.querySelector(`.slider-open`).classList.remove(`slider-open`);

    document.querySelector(`#${name}`).classList.toggle(`slider-open`);
  });
});
