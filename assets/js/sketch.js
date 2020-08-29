myData = `The quick brown fox jumps over the lazy dog`;
let img = [],
  myFont = [],
myFonts = 7,
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
  // let canvasWidth;
  var elmnt = document.querySelector(".vertical-menubar");
  var canvasElmnt = document.querySelector(".canvas");
  if(screen.width>600){
    let canvasWidth = canvasElmnt.offsetWidth;
    let canvasHeight = elmnt.offsetHeight;
    console.log(canvasHeight);
    console.log(screen.width);
    console.log(canvasWidth);
    canvas = createCanvas(0.99 * canvasWidth, canvasHeight); 
    
  } else {
    let canvasWidth = elmnt.offsetWidth * 0.95;
    let canvasHeight = canvasWidth*4/3;
    canvas = createCanvas(canvasWidth, canvasHeight); 
  }
  canvas.parent("contributing");
  rectMode(CORNER);
}

defInk = "#264180";//Default ink

function chooseBlue(){
  defInk = "#264180"
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

