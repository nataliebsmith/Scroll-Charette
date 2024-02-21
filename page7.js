document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(ScrollTrigger) 
    
      var timeline_options = {
        scrollTrigger: {
          trigger: ".rec",
          start: "top top", // this controls starting the animation when the top of container is at the top of the screen
          end: "bottom bottom", // this controls ending the animation when the bottom of container is at the bottom of the screen
          scrub: 0, // this controls animation timing relative to scroll
          // scrub: 1 // uncomment this value to delay animations
        //   repeat:trigger,
        },
      }
      var timeline = gsap.timeline(timeline_options);

      
    //   var timeline_options = {
    //     scrollTrigger: {
    //       trigger: "#secondrec",
        
    //       start: "top top", // this controls starting the animation when the top of container is at the top of the screen
    //       end: "bottom bottom", // this controls ending the animation when the bottom of container is at the bottom of the screen
    //       scrub: 0, // this controls animation timing relative to scroll
    //       // scrub: 1 // uncomment this value to delay animations
    //     },
    //   }
    //   var second = gsap.timeline(timeline_options);

    //   var timeline_options = {
    //     scrollTrigger: {
    //       trigger: ".",
        
    //       start: "top top", // this controls starting the animation when the top of container is at the top of the screen
    //       end: "bottom bottom", // this controls ending the animation when the bottom of container is at the bottom of the screen
    //       scrub: 0, // this controls animation timing relative to scroll
    //       // scrub: 1 // uncomment this value to delay animations
    //     },
    //   }
    //   var timeline = gsap.timeline(timeline_options);
    
    //   /** 
    //    * Now we have a timeline that controls animations. The timeline duration is equal to the height
    //    * of our .container based on the ScrollTrigger options we set. 
    //    * 
    //    * Next we can add animations to the timeline. By default, each animation we add to the timeline
    //    * will split up the duration of the timeline evenly. So if we start with 1 animation, it will
    //    * animate the entire length of our scroll.
    //    * 
    //    * If we want to time things differently, GSAP gives some options: 
    //    * (https://gsap.com/docs/v3/GSAP/Timeline/#positioning-animations-in-a-timeline)
    //    * 
    //    * Here I've added an animation to scale and rotate "#block-1"
    //    * 
    //    */
      timeline
        .to("#firstcirc", { 
          y : 600,
        },0.05)
    
    //   /**
    //    *  Uncomment sections below to add other animations
    //    *  You will start to notice durations and timing are important. 
    //    *  Here is some documentation for how duration works with ScrollTrigger
    //     * https://gsap.com/docs/v3/Plugins/ScrollTrigger/#how-does-duration-work-with-scrub-true
    //    */ 
      timeline
        .to("#secondcirc", {  
          y:600,
        }, 0.5)
    
      timeline
        .to("#thirdcirc", { 
        y:600,
        }, 1)
    
      // timeline
      //   .to("#block-4", {
      //     height: "+=200px"
      //   }, 2)
    
      // timeline
      //   .to("#block-5", { 
      //     backgroundColor: 'blue'
      //   })
    
    })