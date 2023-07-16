const burger = document.querySelector(".burger-img");
const burgerMenu = document.querySelector(".burger-menu")

burger.addEventListener("mouseover", () => {
    burger.classList.add("hover");
});

burger.addEventListener("mouseout", () => {
    burger.classList.remove("hover");
});

burger.addEventListener("click", ()=> {
    burgerMenu.classList.toggle("active")
    burger.classList.toggle("close")
    if(document.body.style.overflow !== "hidden") {
        document.body.style.overflow = "hidden"
    }else {
        document.body.style.overflow = "inherit"
    }
})
