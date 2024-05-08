// primary navigation

const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".mob-nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
console.log(navToggle);
console.log(navMenu);

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

// -------------------------  show contact form -------------------------------------------------
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
