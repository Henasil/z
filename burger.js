let condition = true;
let burger = $('.stick')

function forwards() {
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        backgroundColor: ['white', 'black'],
        color: 'white',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false
    burger.css("background-color", "black")
}

function backwards() {
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
    burger.css("background-color", "white")
}

$('.menu_small_icon').click(function () {
    if (condition) {
        forwards();
    } else {
        backwards();
    }
});

let links = document.querySelectorAll(".scroll");
let targetID;
links.forEach(function (element){
    element.addEventListener("click", function (event){
        event.preventDefault();
        targetID = element.getAttribute("href");
        document.querySelector(targetID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
})


$(document).ready(function () {
    $('.slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
    });
});