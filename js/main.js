(() => {

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const navLinks = document.querySelectorAll("#main-header #portfolionav p a");

const burgerIcon = document.getElementById('burger');
const navItems = document.getElementById('navItems');

function scrollLink(e) {
    e.preventDefault();
    console.log(e.currentTarget.hash);
    let selectedLink = e.currentTarget.hash;
    gsap.to(window, {duration: 1, scrollTo:{y:`${selectedLink}`, offsetY:100 }});
}

gsap.to("#dedication", 3,
{scrollTrigger:{
    toggleActions: "play pause resume reset"
}, x:100, ease: Bounce.easeOut
})

navLinks.forEach((link) => {
    link.addEventListener("click", scrollLink);
})

burgerIcon.addEventListener('click', function () {
    // Toggle the visibility of the navigation items
    navItems.style.display = (navItems.style.display === 'none' || navItems.style.display === '') ? 'block' : 'none';
});



})();