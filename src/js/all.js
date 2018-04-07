window.onload = () => {

  function scrollToForm() {
    let headerHeight = document.querySelector('header').offsetHeight;
    let sectionCirclesHeight = document.getElementsByClassName('section__circles')[0].offsetHeight;
    window.scroll({
      top: headerHeight + sectionCirclesHeight + 50,
      left: 0,
      behavior: 'smooth'
    });
  };

  document.getElementById("desc").addEventListener("click", scrollToForm);

};