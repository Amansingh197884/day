window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 80) {
        navbar.classList.add('sticky-nav');
    } else {
        navbar.classList.remove('sticky-nav');
    }
});

let slides = document.querySelectorAll('.hero-slide');
let dots = document.querySelectorAll('.page-dot-btn');
let badgeTitle = document.getElementById('badgeTitle');
let badgeSub = document.getElementById('badgeSub');

let slideData = [
    { title: "Bhutani City Center", sub: "Noida's New Landmark" },
    { title: "Alphathum Luxury", sub: "Business Towers" },
    { title: "Cyberthum Commercial", sub: "The Ultimate Hub" }
];

let currentSlideIndex = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    badgeTitle.innerText = slideData[index].title;
    badgeSub.innerText = slideData[index].sub;
    
    currentSlideIndex = index;
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function nextSlideManual() {
    nextSlide();
    resetTimer();
}

function currentSlide(index) {
    showSlide(index);
    resetTimer();
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 6000);
}

function resetTimer() {
    clearInterval(slideInterval);
    startSlider();
}

startSlider();

function switchFinderTab(button) {
    let tabs = document.querySelectorAll('.finder-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    button.classList.add('active');
}
// about js 
var tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    tabButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// swiper js 
var propertySwiper = new Swiper(".propertySwiper", {
  slidesPerView: 1.15,
  spaceBetween: 24,
  loop: true,
  speed: 600,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2.15,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
// new js 
var projectsSwiper = new Swiper(".projectsSwiper", {
  slidesPerView: 1.25,
  spaceBetween: 18,
  loop: true,
  speed: 600,
  
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    
  },
  breakpoints: {
    576: {
      slidesPerView: 2.2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 22,
    },
    1280: {
      slidesPerView: 5.5,
      spaceBetween: 22,
    },
  },
});


// new js 
var partnersSwiper = new Swiper(".partnersSwiper", {
  slidesPerView: 2.5,
  spaceBetween: 16,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".partners-btn-next",
    prevEl: ".partners-btn-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 3.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView: 6.5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
});
// new js 
var lightbox = GLightbox({
  selector: ".glightbox"
});

// new js 
var faqItems = document.querySelectorAll(".faq-accordion-item");

faqItems.forEach(function (item) {
  var question = item.querySelector(".faq-question");
  var icon = item.querySelector(".faq-icon i");

  question.addEventListener("click", function () {
    var isActive = item.classList.contains("active");

    faqItems.forEach(function (el) {
      el.classList.remove("active");
      var otherIcon = el.querySelector(".faq-icon i");
      if (otherIcon) {
        otherIcon.className = "bi bi-plus";
      }
    });

    if (!isActive) {
      item.classList.add("active");
      if (icon) {
        icon.className = "bi bi-dash";
      }
    }
  });
});

// new js 
var teamSwiper = new Swiper(".teamSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".team-btn-next",
    prevEl: ".team-btn-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3.2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// new 
var feedbackSwiper = new Swiper(".feedbackSwiper", {
  slidesPerView: 1.15,
  spaceBetween: 24,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".feedback-btn-next",
    prevEl: ".feedback-btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2.15,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});

// n 
// const lightbox = GLightbox({
//   selector: '.glightbox'
// });

var commercialGridSwiper = new Swiper(".commercialGridSwiper", {
  slidesPerView: 1,
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 16,
  pagination: {
    el: ".comm-grid-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 18,
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 22,
    },
  },
});

var residentialSwiper = new Swiper(".residentialSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  speed: 650,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".res-btn-next",
    prevEl: ".res-btn-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// new 
document.addEventListener("DOMContentLoaded", function () {
  var amenitiesSwiper = new Swiper(".amenitiesSwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 600,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".amen-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".amen-next",
      prevEl: ".amen-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });

  var gallerySwiper = new Swiper(".gallerySwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 600,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".gallery-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
});

// new js 
var blogsSwiper = new Swiper(".blogsSwiper", {
  slidesPerView: 3,
  spaceBetween: 28,
  loop: true,
  navigation: {
    nextEl: ".blogs-btn-next",
    prevEl: ".blogs-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});