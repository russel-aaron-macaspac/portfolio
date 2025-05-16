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



        // Typing Effect
        const text = "Want to see what I do?";
        const typingElement = document.getElementById("typing-text");
        let index = 0;

        function typeText() {
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            }
        }

        // Start the typing effect when the page loads
        window.onload = () => {
            typeText();
            
            // Animations using Anime.js
            anime({
                targets: '#profile-picture',
                opacity: [0, 1],
                scale: [0.5, 1],
                easing: 'easeInOutQuad',
                duration: 1500
            });

            anime({
                targets: '#hero-text',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeOutElastic(1, .8)',
                duration: 1500
            });

            anime({
                targets: '.hero p',
                opacity: [0, 1],
                translateY: [50, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: 500
            });

            anime({
                targets: '.hero a',
                opacity: [0, 1],
                translateY: [20, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: 1000
            });
        };

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