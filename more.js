document.addEventListener("DOMContentLoaded", function () {
            // Animate Sections
            if (typeof anime !== "undefined") {
                anime({
                    targets: ".animated-section",
                    opacity: [0, 1],
                    translateY: [20, 0],
                    delay: anime.stagger(200),
                    duration: 800,
                    easing: "easeOutQuad",
                });

                anime({
                    targets: ".icon-animate i, .icon-animate img",
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    delay: anime.stagger(100),
                    duration: 500,
                    easing: "easeOutQuad",
                });
            }

            // Mobile Menu Toggle
            const menuToggle = document.querySelector(".menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");
        let isMenuOpen = false;

    menuToggle.addEventListener("click", () => {
        if (!isMenuOpen) {
            mobileMenu.classList.remove("hidden");
            anime({
                targets: mobileMenu,
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 400,
                easing: 'easeOutQuad'
            });
        } else {
            anime({
                targets: mobileMenu,
                opacity: [1, 0],
                translateY: [0, -20],
                duration: 300,
                easing: 'easeInQuad',
                complete: () => {
                    mobileMenu.classList.add("hidden");
                }
            });
        }
        isMenuOpen = !isMenuOpen;
    });

            // Expand Image Function
            document.querySelectorAll(".expandable-img").forEach((img) => {
    img.addEventListener("click", function () {
        const overlay = document.createElement("div");
        overlay.className = "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50";

        overlay.innerHTML = `
            <div class="relative">
                <img src="${this.src}" alt="${this.alt}" class="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg cursor-zoom-out">
                <button class="absolute top-2 right-2 text-white text-3xl font-bold">&times;</button>
            </div>
        `;
        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";

        overlay.querySelector("button").addEventListener("click", () => {
            document.body.style.overflow = "auto";
            overlay.remove();
                    });
                });
            });
        });


        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#ffffff"
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "random",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes": {
                    "repulse": {
                        "distance": 100
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
        