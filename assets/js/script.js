const navbar = document.querySelector(".navbar-scroll")

window.onscroll = () => {
    if(window.pageYOffset>200){
        navbar.classList.remove("bg-opacity-10")
    }
    else{
        navbar.classList.add("bg-opacity-10")
    }
}