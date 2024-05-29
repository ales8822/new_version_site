// --------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                                  primary navigation

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".mob-nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.id !== "clasa-drop-link") {
      navMenu.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-extended", "false");
    }
  });
});

navToggle.addEventListener("click", () => {
  const visibil = navMenu.getAttribute("data-visible");
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

  // -------------------------------------------------------------------------- info-swiper initializare
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
  // ---------------------------------------------------------------------------------------------  end swiper
});
// smooth scroll pentru likuri
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

// dropdown

// Selectează toate elementele cu clasa "dropdown"
const dropdowns = document.querySelectorAll(".dropdown");

// Selectează link-ul principal din fiecare dropdown
const mainLink = document.querySelectorAll(".dropdown a");

// Așteaptă ca conținutul DOM să fie complet încărcat
document.addEventListener("DOMContentLoaded", function () {
  // Parcurge fiecare element dropdown
  dropdowns.forEach((dropdown) => {
    // Adaugă un ascultător de evenimente de click pentru fiecare dropdown
    dropdown.addEventListener("click", function (event) {
      // Schimbă culoarea de fundal a dropdown-ului când este apăsat
      dropdown.style.background = "rgba(0, 0, 0, 0.1)";

      // Schimbă bordura de jos a link-ului principal când dropdown-ul este apăsat
      mainLink[0].style.borderBottom = "2px solid rgba(0, 0, 0, 0.1)";

      // Împiedică evenimentul de click să se propage la document
      event.stopPropagation();

      // Găsește conținutul dropdown-ului în dropdown-ul apăsat
      const dropdownContent = this.querySelector(".dropdown-content");

      // Verifică lățimea ferestrei pentru responsivitate
      if (window.innerWidth <= 991) {
        // Comută afișarea conținutului dropdown-ului pentru ecrane mai mici
        toggleDropdown(dropdownContent);

        // Setează poziția dropdown-ului la static pentru ecrane mai mici
        dropdown.style.position = "static";
      } else {
        // Setează poziția dropdown-ului la relativ pentru ecrane mai mari
        dropdown.style.position = "relative";

        // Comută afișarea conținutului dropdown-ului pentru ecrane mai mari
        if (
          dropdownContent.style.display === "none" ||
          dropdownContent.style.display === ""
        ) {
          closeAllDropdowns();
          dropdownContent.style.display = "flex";
        } else {
          dropdownContent.style.display = "none";

          // Resetează culoarea de fundal a dropdown-ului când este închis
          dropdown.style.background = "transparent";

          // Resetează bordura de jos a link-ului principal când se închide dropdown-ul
          mainLink[0].style.borderBottom = "none";
        }
      }
    });
  });

  // Funcție pentru a comuta afișarea conținutului dropdown-ului
  function toggleDropdown(dropdownContent) {
    dropdownContent.style.display =
      dropdownContent.style.display === "flex" ? "none" : "flex";
  }

  // Funcție pentru a închide toate dropdown-urile
  function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
      dropdown.querySelector(".dropdown-content").style.display = "none";
    });
  }

  // Închide dropdown-urile când se face clic în afara lor
  window.onclick = function (event) {
    if (!event.target.matches(".dropdown")) {
      dropdowns[0].style.background = "transparent";
      mainLink[0].style.borderBottom = "none";
      closeAllDropdowns();
    }
  };
});

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
  //   successMsg.innerHTML = "Muțumim pentru mesaj! Vom reveni în curând.";

  sendEmail(name.value, email.value, message.value);
  return true;
};

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const sendEmail = (name, email, message) => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://school-site.atwebpages.com/send_email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      successMsg.innerHTML = xhr.responseText;
      setTimeout(function () {
        successMsg.innerHTML = "";
        document.getElementById("contact-form").reset();
      }, 6000);
    }
  };
  xhr.send(`name=${name}&email=${email}&message=${message}`);
};

submitBtn.addEventListener("click", validate);

// ------------------------------------------------------------------------ end show contact form --------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                                  sticky nav bar

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
// ----------------------------------------------------------- end sticky navbar--------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                                  time line

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
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
// ----------------------------------------------------------- end time-line------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                                  evenimente trecute

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// full screen gallery

let currentSlideIndex = 0;
let currentEventIndex = -1;
const events = {
  0: [
    "./img/img-evenimente/directoarea.jpg",
    "./img/img-evenimente/directoarea.jpg",
    "./img/img-evenimente/directoarea.jpg",
    "./img/img-evenimente/primarul.jpg",
    "./img/img-evenimente/craciun.jpg",
  ],
  1: [
    "./img/img-evenimente/directoarea.jpg",
    "./img/img-evenimente/primarul.jpg",
    "./img/img-evenimente/directoarea.jpg",
    "./img/img-evenimente/craciun.jpg",
  ],
  2: [
    "./img/img-evenimente/primarul.jpg",
    "./img/img-evenimente/directoarea.jpg",
    "./img/img-evenimente/craciun.jpg",
  ],
};
function openFullScreenGallery(eventIndex, imageIndex) {
  console.log(eventIndex, imageIndex);

  currentEventIndex = eventIndex;

  currentSlideIndex = imageIndex;
  const gallery = document.getElementById("fullScreenGallery");
  const galleryImage = document.getElementById("galleryImage");

  gallery.style.display = "block";
  galleryImage.src = events[currentEventIndex][currentSlideIndex];
  console.log(events[currentEventIndex][currentSlideIndex]);
}

function closeFullScreenGallery() {
  const gallery = document.getElementById("fullScreenGallery");
  gallery.style.display = "none";
  currentEventIndex = -1;
}

function changeSlide(n) {
  currentSlideIndex += n;

  if (currentSlideIndex >= events[currentEventIndex].length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = events[currentEventIndex].length - 1;
  }

  const galleryImage = document.getElementById("galleryImage");
  galleryImage.src = events[currentEventIndex][currentSlideIndex];
}

// svg waves not loading until touch of the screen problem
// selectam toate svg-urile, punem temporar ddisplay none si apoi iarasi display block]
// deoarece este o problema cu valurile care nu se pornesc pina nu atingi ecranul
document.addEventListener("DOMContentLoaded", function () {
  function forceSVGRerender() {
    const svgs = document.querySelectorAll("svg");
    svgs.forEach((svg) => {
      svg.style.display = "none";
      svg.getBoundingClientRect();
      svg.style.display = "block";
    });
  }

  // Call the function to force re-render
  forceSVGRerender();
});
