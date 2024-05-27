// primary navigation

const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".mob-nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-extended", "false");
  });
});

navToggle.addEventListener("click", () => {
  const visibil = navMenu.getAttribute("data-visible");
  console.log(visibil);
  if (visibil === "false") {
    navMenu.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-extended", "true");
  } else {
    navMenu.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-extended", "false");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  //   info-swiper initializare
  var swiper1 = new Swiper("#info_swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    speed: 400,
    slidesPerView: "auto",
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    coverflowEffect: {
      rotate: 1,
      stretch: 150,
      depth: 150,
      modifier: 1,
      slideShadows: false,
    },
    keyboard: {
      enabled: true,
    },
    on: {
      click(event) {
        swiper.slideTo(this.clickedIndex);
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  //   end swiper

  //   info-swiper initializare
  var event_swiper = new Swiper(".imagine-eveniment", {
    effect: "slide",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    speed: 400,
    slidesPerView: "auto",
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  //   end swiper
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);
  const offsetTop = targetSection.offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                                  show contact form

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
let formWrapper = document.getElementsByClassName("form-wrapper")[0];

function show_form() {
  console.log(formWrapper);
  formWrapper.style.display = "flex";
}

// formWrapper.addEventListener("click", function (event) {
//   // Check if the clicked element is the formWrapper itself
//   if (event.target === formWrapper) {
//     del();
//   } else {
//     return;
//   }
// });

function del() {
  formWrapper.style.display = "none";
}

// validarea formei de contact

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contactForm = document.getElementById("contact-form");
const errorElement = document.getElementById("error");
const successMsg = document.getElementById("success-msg");
const submitBtn = document.getElementById("submit");

const validate = (e) => {
  e.preventDefault();

  if (name.value.length < 3) {
    errorElement.innerHTML = "Numele trebuie sa contina cel putin 3 caractere.";
    return false;
  }

  if (!(email.value.includes(".") && email.value.includes("@"))) {
    errorElement.innerHTML = "Va rugăm introduceți un email valid.";
    return false;
  }

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = "Va rugăm introduceți un email valid.";
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML =
      "Vă rugăm introduceți un mesaj mai lung de 15 caractere.";
    return false;
  }

  errorElement.innerHTML = "";
  successMsg.innerHTML = "Muțumim pentru mesaj! Vom reveni în curând.";

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = "";
    document.getElementById("contact-form").reset();
  }, 6000);

  return true;
};

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

submitBtn.addEventListener("click", validate);

// ------------------------------------------------------------------------ end show contact form --------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------sticky navbar-----------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.querySelector(".nav-interna");
  const heroSection = document.getElementById("hero");

  // Function to handle scroll event
  function handleScroll() {
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
      // User has scrolled past the hero section
      navBar.style.position = "fixed";
      navBar.style.background =
        "linear-gradient(60deg, #543ab7 0%, #00acc1 100%)";
      //   navBar.style.borderBottom = "1px solid #f8f8f8";
    } else {
      // User is within the hero section
      navBar.style.position = "absolute";
      navBar.style.background = "transparent";
      navBar.style.borderBottom = "none";
    }
  }

  // Add the scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Initial call to handleScroll to set the initial state correctly
  handleScroll();
});
// ----------------------------------------------------------- end sticky navbar---------------------------------------------------------------------------------------------------

// for timeline
document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal();

  const timelineContent = document.querySelectorAll(".timeline-content");
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    timelineContent.forEach((item) => {
      if (item.classList.contains("js--fadeInLeft")) {
        item.classList.remove("js--fadeInLeft");
        item.classList.add("js--fadeInRight");
      }
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------- evenimente care au fost---------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
