'use strict';

(function(){
  const mainNavButton = document.querySelector('.main-nav__toggle');
  const mainNavList = document.querySelector('.logo-and-nav--close');

  const mainNavOpenToggle = () => {
    if (mainNavList.classList.contains('logo-and-nav--close')) {
      mainNavList.classList.remove('logo-and-nav--close');
      mainNavList.classList.add('logo-and-nav--opened');
    } else {
      mainNavList.classList.remove('logo-and-nav--opened');
      mainNavList.classList.add('logo-and-nav--close');
    }
  };

  mainNavButton.addEventListener('click', mainNavOpenToggle);
})();