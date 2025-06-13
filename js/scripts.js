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
        // Avoid activating anything if we're in the header area (e.g., scrollY < 300)
        if (window.scrollY < 300) {
            navLinks.forEach(link => link.classList.remove('active'));
            return;
        }

        let index = sections.length;
        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach(link => link.classList.remove('active'));
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    };

    activateLink(); // Run on load
    window.addEventListener('scroll', activateLink); // Run on scroll

    // === 3. Bootstrap ScrollSpy (Optional if using custom logic above) ===
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

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

    // === 5. SimpleLightbox for Portfolio Images ===
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});


document.addEventListener("DOMContentLoaded", function () {
    let serviceItems = document.querySelectorAll(".service-item");

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
        observer.observe(item);
    });


    let aboutItems = document.querySelectorAll(".about-item");

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
        observer2.observe(item);
    });



    let fadeItems = document.querySelectorAll(".fade-in-item");

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
        observer3.observe(item);
    });

    let timelinePanels = document.querySelectorAll(".timeline-panel");

    // Create an Intersection Observer instance
    let observer4 = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // If the element is intersecting (in view)
                if (entry.isIntersecting) {
                    // Check if the parent li has the 'timeline-inverted' class
                    const parentLi = entry.target.closest('li');
                    if (parentLi && parentLi.classList.contains('timeline-inverted')) {
                        // Add slide-in-right class for inverted panels
                        entry.target.classList.add("slide-in-right");
                    } else {
                        // Add slide-in-left class for non-inverted panels
                        entry.target.classList.add("slide-in-left");
                    }
                    // Stop observing once animated
                    observer4.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the item is visible
    );

    timelinePanels.forEach((panel) => {
        observer4.observe(panel);
    });

});
