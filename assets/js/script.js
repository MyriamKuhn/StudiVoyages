const navbar = document.querySelector(".navbar-scroll")

window.onscroll = () => {
    if(window.pageYOffset>200){
        navbar.classList.remove("bg-opacity-10")

        scrollTopButton.classList.add("show")
    }
    else{
        navbar.classList.add("bg-opacity-10")

        scrollTopButton.classList.remove("show")
    }
}

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
