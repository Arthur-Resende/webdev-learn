let toggle = document.getElementsByClassName("toggle")[0];
let toggleBackground = document.getElementsByClassName("toggle-background")[0];
let toggleable = Array.from(document.getElementsByClassName("toggleable"));

function setDarkMode(element) {
    element.classList.toggle("dark-mode");
}

toggle.addEventListener("click", () => {
    toggleable.forEach(element => setDarkMode(element));
    toggleBackground.classList.toggle("active");
})