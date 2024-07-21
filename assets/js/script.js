// On Scroll NavBar become white and Scroll To Top Button appears
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

//Function to toggle Password visibility and change the icon
const togglePassIcon = (props) => {
    const toggleIcon = props.icon
    const inputPassword = props.input
    if (inputPassword.type === "password") {
        inputPassword.type = "text"
        toggleIcon.classList.remove("bi-eye-slash")
        toggleIcon.classList.add("bi-eye")
    } else {
        inputPassword.type = "password"
        toggleIcon.classList.add("bi-eye-slash")
        toggleIcon.classList.remove("bi-eye")
    }
}

// Event Listener for toggle Password and Icon on Connect
const connectIcon = document.querySelector(".toggleIconConnect")

connectIcon.addEventListener("click", () => {
    togglePassIcon({
        icon: document.querySelector(".toggleIconConnect"),
        input: document.querySelector(".inputPasswordConnect"),
    })
})

// Event Listener for toggle Password and Icon on Subscribe
const subscribeIcon = document.querySelector(".toggleIconSubscribe")

subscribeIcon.addEventListener("click", () => {
    togglePassIcon({
        icon: document.querySelector(".toggleIconSubscribe"),
        input: document.querySelector(".inputPasswordSubscribe"),
    })
})

// Event Listener for toggle Password and Icon on Confirm
const confirmIcon = document.querySelector(".toggleIconConfirm")

confirmIcon.addEventListener("click", () => {
    togglePassIcon({
        icon: document.querySelector(".toggleIconConfirm"),
        input: document.querySelector(".inputPasswordConfirm"),
    })
})

//Function to validate password confirmation
const checkPassword = () => {
    if (document.querySelector(".inputPasswordSubscribe").value === document.querySelector(".inputPasswordConfirm").value) {
        document.querySelector(".inputPasswordConfirm").classList.remove("is-invalid")
        document.querySelector(".submitButton").disabled = false
    } else {
        document.querySelector(".inputPasswordConfirm").classList.add("is-invalid")
        document.querySelector(".submitButton").disabled = true
    }
}

document.querySelector(".inputPasswordConfirm").addEventListener ("input", checkPassword)
document.querySelector(".inputPasswordSubscribe").addEventListener ("input", checkPassword)