(() => {

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


const navLinks = document.querySelectorAll("#main-header #portfolionav p a");

const player =document.querySelector("video");
const videoControls= document.querySelector("#videocontrols");
const playButton = document.querySelector("#playbutton");
const pauseButton = document.querySelector("#pausebutton");
const stopButton = document.querySelector("#stopbutton");
const volumeSlider = document.querySelector("#changevol");

player.controls = false;
videoControls.classList.remove("hidden");

function playVideo() {
    player.play();
}

function pauseVideo() {
    player.pause();
}

function stopVideo() {
    player.pause();
    player.currentTime = 0;
}

function changeVolume() {
    player.volume = volumeSlider.value; 
    console.log(volumeSlider.value);
}


function scrollLink(e) {
    e.preventDefault();
    console.log(e.currentTarget.hash);
    let selectedLink = e.currentTarget.hash;
    gsap.to(window, {duration: 1, scrollTo:{y:`${selectedLink}`, offsetY:100, ease: "power2.inOut" }});
}




playButton.addEventListener("click", playVideo);
stopButton.addEventListener("click", stopVideo);
pauseButton.addEventListener("click", pauseVideo);
volumeSlider.addEventListener("change", changeVolume);

navLinks.forEach((link) => {
    link.addEventListener("click", scrollLink);
})

})();