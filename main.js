// Add any JS for interactivity if needed

// Space Facts Carousel
let items = document.querySelectorAll(".slider .item");
let active = 3;
function loadShow() {
  for (let i = 0; i < items.length; i++) {
    items[i].style.transition = "0.5s";
    if (i === active) {
      items[i].style.transform = "none";
      items[i].style.zIndex = 2;
      items[i].style.filter = "none";
      items[i].style.opacity = 1;
    } else if (i === active - 1) {
      items[i].style.transform = "translateX(-260px) scale(0.85)";
      items[i].style.zIndex = 1;
      items[i].style.filter = "none";
      items[i].style.opacity = 1;
    } else if (i === active + 1) {
      items[i].style.transform = "translateX(260px) scale(0.85)";
      items[i].style.zIndex = 1;
      items[i].style.filter = "none";
      items[i].style.opacity = 1;
    } else if (i < active - 1) {
      items[i].style.transform = "translateX(-400px) scale(0.7)";
      items[i].style.zIndex = 0;
      items[i].style.filter = "blur(6px)";
      items[i].style.opacity = 0.3;
    } else if (i > active + 1) {
      items[i].style.transform = "translateX(400px) scale(0.7)";
      items[i].style.zIndex = 0;
      items[i].style.filter = "blur(6px)";
      items[i].style.opacity = 0.3;
    }
  }
}
if (items.length) {
  loadShow();
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");
  next.onclick = function () {
    active = (active + 1) % items.length;
    loadShow();
  };
  prev.onclick = function () {
    active = (active - 1 + items.length) % items.length;
    loadShow();
  };
}
