//file for the on-click play and pause of the video on homepage
function videoControls() {

  var playButton = document.getElementById("play_button");
  if (video.paused == true) {
    video.play();

    // Update the button
    document.getElementById("fontawesome").classList.remove('fa-play-circle');
    document.getElementById("fontawesome").classList.add('fa-pause-circle');

  } else {
    video.pause();

    // Update the button
    document.getElementById("fontawesome").classList.remove("fa-pause-circle");
    document.getElementById("fontawesome").classList.add("fa-play-circle");
  }
};
