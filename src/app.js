// every dependency has to be imported here
// css, scss, image, fonts etc.
import bulma from "./assets/scss/bulma.scss"; // main bulma styles

window.onscroll = function() {scrollFunction()};

var nav = document.getElementById("main-nav")

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.classList.add('shrinked');
   
  } else {
    nav.classList.remove('shrinked');
  }
}