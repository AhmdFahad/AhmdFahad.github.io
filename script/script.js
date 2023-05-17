setTimeout(nameAnimate, 1000);
function nameAnimate() {
    var nameElement = document.getElementById('name');
    nameElement.classList.add('animate');
    
}
function startAnimation() {
  setTimeout(function() {
    var iconContainer = document.getElementById('icon-container');
    iconContainer.classList.add('animate__fadeIn');
  }, 1000);
}
