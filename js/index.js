<<<<<<< HEAD
// // create slider
// let slides = document.querySelectorAll('#slides .slide');
// let currentSlide = 0;
// let slideInterval = setInterval(nextSlide, 2000);

// function nextSlide() {
//     slides[currentSlide].className = 'slide';
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].className = 'slide showing';
// }
// create clock
const clock = document.querySelector('#clock');
setInterval(()=>clock.innerText = (new Date()).toLocaleDateString(), 1000);

// dialog
=======
>>>>>>> 56897576b6f564d391f926a7b39e93038bf21f59
let dialog = document.querySelector('dialog');
document.querySelector('#show').addEventListener('click', ()=>dialog.show());
document.querySelector('#close').onclick = function() {
  dialog.close();
};
$('.carousel').carousel({
  interval: 2000
});
document.addEventListener('mouseover', function(){
 document.getElementById('logos').style.backgroundColor='green';
});