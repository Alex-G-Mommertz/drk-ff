// every dependency has to be imported here
// css, scss, image, fonts etc.
import bulma from "./assets/scss/bulma.scss"; 
import "./assets/scss/animate.min.css";// main bulma styles
import Animate from 'animate.js';

window.onscroll = function() {scrollFunction()};

var nav = document.getElementById("main-nav")
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.classList.contains('hidden')) {
      panel.classList.add('show');
      panel.classList.remove('hidden')
    } else {
      panel.classList.remove('show');
      panel.classList.add('hidden')
    } 
  });
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.classList.add('shrinked');
   
  } else {
    nav.classList.remove('shrinked');
  }
}


function initAnimateJs() {

  var animate = new Animate({        
    target: '[data-animate]',
    animatedClass: 'js-animated',
    offset: [0.5, 0.5],
    delay: 0,
    remove: true,
    scrolled: false,
    reverse: false,
    onLoad: true,
    onScroll: true,
    onResize: false,
    disableFilter: false,
    callbackOnInit: function() {},
    callbackOnInView: function(el) {},
    callbackOnAnimate: function(el) {},
});
animate.init();

}

initAnimateJs();