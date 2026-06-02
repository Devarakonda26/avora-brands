let lastScrollTop = 0;

const navbar =
document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;

    // HIDE NAVBAR ON SCROLL DOWN

    if (scrollTop > lastScrollTop &&
        scrollTop > 100) {

        navbar.style.top = "-90px";

    } else {

        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;


    // NAVBAR BACKGROUND EFFECT

    if (scrollTop > 50) {

        navbar.style.background =
        "rgba(5,11,26,0.98)";

        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background =
        "rgba(5,11,26,0.95)";

        navbar.style.boxShadow =
        "none";
    }

});


// AUTO CLOSE MOBILE MENU

document.querySelectorAll(".nav-link")
.forEach(link => {

    link.addEventListener("click", () => {

        const navbarCollapse =
        document.querySelector(".navbar-collapse");

        navbarCollapse.classList.remove("show");

    });

});