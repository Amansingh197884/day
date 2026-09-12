window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

var openBtn = document.getElementById("openMenu");
var closeBtn = document.getElementById("closeMenu");
var sideDrawer = document.getElementById("sideDrawer");
var sideOverlay = document.getElementById("sideOverlay");
var menuItems = document.querySelectorAll(".drawer-links a");

function openSideMenu() {
  sideDrawer.classList.add("active");
  sideOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSideMenu() {
  sideDrawer.classList.remove("active");
  sideOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

if (openBtn) {
  openBtn.addEventListener("click", openSideMenu);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeSideMenu);
}

if (sideOverlay) {
  sideOverlay.addEventListener("click", closeSideMenu);
}

menuItems.forEach(function (item) {
  item.addEventListener("click", closeSideMenu);
});

var counters = document.querySelectorAll(".counter");

function startCounting() {
  counters.forEach(function (counter) {
    var target = +counter.getAttribute("data-target");
    var count = 0;
    var speed = target / 35;

    function updateCount() {
      count += speed;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    }
    updateCount();
  });
}

window.addEventListener("load", function () {
  startCounting();
});