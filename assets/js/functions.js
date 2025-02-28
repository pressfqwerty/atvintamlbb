"use strict";

var $body = $("body");

/*===============================================
  1. Page Preloader
===============================================*/
$(window).on("load", function () {
  $body.addClass("loaded");
});

if ($body.attr("data-preloader") === "true") {
  $body.append($("<div class='preloader'><div><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>"));
}

/*===============================================
  2. Cursor
===============================================*/
document.addEventListener("DOMContentLoaded", function () {
  const customCursor = document.getElementById("cursor");
  if (!customCursor) return;

  let mouseX = 0, mouseY = 0, isMoving = false;

  document.addEventListener("mousemove", (e) => {
    // Используем координаты относительно окна
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(moveCursor);
    }
  });

  function moveCursor() {
    customCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    isMoving = false;
  }

  const mouseElms = document.querySelectorAll("a, button, input, textarea, .cursor-link");
  mouseElms.forEach((elm) => {
    elm.addEventListener("mouseenter", () => customCursor.classList.add("scale-cursor"));
    elm.addEventListener("mouseleave", () => customCursor.classList.remove("scale-cursor"));
  });
});



/*===============================================
  3. Header Nav Menu
===============================================*/
var headerNav = $(".nav-box");

if (headerNav.length) {
  var toggleBtn = $("#nav-toggle");
  
  toggleBtn.on("click", function() {
    headerNav.toggleClass("show");
    toggleBtn.toggleClass("active");
  });
  
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".nav-box, #nav-toggle").length) {
      headerNav.removeClass("show");
      toggleBtn.removeClass("active");
    }
  });
}

/*===============================================
  4. Scroll To Top
===============================================*/
var scrollTopBtn = document.querySelector(".scrolltotop");

if (scrollTopBtn) {
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 700) { 
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });
}

/*===============================================
  5. Sliders
===============================================*/
new Swiper(".portfolio-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2, spaceBetween: 50 },
  },
  navigation: {
    nextEl: ".swiper-portfolio-next",
    prevEl: ".swiper-portfolio-prev",
  },
});

new Swiper(".blog-slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2, spaceBetween: 50 },
  },
  navigation: {
    nextEl: ".swiper-blog-next",
    prevEl: ".swiper-blog-prev",
  },
});

new Swiper(".clients-slider", {
  slidesPerView: 2,
  spaceBetween: 24,
  breakpoints: {
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5, spaceBetween: 50 },
  },
});

new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-testimonial-pagination",
    type: "progressbar",
  },
});

/*===============================================
  6. Lightbox
===============================================*/
$(".lightbox-image-box").each(function () {
  $(this).magnificPopup({
    type: 'image',
    fixedContentPos: false,
    removalDelay: 200,
    closeOnContentClick: true, 
    image: { titleSrc: 'data-image-title' }
  });
});

$(".lightbox-media-box").each(function() {
  $(this).magnificPopup({
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      },
      srcAction: "iframe_src" 
    }
  });
});

/*===============================================
  8. Contact Form
===============================================*/
$("#contactform").on("submit", function(e) {
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  if (!name || !email || !subject || !message) {
    $("#contactform input, #contactform textarea").addClass("error-color");
  } else {
    $.ajax({
      url: "assets/php/contact-form.php",
      data: $(this).serialize(),
      type: "POST",
      success: function() {
        $("#success").addClass("show-result");
        $("#contactform")[0].reset();
      },
      error: function() {
        $("#error").addClass("show-result");
      }
    });
    $("#contactform input, #contactform textarea").removeClass("error-color");
  }

  e.preventDefault();
});

function copyText(elementId) {
  const textToCopy = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(textToCopy).then(() => {
      alert(`Текст "${textToCopy}" скопирован в буфер обмена!`);
  }).catch(err => {
      console.error('Ошибка при копировании текста: ', err);
  });
}


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 75,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,  // Размер частиц
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 175,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 40,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
