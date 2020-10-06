myData = `The text you will type will appear here...`;
let img = [],
  myFont = [],
  myFonts = 15,
  imgNum = 8,
  fontNum = 0,
  pageNum = 0,
  xaxis = 20,
  yaxis = 20,
  fontsize = 30,
  w = 700,
  linespacing = false;

function preload() {
  fontLoad();
  loadPage();
}

document.getElementsByTagName("BODY")[0].onresize = function () {
  setup();
};
//Page Upload
window.onload = function () {
  var fileupload = document.getElementById("pageUploader");
  var button = document.getElementById("btnPageUpload");
  button.onclick = function () {
    fileupload.click();
  };
  fileupload.onchange = function () {
    console.log("page Uploader Triggered.");
    var reader = new FileReader();
    reader.readAsDataURL(fileupload.files[0]);
    reader.onload = function (e) {
      img = loadImage(e.target.result);
    };
  };
};

function setup() {
  let canvasHeight = document.getElementById("contribute-wrapper").offsetHeight;
  let canvasWidth = document.getElementById("contribute-wrapper").offsetWidth;
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("contributing");
  rectMode(CORNER);
}

defInk = "#16264C";

function chooseRed() {
  defInk = "red";
}
function chooseBlue() {
  defInk = "blue";
}
function chooseGreen() {
  defInk = "green";
}
function chooseBlack() {
  defInk = "black";
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

// setting font size options
const noOfFontSizes = 20;
let fontSize = 2;

// adding font sizes in option
for (let i = 1; i <= noOfFontSizes; i++) {
  document.querySelector(
    "#font-size-select"
  ).innerHTML += `<option value="${fontSize * i}">${fontSize * i}</option>`;
}

// changing the font size of data field on font size input
let fontSizeFromInput;
document.querySelector('#font-size-select').addEventListener('input', () => {
  fontSizeFromInput = document.querySelector('#font-size-select').value;
})
var temp = "30";
        var mySelect = document.getElementById('font-size-select');
        
        for(var i, j = 0; i = mySelect.options[j]; j++) {
            if(i.value == temp) {
                mySelect.selectedIndex = j;
                break;
            }
        }
/*range field*/

/*Width*/
var slider1 = document.getElementById("rangeWidth");
output1.innerHTML = rangeWidth.value;



/*Line Spacing*/
var slider2 = document.getElementById("rangeSpace");
output2.innerHTML = rangeSpace.value;


/*X-axis*/
var slider4 = document.getElementById("rangeXaxis");
output4.innerHTML = rangeXaxis.value;


/*Y-axis*/
var slider5 = document.getElementById("rangeYaxis");
output5.innerHTML = rangeYaxis.value;

/*  file uploading code */
var fileUploader = document.getElementById("fileUploader");
      function uploaderFunction(){fileUploader.click();};
      fileUploader.addEventListener("change", function readfiles(files) {
      if (this.files && this.files[0]) {
        var myFile = this.files[0];
        document.querySelector("#uploadedFname").innerText = "Doc File : " + myFile.name;
        var reader = new FileReader();
        
        reader.addEventListener('load', function (e) {
          document.querySelector("#dataField").value = e.target.result;
$("#dataField").keyup();
        });
        
        reader.readAsBinaryString(myFile);
      }
    });





