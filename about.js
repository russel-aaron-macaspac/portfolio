anime.timeline({ easing: 'easeOutExpo', duration: 1000 })
            .add({
                targets: "#profile-photo",
                opacity: [0, 1],
                scale: [0.5, 1]
            })
            .add({
                targets: "#name",
                opacity: [0, 1],
                translateY: [-20, 0]
            }, "-=500")
            .add({
                targets: "#description",
                opacity: [0, 1],
                translateY: [-20, 0]
            }, "-=500");

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

        // Initialize particles.js with a minimalistic effect
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