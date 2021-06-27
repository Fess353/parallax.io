let wrapper = document.querySelector('.wrapper');
window.onload = function(){
  wrapper.classList.add('active')  
}

$(document).ready(function() {
    $('.parallax__list>li').addClass('layer');
    $('.parallax__list').parallax();
} )


