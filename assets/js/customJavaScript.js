


const hamburgerMenuBtn = document.querySelector(".hamburger-menu");
const navMain = document.querySelector("nav");

hamburgerMenuBtn.addEventListener("click", function() {
  navMain.classList.toggle("open-mobile-menu");
});


document.addEventListener('click', function(event) {
  var isClickInside1 = navMain.contains(event.target);
  if (!isClickInside1) {
    navMain.classList.remove("open-mobile-menu");
  }
});
