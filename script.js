'use strict';
const btn = document.querySelector('.btn'),
    menu = document.querySelector('.menu__list');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    btn.classList.toggle('active');
})

// ===============slider===============/

const images = document.querySelectorAll('.pic'),
    slideWindow = document.querySelector('.pictures'),
    slider = document.querySelector('.slider__block'),
    btns = document.querySelectorAll('.control__btn');
let width,
    count = 0;

function mySize() {
    width = slideWindow.offsetWidth;
    images.forEach(item => item.style.width = width + 'px');
    slider.style.width = width * images.length + 'px';
    roll(); 
}
mySize();

window.addEventListener('resize', mySize);

btns[1].addEventListener('click', () => {
    count++
    if (count > images.length - 1) {
        count = 0;
        roll();
    } else {
        roll(); 
    }
    
})
btns[0].addEventListener('click', () => {
    count--
    if (count < 0) {
        count = images.length - 1;
        roll(); 
    } else {
        roll(); 
    }
})

function roll() {
    slider.style.transform = `translate(-${count * width}px)` 
}