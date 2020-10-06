// Function to load page and font
window.onload = function () { 
    // Loading Page
    var pageupload = document.getElementById("pageUploader");
    var button = document.getElementById("btnPageUpload");
    button.onclick = function () {
        pageupload.click();
        };
    pageupload.onchange = function () {
        console.log("Loading Pages....");
        var reader = new FileReader(); // Initiate File Reader
        reader.readAsDataURL(pageupload.files[0]);
        reader.onload = function (e) {
            img.push(loadImage(e.target.result));
            imgNum += 1;
            pageNum = imgNum - 1;
            };
        };
    // Loding Fonts
    var fontupload = document.getElementById("fontUploader");
    button = document.getElementById("btnFontUpload");
    button.onclick = function () {
          fontupload.click();
           };
    fontupload.onchange = function () {
        console.log("Loading Fonts...");
        var reader = new FileReader(); // Initiate File Reader
        reader.readAsDataURL(fontupload.files[0]);
        reader.onload = function (e) {
            myFont.push(loadFont(e.target.result));
            myFonts += 1;
            fontNum = myFonts - 1;
             };
        };
    };


// Function to count the number of words and limit the total number of words
$("#dataField").on("keydown", function (e) {// function event
  var words = $.trim(this.value).length ? this.value.match(/\S+/g).length : 0; //count length of word when space occur
  if (words <= 10000) {
    $("#count-words").text(10000 - words);// subtracts word from 10K and targets span-id"count-words" 
    $("#words-strt").text(0 + words);
  } else {
    if (e.which !== 8) e.preventDefault();//prevent user to enter more text
  }
});

