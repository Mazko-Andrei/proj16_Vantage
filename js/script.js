const navButton = document.querySelector("#nav-icon1");
const mobileNav = document.querySelector(".mobile-menu");
const body = document.body;

// Клик по кнопке
navButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMobileNav();
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

            if(animeItemHeight > window.innerHeight){
                animeItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((scrollY > animeItemOffset - animeItemPoint) && scrollY < (animeItemOffset + animeItemHeight)){
                animItem.classList.add('active');
            } else {
                if(!animItem.classList.contains('anim-no-hide')){
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