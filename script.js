const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-menu");
// Header show menu

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });
}

// Scroll header
const header = document.querySelector("header");
function handleScrollHeader() {
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  }
}

window.addEventListener("scroll", handleScrollHeader);

if (typeof Swiper !== "undefined") {
  const swiper = new Swiper(".campaignSwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: false,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

const faqButtons = document.querySelectorAll(".faq-button");
let currentFaq = null;
let currentButton = null;

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqId = button.getAttribute("data-faq");
    const faqAnswer = document.querySelector(`.answer-${faqId}`);

    if (!faqAnswer) return;

    if (currentFaq === faqAnswer) {
      faqAnswer.style.maxHeight = null;
      const icon = button.querySelector("i");
      icon.classList.remove("bx-minus");
      icon.classList.add("bx-plus");
      currentFaq = null;
      currentButton = null;
    } else {
      if (currentFaq) {
        currentFaq.style.maxHeight = null;
        const previousIcon = currentButton.querySelector("i");
        previousIcon.classList.remove("bx-minus");
        previousIcon.classList.add("bx-plus");
      }

      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
      const icon = button.querySelector("i");
      icon.classList.remove("bx-plus");
      icon.classList.add("bx-minus");

      currentFaq = faqAnswer;
      currentButton = button;
    }
  });
});

const menuToggle = document.querySelector(".mobile__menu__toggle");
const menuBar = document.querySelector(".menu__bar");

if (menuToggle && menuBar) {
  menuToggle.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

Fancybox.bind("[data-fancybox]", {});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".fade").forEach((el) => {
  observer.observe(el);
});
