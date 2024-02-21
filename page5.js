gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#second",
  start: "top top", 
  end: "bottom -100px",
  pin: "#text"
});

