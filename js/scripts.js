/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', () => {
    // === 1. Navbar Shrink Function ===
    const navbarShrink = () => {
        const navbar = document.querySelector('#mainNav');
        if (!navbar) return;
        if (window.scrollY === 0) {
            navbar.classList.remove('navbar-shrink');
        } else {
            navbar.classList.add('navbar-shrink');
        }
    };

    navbarShrink(); // Run on load
    document.addEventListener('scroll', navbarShrink); // Run on scroll


    // === 2. Activate Nav Link on Scroll ===
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const activateLink = () => {
        const viewportOffset = 300; 
        navLinks.forEach(link => link.classList.remove('active'));

        let activeSectionId = null;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();

            if (rect.top <= viewportOffset && rect.bottom > 0) {
                activeSectionId = section.id;
                break; 
            }
        }

        if (activeSectionId) {
            const targetNavLink = document.querySelector(`.nav-link[href="#${activeSectionId}"]`);
            if (targetNavLink) {
                targetNavLink.classList.add('active');
            }
        }
    };

    // Run the function on page load and whenever the user scrolls
    activateLink();
    window.addEventListener('scroll', activateLink);

    // === 4. Collapse Navbar on Link Click (Mobile Only) ===
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
    responsiveNavItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    /*
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });*/

});


document.addEventListener("DOMContentLoaded", function () {
    // Service items
    let serviceItems = document.querySelectorAll(".service-item");
    if (serviceItems.length) {
        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        serviceItems.forEach((item) => {
            if (item) observer.observe(item);
        });
    }

    // About items
    let aboutItems = document.querySelectorAll(".about-item");
    if (aboutItems.length) {
        let observer2 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        aboutItems.forEach((item) => {
            if (item) observer2.observe(item);
        });
    }

    // Fade items
    let fadeItems = document.querySelectorAll(".fade-in-item");
    if (fadeItems.length) {
        let observer3 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        fadeItems.forEach((item) => {
            if (item) observer3.observe(item);
        });
    }

    // Timeline panels
    let timelinePanels = document.querySelectorAll(".timeline-panel");
    if (timelinePanels.length) {
        let observer4 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const parentLi = entry.target.closest('li');
                        if (parentLi && parentLi.classList.contains('timeline-inverted')) {
                            entry.target.classList.add("slide-in-right");
                        } else {
                            entry.target.classList.add("slide-in-left");
                        }
                        observer4.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        timelinePanels.forEach((panel) => {
            if (panel) observer4.observe(panel);
        });
    }


    const contactForm = document.getElementById('contactForm');
    const formMessages = document.getElementById('formMessages');
    const submitButton = document.getElementById('submitButton');

    // Function to display messages
    function displayMessage(message, type) {
        formMessages.innerHTML = `<div class="p-3 mb-3 rounded-lg text-center ${type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">${message}</div>`;
        //zbris po 5 s
        setTimeout(() => {
            formMessages.innerHTML = '';
        }, 5000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // da ne vsakic reloada

            submitButton.disabled = true; 
            submitButton.textContent = 'Posiljanje...'; 
            formMessages.innerHTML = ''; 

            const formData = new FormData(this); //dobi data

            try {
                //tak basic ajax
                const response = await fetch(this.action, { 
                    method: this.method, //
                    body: formData,
                    headers: {
                        'Accept': 'application/json' 
                    }
                });

                const result = await response.json(); 

                if (response.ok) { 
                    displayMessage('Your message has been sent successfully!', 'success');
                    contactForm.reset(); 
                } else {
                    displayMessage(result.errors ? result.errors[0].message : 'There was an error sending your message. Please try again later.', 'error');
                }
            } catch (error) {
                console.error('Error:', error);
                displayMessage('There was an error sending your message. Please try again later.', 'error');
            } finally {
                submitButton.disabled = false; //spt lah posles
                submitButton.textContent = 'Pošlji'; 
            }
        });
    }
});