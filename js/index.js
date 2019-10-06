let dialog = document.querySelector('dialog');
document.querySelector('#show').addEventListener('click', ()=>dialog.show());
document.querySelector('#close').onclick = function() {
  dialog.close();
};
$('.carousel').carousel({
  interval: 2000
})
