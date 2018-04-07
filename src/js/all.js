window.onload = () => {
  let desc = document.getElementById("desc");
  let form = document.getElementById("form");
  let ticketsNumber = document.getElementById("ticketsNumber");
  let ticketsPrice = document.getElementById("ticketsPrice");

  // DESC SCROLL
  function scrollToForm() {
    let headerHeight = document.querySelector('header').offsetHeight;
    let sectionCirclesHeight = document.getElementsByClassName('section__circles')[0].offsetHeight;
    window.scroll({
      top: headerHeight + sectionCirclesHeight + 50,
      left: 0,
      behavior: 'smooth'
    });
  }
  desc.addEventListener("click", scrollToForm);

  // FORM EVENTS AND VALIDATION
  function validateForm(){
    let name = document.getElementById("name");
    let nameRegExp = new RegExp("^[a-zA-Z_ ]*$");
    let ticketsNumberRegExp = new RegExp("^[0-9]+$");

    if (!nameRegExp.test(name.value) || !ticketsNumberRegExp.test(ticketsNumber.value) || name.value.length === 0 || ticketsNumber.value === "0") {
      form.classList.add('error');
      if (!nameRegExp.test(name.value) || name.value.length === 0) {
        name.style.borderColor = "red";
      }
      if (!ticketsNumberRegExp.test(ticketsNumber.value) || ticketsNumber.value === "0") {
        ticketsNumber.style.borderColor = "red";
      }
      return false;
    } else {
      form.classList.add('success');
    }
  }

  function submitForm() {
    event.preventDefault();
    validateForm();
  }

  function formEnter(event) {
    (function pressEnter(event) {
      if (event.key === "Enter") {
        submitForm();
      }
    })(event);
  }

  form.addEventListener("submit", submitForm);
  form.addEventListener("keydown", formEnter);

  ticketsNumber.addEventListener("change", () => {
    ticketsPrice.innerText = ticketsNumber.value * 20;
  });
};