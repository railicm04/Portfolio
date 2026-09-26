/* =====================================================
   SITE CONFIGURATION
===================================================== */

const siteConfig = {

    name: "Milan Railić",

    email: "railic.m04@gmail.com",

    behance: "YOUR_BEHANCE_URL",

    linkedin: "YOUR_LINKEDIN_URL",

    instagram: "YOUR_INSTAGRAM_URL"

};


/* =====================================================
   NAVBAR
===================================================== */

const navbar = document.getElementById("mainNav");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const navCollapse =
    document.getElementById("navbarContent");


const mobileNavLinks =
    document.querySelectorAll(
        "#navbarContent .nav-link"
    );


mobileNavLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (
            window.innerWidth < 992 &&
            navCollapse.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(
                    navCollapse
                );

            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const navbarHeight =
                    navbar.offsetHeight;


                const targetPosition =
                    target.offsetTop -
                    navbarHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


/* =====================================================
   PROJECT LINKS
===================================================== */

const projectLinks =
    document.querySelectorAll(
        ".project-link"
    );


projectLinks.forEach(link => {

    link.addEventListener(
        "click",
        function (event) {

            const href =
                this.getAttribute("href");


            if (!href || href === "#") {

                event.preventDefault();

                alert(
                    "Project case study coming soon."
                );

            }

        }
    );

});


/* =====================================================
   DYNAMIC SOCIAL LINKS
===================================================== */

function setSocialLinks() {

    const socialLinks =
        document.querySelectorAll(
            ".social-links a"
        );


    if (socialLinks.length >= 3) {

        socialLinks[0].href =
            siteConfig.behance;

        socialLinks[1].href =
            siteConfig.linkedin;

        socialLinks[2].href =
            siteConfig.instagram;

    }

}


setSocialLinks();


/* =====================================================
   EMAIL LINKS
===================================================== */

function setEmailLinks() {

    const emailLinks =
        document.querySelectorAll(
            'a[href^="mailto:"]'
        );


    emailLinks.forEach(link => {

        link.href =
            `mailto:${siteConfig.email}`;

        link.textContent =
            siteConfig.email;

    });

}


setEmailLinks();


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateActiveNavigation();

    }
);