/**
 * Mobile Navigation Functionality
 **/
var mobileNav = document.getElementsByClassName("mobile-nav");
var mobileNavBtn = document.getElementsByClassName("hamburger");
var mobileNavBtnClose = document.getElementsByClassName("hamburger-close");

mobileNavBtn[0].addEventListener('click', function() {
  this.classList.toggle("is-active");
  mobileNav[0].classList.toggle("dn");
)};
