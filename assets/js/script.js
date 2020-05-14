window.onload = function () {
    var fileupload = document.getElementById("pageUploader");
    var button = document.getElementById("btnPageUpload");
    button.onclick = function () {
        fileupload.click();
    };
    fileupload.onchange = function () {
        console.log("page Uploader Triggered.")
        var reader = new FileReader();
        reader.readAsDataURL(fileupload.files[0]);
        reader.onload = function (e) {
            img = loadImage(e.target.result);
        }
    };

    var fontupload = document.getElementById("fontUploader");
    button = document.getElementById("btnFontUpload");
    button.onclick = function () {
        fontupload.click();
    };
    fontupload.onchange = function () {
        console.log("font Uploader Triggered.")
        var reader = new FileReader();
        reader.readAsDataURL(fontupload.files[0]);
        reader.onload = function (e) {
            myFont.push(loadFont(e.target.result))
            myFonts += 1
            fontNum = myFonts - 1
        }
    };
};
