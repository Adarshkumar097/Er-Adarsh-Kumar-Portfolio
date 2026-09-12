const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, { threshold: 0.12 });


document.querySelectorAll(".reveal").forEach(el => {
    revealObserver.observe(el);
});


const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        if (window.scrollY >= section.offsetTop - 180) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );

    });

});


document.addEventListener("mousemove", e => {

    const glow = document.querySelector(".cursor-glow");

    if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    }

});


function placeholderLink(e) {

    e.preventDefault();

    alert("Add your GitHub / LinkedIn URL in index.html.");

}


function downloadResume(e) {

    e.preventDefault();

    alert("Replace this button's link with your resume PDF.");

}


const menuBtn = document.querySelector(".menu-btn");


menuBtn?.addEventListener("click", () => {

    const nav = document.querySelector("nav");

    const open = nav.style.display === "flex";

    nav.style.display = open ? "" : "flex";

    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "72px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "22px";
    nav.style.background = "rgba(5,10,19,.97)";

});
