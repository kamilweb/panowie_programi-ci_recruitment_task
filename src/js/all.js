window.onload = () => {
  // INIT ANIMATIONS
  TweenLite.to(".section__circles", 0.8, {
    opacity: 1,
    transform: "translateY(0)",
    ease: Power2.easeOut
  });
  TweenLite.to(".section__price", 0.8, {
    delay: 0.3,
    opacity: 1,
    transform: "translateY(0)",
    ease: Power2.easeOut
  });
  TweenLite.to(".section__form", 0.8, {
    delay: 0.6,
    opacity: 1,
    transform: "translateY(0)",
    ease: Power2.easeOut
  });

  // DESC SCROLL
  let desc = document.getElementById("desc");
  let form = document.getElementById("form");
  function scrollToForm() {
    let headerHeight = document.querySelector("header").offsetHeight;
    let sectionCirclesHeight = document.getElementsByClassName("section__circles")[0].offsetHeight;
    window.scroll({
      top: headerHeight + sectionCirclesHeight + 50,
      left: 0,
      behavior: "smooth"
    });
  }
  desc.addEventListener("click", scrollToForm);

  // FORM EVENTS AND VALIDATION
  let ticketsNumber = document.getElementById("ticketsNumber");
  let ticketsPrice = document.getElementById("ticketsPrice");
  function validateForm() {
    let name = document.getElementById("name");
    let nameRegExp = new RegExp("^[a-zA-Z_ ]*$");
    let ticketsNumberRegExp = new RegExp("^[0-9]+$");

    if (
      !nameRegExp.test(name.value) ||
      !ticketsNumberRegExp.test(ticketsNumber.value) ||
      name.value.length === 0 ||
      ticketsNumber.value === "0"
    ) {
      form.classList.add("error");
      if (!nameRegExp.test(name.value) || name.value.length === 0) {
        name.style.borderColor = "red";
      }
      if (!ticketsNumberRegExp.test(ticketsNumber.value) || ticketsNumber.value === "0") {
        ticketsNumber.style.borderColor = "red";
      }
      return false;
    } else {
      form.classList.add("success");
    }
  }

  function submitForm() {
    event.preventDefault();
    validateForm();
  }

  form.addEventListener("submit", submitForm);
  form.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      submitForm();
    }
  });

  ticketsNumber.addEventListener("change", () => {
    let number = Number(ticketsNumber.value);
    ticketsPrice.innerText = number * 20;
  });

  // BIG CIRCLE ANIMATION
  let body = document.querySelector("body");
  let request;
  let mouse = {
    x: 0,
    y: 0
  };
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;

  function update() {
    let dx = mouse.x - cx;
    let dy = mouse.y - cy;

    let tiltx = dy / cy;
    let tilty = -(dx / cx);
    let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    let degree = radius * 20;

    TweenLite.to("#animatedCircle", 0.5, {
      transform: "rotate3d(" + tiltx + ", " + tilty + ", 0, " + degree + "deg)",
      ease: Power2.easeOut
    });
    window.onresize = () => {
      cx = window.innerWidth / 2;
      cy = window.innerHeight / 2;
    };
  }

  body.addEventListener("mousemove", event => {
    mouse.x = event.pageX;
    mouse.y = event.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(update);
  });
};
