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
  let canvasHeight;
  if(screen.width <= 600){
    canvasWidth = screen.width * 0.8;
  } else {
    canvasWidth = screen.width * 0.40;
  }
  canvasHeight = canvasWidth * 4/3
  document.getElementById("dataField").style.height = [canvasHeight- 160] + "px";
  console.log(document.getElementById("dataField").style.height);
  console.log(canvasHeight);

  canvas = createCanvas(canvasWidth, canvasHeight);
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

