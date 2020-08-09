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

  var fontupload = document.getElementById("fontUploader");
  button = document.getElementById("btnFontUpload");
  button.onclick = function () {
    fontupload.click();
  };
  fontupload.onchange = function () {
    console.log("font Uploader Triggered.");
    var reader = new FileReader();
    reader.readAsDataURL(fontupload.files[0]);
    reader.onload = function (e) {
      myFont.push(loadFont(e.target.result));
      myFonts += 1;
      fontNum = myFonts - 1;
    };
  };
};

// function to show Remaining Characters

$(document).ready(function() {
  var length = 0;
  var maxCharacter = 10000;

  $( '#dataField' ).keyup(function(){
    length = this.value.length
    if(length > maxCharacter){
        return false;
    }
    else if (length > 0) {
        $( "#remainingCharacter" ).html( "Remaining characters: " +( maxCharacter - length ) );
    }
    else {
        $( "#remainingCharacter" ).html( "Remaining characters: " +( maxCharacter ) );
    }
  })
});

            // function to set a given theme/color-scheme
            function setTheme(themeName) {
                localStorage.setItem('theme', themeName);
                document.documentElement.className = themeName;
            }
            // function to toggle between light and dark theme
            function toggleTheme() {
                if (localStorage.getItem('theme') === 'theme-dark') {
                    setTheme('theme-light');
                    document.getElementById('switch').innerHTML="Dark";
                } else {
                    document.getElementById('switch').innerHTML="Light";
                    setTheme('theme-dark');
                }
            }
            // Immediately invoked function to set the theme on initial load
            (function () {
                if (localStorage.getItem('theme') === 'theme-dark') {
                    setTheme('theme-dark');
                } else {
                    setTheme('theme-light');
                }
            })();
