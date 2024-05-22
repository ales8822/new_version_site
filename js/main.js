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

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
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

//                                                                         show ongoing lesson

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  updateProgressBar();
  setInterval(updateProgressBar, 1000); // Update progress bar every second
});

function updateProgressBar() {
  const currentTime = new Date();
  const dayOfWeek = currentTime.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

  // Check if it's a weekend (Saturday or Sunday)
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    document.getElementById("progress-bar").style.width = "0%";
    document.getElementById("ongoing-lesson-message").textContent =
      "Weekend - No lessons";
    return;
  }

  const lessons = [
    { start: "17:00", end: "17:45", name: "Lesson 1" },
    { start: "17:45", end: "17:59:59", name: "Breack 1" },
    { start: "18:00", end: "18:45", name: "Lesson 2" },
    { start: "18:45", end: "19:00", name: "Breack 2" },
    { start: "19:00", end: "19:45", name: "Lesson 3" },
    // Add more lesson times here
  ];

  const currentLessonIndex = getCurrentLessonIndex(lessons, currentTime);

  if (currentLessonIndex === -1) {
    document.getElementById("progress-bar").style.width = "100%";
    document.getElementById("ongoing-lesson-message").textContent =
      "Today's lessons finish";
    return;
  }

  const currentLesson = lessons[currentLessonIndex];
  const lessonStart = parseTime(currentLesson.start);
  const lessonEnd = parseTime(currentLesson.end);
  const elapsedTime = currentTime - lessonStart;
  const totalDuration = lessonEnd - lessonStart;
  const remainingTime = totalDuration - elapsedTime;

  const progressPercent = (elapsedTime / totalDuration) * 100;
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = progressPercent + "%";

  // Calculate elapsed and remaining minutes
  const elapsedMinutes = Math.floor(elapsedTime / (1000 * 60));
  const remainingMinutes = Math.floor(remainingTime / (1000 * 60));

  progressBar.innerHTML = `<div class="elapsed">${elapsedMinutes} min</div><div class="remaining">${remainingMinutes} min</div>`;
  document.getElementById("ongoing-lesson-message").textContent =
    "Current lesson: " + currentLesson.name;
}

function getCurrentLessonIndex(lessons, currentTime) {
  for (let i = 0; i < lessons.length; i++) {
    const lessonStart = parseTime(lessons[i].start);

    const lessonEnd = parseTime(lessons[i].end);
    if (currentTime >= lessonStart && currentTime < lessonEnd) {
      return i;
    }
  }
  return -1; // No ongoing lesson
}

function parseTime(timeString) {
  const currentTime = new Date();
  const [hours, minutes] = timeString.split(":").map(Number);
  return new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    hours,
    minutes
  );
}
// ---------------------------------------------------------- end ongoing lesson---------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// hide the second section ( on smaller screen can be seen a part on hero section)
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", revealOrHideSection);
});

function revealOrHideSection() {
  var section = document.getElementById("evenimente");
  var sectionPosition = section.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;
  var scrollPosition = window.scrollY || window.pageYOffset; // For cross-browser compatibility

  // If section is in viewport and not at the top of the page
  if (sectionPosition < screenHeight && scrollPosition !== 0) {
    section.style.visibility = "visible";
  } else {
    section.style.visibility = "hidden";
  }
}
// ---------------------------------------------------------- end hide second section---------------------------------------------------------------------------------
// JavaScript code to apply position: sticky on scroll

// Get the navigation bar element
const navBar = document.querySelector(".nav-interna");

// Get the initial offset position of the navigation bar
const navBarOffsetTop = navBar.offsetTop;

// Flag to track whether the user has scrolled back to the top
let isAtTop = true;

// Function to apply sticky behavior to the navigation bar
function makeNavBarSticky() {
  if (window.scrollY >= navBarOffsetTop) {
    // Apply position: sticky when the scroll position exceeds the navigation bar's original position
    navBar.style.position = "sticky";
    navBar.style.top = "0";
    isAtTop = false; // Update the flag when not at the top
  } else {
    // If the user has scrolled back to the top
    if (isAtTop) {
      // Set position to absolute
      navBar.style.position = "absolute";
    } else {
      // If not at the top, set position to fixed
      navBar.style.position = "fixed";
    }
  }
}

// Event listener for the scroll event
window.addEventListener("scroll", makeNavBarSticky);

// Event listener for detecting when the user scrolls back to the top
window.addEventListener("wheel", function (event) {
  if (window.scrollY === 0) {
    isAtTop = true; // Update the flag when the user scrolls back to the top
  }
});

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
