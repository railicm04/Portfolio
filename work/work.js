/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileMenuToggle =
    document.getElementById("mobileMenuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

if (mobileMenuToggle && mobileMenu) {

    mobileMenuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        const icon =
            mobileMenuToggle.querySelector("i");

        if (mobileMenu.classList.contains("active")) {

            icon.classList.remove("bi-list");
            icon.classList.add("bi-x-lg");

        } else {

            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");

        }

    });


    // Close menu after clicking a link

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            const icon =
                mobileMenuToggle.querySelector("i");

            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");

        });

    });

}


/* =========================================
   WORK FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const categorySections =
    document.querySelectorAll("[data-category-section]");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        // Active button

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        // Show / hide categories

        categorySections.forEach(section => {

            const category =
                section.dataset.categorySection;

            if (
                filter === "all" ||
                filter === category
            ) {

                section.style.display = "";

                requestAnimationFrame(() => {

                    section.style.opacity = "1";
                    section.style.transform =
                        "translateY(0)";

                });

            } else {

                section.style.opacity = "0";
                section.style.transform =
                    "translateY(15px)";

                setTimeout(() => {

                    section.style.display = "none";

                }, 300);

            }

        });

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealItems =
    document.querySelectorAll(
        ".work-category, .work-contact, .work-footer"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );


revealItems.forEach(item => {

    item.classList.add("reveal");

    revealObserver.observe(item);

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
    document.querySelector(".work-nav");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    },
    {
        passive: true
    }
);