// document2.addEventListener("DOMContentLoaded", () => { 
    // var timeline_options = {
    //     scrollTrigger: {
    //       trigger: ".container",
    //       // pin: true, // uncomment this value to pin the "container" in the same spot while animating
    //       start: "top top", // this controls starting the animation when the top of container is at the top of the screen
    //       end: "bottom bottom", // this controls ending the animation when the bottom of container is at the bottom of the screen
    //       scrub: 0, // this controls animation timing relative to scroll
    //       // scrub: 1 // uncomment this value to delay animations
    //     },
    //   }
    // var timeline = gsap.timeline(timeline_options);
      gsap.to(".circcontent", {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax",
           start: "top bottom", // the default values
           end: "bottom top",
          scrub: true
        }, 
      });

      gsap.to("img", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax",
           start: "top bottom", // the default values
           end: "bottom top",
          scrub: true
        }, 
      });
// })