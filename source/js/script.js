let toggle = document.querySelector(".toggle");
let popover = document.querySelector(".popover");
let header = document.querySelector(".header--nojs");

header.classList.remove("header--nojs");
popover.classList.remove("popover--nojs");

/*
toggle.addEventListener('click', function () {
  if (toggle.classList.contains('header__toggle-burger')) {
    toggle.classList.remove('header__toggle-burger');
    toggle.classList.add('header__toggle--close');
  } else {
    toggle.classList.add('header__toggle-burger');
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
*/

toggle.addEventListener("click", function () {
  toggle.classList.toggle("header__toggle-burger");
  toggle.classList.toggle("header__toggle--close");

  popover.classList.toggle("popover--close");
  popover.classList.toggle("popover--open");
})
