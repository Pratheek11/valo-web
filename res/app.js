const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-toggle');

        navlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navFadeIn 0.5s ease forwards ${index / 7 + 0.7}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

let progress = document.getElementById('progress-bar');
let totalWidth = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressWidth = (window.pageYOffset / totalWidth) * 100;
    progress.style.width = progressWidth + '%';
}

const tl = gsap.timeline({ defaults : { ease: "power1.out"}});


tl.to('.text' , {y: '0%', duration: 1});
tl.to('.intro' , {y: '-100%', duration: 1.2, delay: 0.3});
tl.to('.slider' , {y: '-100%', duration: 3}, "-=1.3");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1}, "-=0.5");
tl.fromTo('.big-text', {opacity: 1}, {opacity: 0, duration: 0.5}, "-=2.5");


var counter = 1;
var setinterval = setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>4){
        counter = 1;
    }
}, 4000);