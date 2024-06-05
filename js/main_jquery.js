$(document).ready(function () {
  // ------------------------------------------------------------------------------------- navigarea mobila -------------------------------------------------------------
  const navMenu = $(".nav-menu");
  const navToggle = $(".mob-nav-toggle");
  const navLinks = $(".nav-link");

  navLinks.on("click", function () {
    if (this.id !== "clasa-drop-link") {
      navMenu.attr("data-visible", "false");
      navToggle.attr("aria-extended", "false");
    }
  });

  navToggle.on("click", function () {
    const visibil = navMenu.attr("data-visible");
    if (visibil === "false") {
      navMenu.attr("data-visible", "true");
      navToggle.attr("aria-extended", "true");
    } else {
      navMenu.attr("data-visible", "false");
      navToggle.attr("aria-extended", "false");
    }
  });
  // ------------------------------------------------------------------------------------- Smooth scroll ptr link-uri --------------------------------------------------------
  $("nav a").on("click", smoothScroll);

  function smoothScroll(event) {
    const targetHref = event.currentTarget.getAttribute("href");

    // verifie daca linkul e localizat in afara site-ului
    if (
      targetHref.startsWith("#") &&
      event.currentTarget.id !== "clasa-drop-link"
    ) {
      event.preventDefault();
      const targetId = targetHref.substring(1);
      const targetSection = document.getElementById(targetId);

      // verifica daca sectiunea cu id-ul dat exista
      if (targetSection) {
        const offsetTop = targetSection.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  }
  $(".nav-link").click(function (event) {
    if ($(this).hasClass("dropdown")) {
      event.preventDefault();
    }
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".read-more-btn").click(function () {
    var $textContainer = $(this).closest(".text-container");
    $textContainer.toggleClass("expanded");
    if ($textContainer.hasClass("expanded")) {
      $(this).text("Read Less");
    } else {
      $(this).text("Read More");
    }
  });

  // ------------------------------------------------------------------------------------- Initializarea swipere-lor --------------------------------------------------------
  var swiper1 = new Swiper("#swiper_recenzii", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    speed: 400,
    slidesPerView: "auto",
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
        swiper1.slideTo(this.clickedIndex);
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

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

  // ------------------------------------------------------------------------------------- Dropdown menu -------------------------------------------------------------
  const dropdowns = $(".dropdown");
  const mainLink = $(".dropdown a");

  dropdowns.on("click", function (event) {
    $(this).css("background", "rgba(0, 0, 0, 0.1)");
    mainLink.first().css("borderBottom", "2px solid rgba(0, 0, 0, 0.1)");
    event.stopPropagation();

    const dropdownContent = $(this).find(".dropdown-content");

    if (window.innerWidth <= 991) {
      toggleDropdown(dropdownContent);
      $(this).css("position", "static");
    } else {
      $(this).css("position", "relative");
      if (
        dropdownContent.css("display") === "none" ||
        dropdownContent.css("display") === ""
      ) {
        closeAllDropdowns();
        dropdownContent.css("display", "flex");
      } else {
        dropdownContent.css("display", "none");
        $(this).css("background", "transparent");
        mainLink.first().css("borderBottom", "none");
      }
    }
  });

  function toggleDropdown(dropdownContent) {
    dropdownContent.css(
      "display",
      dropdownContent.css("display") === "flex" ? "none" : "flex"
    );
  }

  function closeAllDropdowns() {
    $(".dropdown-content").css("display", "none");
  }

  $(window).on("click", function (event) {
    if (!$(event.target).closest(".dropdown").length) {
      dropdowns.css("background", "transparent");
      mainLink.first().css("borderBottom", "none");
      closeAllDropdowns();
    }
  });

  // ------------------------------------------------------------------------------------- Show form -------------------------------------------------------------
  let formWrapper = $(".form-wrapper").first();

  window.show_form = function () {
    console.log(formWrapper);
    formWrapper.css("display", "flex");
  };

  window.del = function () {
    formWrapper.css("display", "none");
  };
  // validarea formei de contact
  const name = $("#name");
  const email = $("#email");
  const message = $("#message");
  const contactForm = $("#contact-form");
  const errorElement = $("#error");
  const successMsg = $("#success-msg");
  const submitBtn = $("#submit");

  const validate = (e) => {
    e.preventDefault();

    if (name.val().length < 3) {
      errorElement.html("Numele trebuie sa contina cel putin 3 caractere.");
      return false;
    }

    if (!(email.val().includes(".") && email.val().includes("@"))) {
      errorElement.html("Va rugăm introduceți un email valid.");
      return false;
    }

    if (!emailIsValid(email.val())) {
      errorElement.html("Va rugăm introduceți un email valid.");
      return false;
    }

    if (message.val().length < 15) {
      errorElement.html(
        "Vă rugăm introduceți un mesaj mai lung de 15 caractere."
      );
      return false;
    }

    errorElement.html("");
    sendEmail(name.val(), email.val(), message.val());
    return true;
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = (name, email, message) => {
    $.ajax({
      type: "POST",
      url: "http://school-site.atwebpages.com/send_email.php",
      data: { name: name, email: email, message: message },
      success: function (response) {
        successMsg.html(response);
        setTimeout(function () {
          successMsg.html("");
          contactForm[0].reset();
        }, 6000);
      },
    });
  };

  submitBtn.on("click", validate);

  // ------------------------------------------------------------------------------------- Sticky navbar --------------------------------------------------------------------- //
  const navBar = $(".nav-interna");
  const heroSection = $("#hero");

  function handleScroll() {
    const heroBottom = heroSection[0].getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
      navBar.css({
        position: "fixed",
        background: "linear-gradient(60deg, #543ab7 0%, #00acc1 100%)",
      });
    } else {
      navBar.css({
        position: "absolute",
        background: "transparent",
        borderBottom: "none",
      });
    }
  }

  $(window).on("scroll", handleScroll);
  handleScroll();

  // ------------------------------------------------------------------------------------- Timeline animatie -------------------------------------------------------------
  const sr = ScrollReveal();
  const timelineContent = $(".timeline-content");
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    timelineContent.each(function () {
      if ($(this).hasClass("js--fadeInLeft")) {
        $(this).removeClass("js--fadeInLeft").addClass("js--fadeInRight");
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

  // ------------------------------------------------------------------------------------- Full screen gallery -------------------------------------------------------------

  let currentSlideIndex = 0;
  let currentEventIndex = -1;
  const events = {
    0: [
      "./img/img-evenimente/ziua_copiilor.jpg",
      "./img/img-evenimente/ziua_copiilor2.jpg",
      "./img/img-evenimente/directoarea.jpg",
      "./img/img-evenimente/ziua_copiilor3.jpg",
      "./img/img-evenimente/ziua_copiilor4.jpg",
    ],
    1: [
      "./img/img-evenimente/stiinta.jpg",
      "./img/img-evenimente/stiinta2.jpg",
      "./img/img-evenimente/stiinta3.jpg",
      "./img/img-evenimente/stiinta4.jpg",
      "./img/img-evenimente/stiinta5.jpg",
    ],
    2: [
      "./img/img-evenimente/miciiinv.jpg",
      "./img/img-evenimente/miciiinv2.jpg",
      "./img/img-evenimente/miciiinv3.jpg",
      "./img/img-evenimente/miciiinv4.jpg",
      "./img/img-evenimente/miciiinv5.jpg",
    ],
  };
  window.openFullScreenGallery = function (eventIndex, imageIndex) {
    console.log(eventIndex, imageIndex);

    currentEventIndex = eventIndex;
    currentSlideIndex = imageIndex;
    const gallery = $("#fullScreenGallery");
    const galleryImage = $("#galleryImage");

    gallery.css("display", "block");
    galleryImage.attr("src", events[currentEventIndex][currentSlideIndex]);
    console.log(events[currentEventIndex][currentSlideIndex]);
  };

  window.closeFullScreenGallery = function () {
    const gallery = $("#fullScreenGallery");
    gallery.css("display", "none");
    currentEventIndex = -1;
  };

  window.changeSlide = function (n) {
    currentSlideIndex += n;

    if (currentSlideIndex >= events[currentEventIndex].length) {
      currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
      currentSlideIndex = events[currentEventIndex].length - 1;
    }

    const galleryImage = $("#galleryImage");
    galleryImage.attr("src", events[currentEventIndex][currentSlideIndex]);
  };

  // ------------------------------------------------------------------------------------- waves problem -------------------------------------------------------------
  //   uneori waves nu se afiseaza corect
  //  de aceia dam ca un fel de reload la svg
  function forceSVGRerenderById(id) {
    const svg = $("#" + id);
    if (svg) {
      svg.css("display", "none");
      svg[0].getBoundingClientRect();
      svg.css("display", "block");
    }
  }

  forceSVGRerenderById("wave1");
});
