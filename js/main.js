(() => {

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const navLinks = document.querySelectorAll("#main-header #portfolionav p a");

function scrollLink(e) {
    e.preventDefault();
    console.log(e.currentTarget.hash);
    let selectedLink = e.currentTarget.hash;
    gsap.to(window, {duration: 1, scrollTo:{y:`${selectedLink}`, offsetY:100 }});
}

gsap.to("#slogan", 3,
{scrollTrigger:{
    toggleActions: "play pause resume reset"
}, x:100, ease: Bounce.easeOut
})

navLinks.forEach((link) => {
    link.addEventListener("click", scrollLink);
})



})();