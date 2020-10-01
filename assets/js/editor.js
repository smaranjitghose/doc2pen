myData = `The text you will type will appear here...`;
let img = [],
  myFont = [],
myFonts = 14,
imgNum = 8,
fontNum = 0,
pageNum = 0,
xaxis = 20,
yaxis = 20,
fontsize = 30,
w = 700,
linespacing = false;

function preload()
{
  fontLoad();
  loadPage();
}

document.getElementsByTagName("BODY")[0].onresize = function () { setup() };

function setup() {
  let canvasHeight = document.getElementById("contribute-wrapper").offsetHeight;
  let canvasWidth = document.getElementById("contribute-wrapper").offsetWidth;
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("contributing");
  rectMode(CORNER);
}

defInk = "#16264C";

function chooseRed(){
    defInk = "red";
  }
function chooseBlue(){
    defInk = "blue";
  }
  function chooseGreen(){
    defInk = "green";
  }
  function chooseBlack(){
    defInk = "black";
  }
  function choosePink(){
    defInk = "#e11d74";//pink colour
  }
  function chooseGolden(){
    defInk = "#ffd571";//golden colour
  }

function draw()
{
  image(img[pageNum], 0, 0, width, height);
  textFont(myFont[fontNum]);
  textSize(fontsize);
  fill(defInk);
  if (linespacing) {
    textLeading(linespacing);
  }
  data = "\n" + myData;
  text(data, xaxis, yaxis, w,900);
}


function fontLoad()
{
  for (var i = 0; i < myFonts; i++)
  {
    myFont.push(loadFont("assets/fonts/font (" + str(i) + ").ttf"));
  }
}


function changeFont()
{
  fontNum += 1;
  fontNum %= myFonts;
}

function loadPage()
{
  for (var i = 0; i < imgNum; i++)
  {
    img.push(loadImage("assets/images/pages/page (" + str(i) + ").jpg"));
  }
}

function changePage(){
  pageNum += 1;
  pageNum %= imgNum;
}

function chooseFont(x){
  fontNum = x;
  fontNum %= myFonts;
}

function choosePage(x){
  pageNum = x;
  pageNum %= imgNum;
}
