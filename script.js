// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Contact form

document.querySelector("form").addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thanks for contacting me! 🚀");

});
