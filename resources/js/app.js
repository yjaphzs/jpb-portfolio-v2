import './bootstrap';


document.addEventListener("DOMContentLoaded", function() {

    const coords = { x: 0, y: 0 };
    const pointerGradient = document.getElementById('pointer-gradient');

    pointerGradient.x = 0;
    pointerGradient.y = 0;

    window.addEventListener("mousemove", function(e) {
        coords.x = e.clientX;
        coords.y = e.clientY;

        if (window.innerWidth > 768) {
            gradientFollow();
        }
    });

    function gradientFollow() {
        let x = coords.x + "px";
        let y = coords.y + "px";
        pointerGradient.style.background = `radial-gradient(600px at ${x} ${y}, rgba(255, 179, 1, 0.10), transparent 80%)`;
    }

    const sections = document.querySelectorAll(".division");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const index = Array.from(sections).indexOf(entry.target);
            const navItem = document.querySelector(`#navigation-bar .nav-item:nth-child(${index + 1}) .nav-link`);

            console.log(entry.isIntersecting);
            if (entry.isIntersecting) {
                navItem.classList.add("active");
            } else {
                navItem.classList.remove("active");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const coverOverlay = document.getElementById("cover-overlay");

    coverOverlay.addEventListener("animationend", function() {
        coverOverlay.style.opacity = "0";
        coverOverlay.style.zIndex = "-1";
    });

    coverOverlay.addEventListener("webkitAnimationEnd", function() {
        coverOverlay.style.opacity = "0";
        coverOverlay.style.zIndex = "-1";
    });

    coverOverlay.addEventListener("oAnimationEnd", function() {
        coverOverlay.style.opacity = "0";
        coverOverlay.style.zIndex = "-1";
    });

    window.addEventListener("resize", function() {
        coverOverlay.classList.remove('fadeOut');
        coverOverlay.style.opacity = "1";
        coverOverlay.style.zIndex = "999";

        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function() {
            coverOverlay.classList.add('fadeOut');
        }, 250);
    });

    // Smooth scrolling for links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
