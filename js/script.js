const navButton = document.querySelector("#nav-icon1");
const mobileNav = document.querySelector(".mobile-menu");
const body = document.body;


const navButton2 = document.querySelector("#nav-icon2");
const mobileNav2 = document.querySelector(".sixthPage-header_mob");
// Клик по кнопке
navButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMobileNav();
})
navButton2.addEventListener("click", function (event) {
    event.stopPropagation();
    navButton2.classList.toggle("open");
    mobileNav2.classList.toggle("active");
})
// // Клик по окну за пределами навигации
// window.addEventListener("click", function(){
//     if(body.classList.contains('no-scroll')){
//         toggleMobileNav();
//     }
// })
// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
})

function toggleMobileNav() {
    body.classList.toggle("no-scroll");
    navButton.classList.toggle("open");
    mobileNav.classList.toggle("mobile-nav-active");
}

// Анимация 
let animeItems = document.querySelectorAll('.anim-items');

if (animeItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let i = 0; i < animeItems.length; i++) {
            const animItem = animeItems[i];
            const animeItemHeight = animItem.offsetHeight;
            const animeItemOffset = offset(animItem).top;
            const animStart = 3;

            let animeItemPoint = window.innerHeight - animeItemHeight / animStart;

            if (animeItemHeight > window.innerHeight) {
                animeItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animeItemOffset - animeItemPoint) && scrollY < (animeItemOffset + animeItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

// Числовая анимация

window.addEventListener("load", windowload);

function windowload() {
    function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        if (digitsCounters) {
            digitsCounters.forEach(digitsCounter => {
                digitsCountersAnimate(digitsCounter);
            });
        }
    }


    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
        const startValue = parseInt(digitsCounter.innerHTML);
        const startPosition = 0;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    // digitsCountersInit();
    let options = {
        threshold: 0.3
    }

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
                if (digitsCountersItems.length) {
                    digitsCountersInit(digitsCountersItems);
                }
                // observer.unobserve(targetElement); // что-бы анимация повторно не запускалась
            }
        });
    }, options);

    let sections = document.querySelectorAll('.page_section');
    if (sections.length) {
        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// Swiper 

var swiper = new Swiper(".numberSwiper", {
    slidesPerView: 2,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
        425: {
            slidesPerView: 3,
        },
        920: {
            slidesPerView: 5,

        }
    }
});

var swiper = new Swiper(".imgSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,

        }
    }
});

var swiper = new Swiper(".partnersSwiper", {
    slidesPerView: 1,
    // centerInsufficientSlides: true,
    // centeredSlides: true,
    // spaceBetween: 30,
    // navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    breakpoints: {
        425: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        }
    }
});

