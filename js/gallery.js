(() => {

let galleryinfo = document.querySelectorAll(".projects a"),

lightbox = document.querySelector("#lightbox");


function loadprojects() {
    lightbox.querySelector(".lightboximg").src = 
    projects[this.dataset.img].picture;
    lightbox.querySelector(".lb_heading").textContent = 
    projects[this.dataset.img].title;
}

galleryinfo.forEach((proj) => proj.addEventListener("click",
loadprojects
));


let projects = {
    img1: {
        picture: "images/earbuds_pyderl_c_scale,w_1920.jpg",
        title: "Saba Earbuds",
    },
    img2: {
        picture: "images/f1_iju67f_c_scale,w_1920.jpg",
        title: "Formula 1",
    },

    img3: {
        picture: "images/swerve_a6yrwn_c_scale,w_1920.jpg",
        title: "Swerve Rebrand",
    }
}
})();
    
