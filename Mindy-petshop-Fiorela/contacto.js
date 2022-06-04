var showNav = document.querySelector(".showNav")
var ulNav = document.querySelector("#ulNav")

showNav.addEventListener("click", () => {
    ulNav.classList.toggle("visually-hidden")
})