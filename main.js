// Add any JS for interactivity if needed

// Module Item Carousel
$(document).ready(function() {
  // Only initialize if the module item carousel exists on the page
  if($(".module-item-carousel").length) {
    $(".module-item-carousel").owlCarousel({
      autoWidth: true,
      loop: true,
      items: 3,
      center: true,
      margin: 20,
      dots: true,
      dotsContainer: '.custom-dots',
      nav: true,
      navText: ['<span class="owl-nav-prev">‹</span>', '<span class="owl-nav-next">›</span>'],
      smartSpeed: 600,
      fluidSpeed: true,
      responsive: {
        0: {
          items: 1,
          center: true,
          nav: false
        },
        768: {
          items: 2,
          center: true,
          nav: true
        },
        992: {
          items: 3,
          center: true,
          nav: true
        }
      }
    });
    
    // Create custom dots container
    $(".module-item-section").append('<div class="custom-dots"><span class="dot" data-dot="0"></span><span class="dot" data-dot="1"></span></div>');
    
    // Handle dot clicks
    $(".custom-dots .dot").click(function() {
      var dotIndex = parseInt($(this).attr("data-dot"));
      $(".module-item-carousel").trigger("to.owl.carousel", [dotIndex * 3, 300]);
    });
    
    // Update active dot on carousel change
    $(".module-item-carousel").on("changed.owl.carousel", function(event) {
      var currentIndex = event.item.index;
      var dotIndex = Math.floor(currentIndex / 3) % 2;
      $(".custom-dots .dot").removeClass("active");
      $(".custom-dots .dot[data-dot=" + dotIndex + "]").addClass("active");
    });
    
    $(".module-item").click(function() {
      $(".module-item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  }
});


// Space Facts Carousel
// Only initialize if the slider exists on the page
if(document.querySelector(".slider")) {
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
}
