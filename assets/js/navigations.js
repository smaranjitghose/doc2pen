const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");
const logo = document.querySelector(".header .nav-bar #logo h1");
// const menu = document.querySelectorAll("#header .header .nav-list ul li a");
// const menu = document.querySelector(".item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

// document.addEventListener("scroll", () => {
//   var scroll_position = window.scrollY;
//   if (scroll_position > 600) {
//     header.style.backgroundColor = "#fff";
//     logo.style.color = "#000";
//   } else {
//     header.style.backgroundColor = "transparent";
//     logo.style.color = "#fff";
//   }
// });

menu_item.forEach(item => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
