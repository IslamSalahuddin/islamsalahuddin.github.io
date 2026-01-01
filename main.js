// Add any JS for interactivity if needed

// Chip click functionality
$(function () {
  $('.skills-chips .chip').on("click", function () {
    $(this).toggleClass("chip--active");
  });
});

// Module Item Carousel - Only run if jQuery is available
if (typeof $ !== 'undefined') {
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


// Card Flip Slider
document.addEventListener('DOMContentLoaded', function() {
  const cardFlipSliders = document.querySelectorAll('.card-flip-slider');
  
  cardFlipSliders.forEach(slider => {
    const flipContainer = slider.querySelector('.flip-container');
    const prevBtn = slider.querySelector('.card-flip-nav.prev');
    const nextBtn = slider.querySelector('.card-flip-nav.next');
    const dotsContainer = slider.querySelector('.card-flip-progress');
    const counter = slider.querySelector('.card-flip-counter');
    
    // Get existing cards
    const cards = flipContainer.querySelectorAll('.card');
    
    if (!cards.length) return;
    
    let currentIndex = 0;
    let isFlipping = false;
    let autoRotateInterval = null;
    const totalCards = cards.length;
    
    // Position cards initially
    cards.forEach((card, index) => {
      card.style.transform = `rotateY(${index * (360 / totalCards)}deg) translateZ(200px)`;
    });
    
    // Create dots
    for (let i = 0; i < totalCards; i++) {
      const dot = document.createElement('button');
      dot.className = `card-flip-dot ${i === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => goToCard(i));
      dotsContainer.appendChild(dot);
    }
    
    const dots = dotsContainer.querySelectorAll('.card-flip-dot');
    
    function updateSlider() {
      if (isFlipping) return;
      
      const rotationStep = 360 / totalCards;
      const rotation = -currentIndex * rotationStep;
      flipContainer.style.transform = `rotateY(${rotation}deg)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
      
      // Update counter
      if (counter) {
        counter.textContent = `${currentIndex + 1} / ${totalCards}`;
      }
      
      // Update button states
      if (prevBtn && nextBtn) {
        const hasMultiple = totalCards > 1;
        prevBtn.style.opacity = hasMultiple ? '1' : '0.3';
        prevBtn.style.cursor = hasMultiple ? 'pointer' : 'not-allowed';
        nextBtn.style.opacity = hasMultiple ? '1' : '0.3';
        nextBtn.style.cursor = hasMultiple ? 'pointer' : 'not-allowed';
      }
      
      // Reset auto-rotate
      if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
        startAutoRotate();
      }
    }
    
    function goToCard(index) {
      if (isFlipping || index === currentIndex) return;
      
      isFlipping = true;
      currentIndex = (index + totalCards) % totalCards;
      updateSlider();
      
      setTimeout(() => {
        isFlipping = false;
      }, 800);
    }
    
    function nextCard() {
      if (totalCards <= 1) return;
      goToCard(currentIndex + 1);
    }
    
    function prevCard() {
      if (totalCards <= 1) return;
      goToCard(currentIndex - 1);
    }
    
    function startAutoRotate() {
      if (totalCards <= 1) return;
      
      autoRotateInterval = setInterval(() => {
        if (!document.hidden) {
          nextCard();
        }
      }, 5000);
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevCard);
    if (nextBtn) nextBtn.addEventListener('click', nextCard);
    
    // Keyboard navigation
    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'Home') goToCard(0);
      if (e.key === 'End') goToCard(totalCards - 1);
    });
    
    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextCard(); // Swipe left
        } else {
          prevCard(); // Swipe right
        }
      }
    }
    
    // Pause auto-rotate on hover
    slider.addEventListener('mouseenter', () => {
      if (autoRotateInterval) clearInterval(autoRotateInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
      startAutoRotate();
    });
    
    // Make slider focusable
    slider.setAttribute('tabindex', '0');
    slider.setAttribute('role', 'region');
    slider.setAttribute('aria-label', 'Card flip slider');
    
    // Initialize
    updateSlider();
    startAutoRotate();
  });
});
}

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

// Selected Overall Projects Carousel
$(document).ready(function() {
  // Only initialize if the carousel exists on the page
  if($("#carouselExampleControls").length) {
    // Handle carousel navigation visibility
    function checkitem() {
      var $this = $('#carouselExampleControls');
      if($('.carousel-inner .carousel-item:first').hasClass('active')) {
        $this.find('.left.carousel-control').hide();
        $this.find('.right.carousel-control').show();
      } else if($('.carousel-inner .carousel-item:last').hasClass('active')) {
        $this.find('.left.carousel-control').show();
        $this.find('.right.carousel-control').hide();
      } else {
        $this.find('.carousel-control').show();
      }
    }

    // Attach event listeners to carousel
    $('#carouselExampleControls').on('slid.bs.carousel', function() {
      checkitem();
    });

    // Initialize carousel navigation state
    checkitem();

    // Handle custom navigation buttons
    $('.projects-section [data-slide="prev"]').on('click', function(e) {
      e.preventDefault();
      $('#carouselExampleControls').carousel('prev');
    });

    $('.projects-section [data-slide="next"]').on('click', function(e) {
      e.preventDefault();
      $('#carouselExampleControls').carousel('next');
    });
  }
});

// Video Episodes Carousel
$(document).ready(function() {
  // Only initialize if the carousel exists on the page
  if($("#videoCarouselControls").length) {
    // Handle carousel navigation visibility
    function checkVideoItem() {
      var $this = $('#videoCarouselControls');
      if($('.carousel-inner .carousel-item:first').hasClass('active')) {
        $this.find('.left.carousel-control').hide();
        $this.find('.right.carousel-control').show();
      } else if($('.carousel-inner .carousel-item:last').hasClass('active')) {
        $this.find('.left.carousel-control').show();
        $this.find('.right.carousel-control').hide();
      } else {
        $this.find('.carousel-control').show();
      }
    }

    // Attach event listeners to carousel
    $('#videoCarouselControls').on('slid.bs.carousel', function() {
      checkVideoItem();
    });

    // Initialize carousel navigation state
    checkVideoItem();

    // Handle custom navigation buttons
    $('.video-episodes-section [data-slide="prev"]').on('click', function(e) {
      e.preventDefault();
      $('#videoCarouselControls').carousel('prev');
    });

    $('.video-episodes-section [data-slide="next"]').on('click', function(e) {
      e.preventDefault();
      $('#videoCarouselControls').carousel('next');
    });
  }
});
}    