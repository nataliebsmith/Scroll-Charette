
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
