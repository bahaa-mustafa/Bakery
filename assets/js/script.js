

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".bg-style")
    const text = document.querySelectorAll(".text_nav")

    if (window.scrollY >= 20) {
        navbar.style.setProperty('background-color', 'rgb(255, 255, 255)', 'important');
        for (const element of text) {
            element.style.setProperty('color', 'rgba(2, 2, 2, 0.9)', 'important');
        }

    }
    else {
        navbar.style.setProperty('background-color', 'transparent', 'important');

        for (const element of text) {
            element.style.setProperty('color', '#fff', 'important');
        }
    }
}
)
