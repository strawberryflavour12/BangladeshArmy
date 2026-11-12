
// =========================
// 1. MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function() {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});


// =========================
// 2. CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");
        menuToggle.innerHTML = "☰";

    });

});


// =========================
// 3. HEADER SCROLL EFFECT
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =========================
// 4. BACK TO TOP BUTTON
// =========================

const topButton = document.createElement("button");

topButton.id = "topButton";
topButton.innerHTML = "↑";
topButton.title = "Back to Top";

document.body.appendChild(topButton);


window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// 5. AUTOMATIC COPYRIGHT YEAR
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================
// 6. CONTACT FORM VALIDATION
// =========================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

        formMessage.style.color = "red";

        return;

    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;

    }


    formMessage.textContent = "Your form is valid!";

    formMessage.style.color = "green";

    contactForm.reset();

});


// =========================
// 7. SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .activity-card, .news-card, .gallery-container, .contact-content"
);


revealElements.forEach(function(element) {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach(function(element) {

    observer.observe(element);

});


// =========================
// 8. ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// =========================
// 9. CONSOLE MESSAGE
// =========================

console.log("Bangladesh Army Website Loaded Successfully!");
console.log("JavaScript is Working!");
