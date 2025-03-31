var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
    menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
    menuBtn.classList.remove('active');
    menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
    if(window.scrollY > 120){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}

// Simple Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonials-item');

function showTestimonial(index) {
    testimonials.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize
showTestimonial(0);
setInterval(nextTestimonial, 5000);