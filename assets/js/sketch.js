myData = `The quick brown fox jumps over the lazy dog`;
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

function setup() {
  let canvasHeight;
  if(screen.width <= 995){
    canvasHeight = screen.width * 0.9
  } else {
    canvasHeight = screen.width * 0.65;
  }
  canvas = createCanvas(0.86*canvasHeight, canvasHeight);
  canvas.parent("contributing");
  rectMode(CORNER);
  // let canvasHeight;
  // if(screen.width <= 995){
  //   canvasHeight = screen.width * 0.9
  // } else {
  //   canvasHeight = screen.width * 0.73;
  // }
  // canvas = createCanvas(0.86*canvasHeight, canvasHeight);
  // canvas.parent("contributing");
  // rectMode(CORNER);
}

defInk = "#16264C";//Default ink colour

function chooseBlue(){
  defInk = "#16264C"
}

function chooseRed(){
  defInk = "red";
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
  text(data, xaxis, yaxis, w, 900);
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

