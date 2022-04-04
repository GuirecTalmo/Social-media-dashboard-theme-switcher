const switcher = document.getElementById('switch');
switcher.addEventListener("click", modeSwitch);


function modeSwitch() {

  let rootElement = document.body;
  rootElement.classList.toggle("lightMode");

  let bannerElement = document.getElementById('banner-bg');
  bannerElement.classList.toggle("main-light-panel");

  let cardElement = document.querySelectorAll('.card');

  for (const cards of cardElement) {

    cards.classList.toggle("lightModeCard");
  
  }

  let subCardElement = document.querySelectorAll('.subcard');

  for (const subcards of subCardElement) {

    subcards.classList.toggle("lightSubcard");
  
  }

}