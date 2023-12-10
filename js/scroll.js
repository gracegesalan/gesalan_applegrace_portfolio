(() => {
  
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#dedication',
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        markers: false,
        // toggleActions: 'onEnter '
    }
})

tl.from('#dedication',{
    x: 5200,
    opacity: 0
})

tl.to('#dedication', {
    x:-200,
    opacity: 1,
    
})

})();