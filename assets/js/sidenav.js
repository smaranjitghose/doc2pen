// SIDENAV
$(document).ready(function() {
  $(".sidenav").sidenav();

  // SWAP ICON ON CLICK
  $(".dark-toggle").on("click", function() {
    if (
      $(this)
        .find("i")
        .text() == "brightness_4"
    ) {
      $(this)
        .find("i")
        .text("brightness_high");
    } else {
      $(this)
        .find("i")
        .text("brightness_4");
    }
  });
});

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    $(".dark-toggle")
      .find("i")
      .text("brightness_4");
  } else {
    setTheme("theme-dark");
    $(".dark-toggle")
      .find("i")
      .text("brightness_high");
  }
}
// Immediately invoked function to set the theme on initial load
(function() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    $(".dark-toggle")
      .find("i")
      .text("brightness_4");
  } else {
    setTheme("theme-light");
    $(".dark-toggle")
      .find("i")
      .text("brightness_high");
  }
})();
