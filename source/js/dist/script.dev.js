"use strict";

let toggle = document.querySelector('.toggle');
let popover = document.querySelector('.popover');
toggle.addEventListener('click', function () {
  if (toggle.classList.contains('header__toggle--burger')) {
    toggle.classList.remove('header__toggle--burger');
    toggle.classList.add('header__toggle--close');
  } else {
    toggle.classList.add('header__toggle--burger');
    toggle.classList.remove('header__toggle--close');
  }
});
toggle.addEventListener('click', function () {
  if (popover.classList.contains('popover--close')) {
    popover.classList.remove('popover--close');
    popover.classList.add('popover--open');
  } else {
    popover.classList.add('popover--close');
    popover.classList.remove('popover--open');
  }
});
const slider = document.querySelector('.example__image-wrapper');
const before = slider.querySelector('example__picture--before');
//# sourceMappingURL=script.dev.js.map
