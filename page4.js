let sections = gsap.utils.toArray("section"),
    currentSection = sections[0];

gsap.defaults({overwrite: 'auto', duration: 0.3});


gsap.set("body", {height: (sections.length * 100) + "%"});


sections.forEach((section, i) => {
  ScrollTrigger.create({
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,
    onToggle: self => self.isActive && setSection(section)
  });
});

function setSection(newSection) {
  if (newSection !== currentSection) {
    gsap.to(currentSection, {scale: 0.8, autoAlpha: 0})
    gsap.to(newSection, {scale: 1, autoAlpha: 1});
    currentSection = newSection;
  }
}

ScrollTrigger.create({
  start: 1,
  end: () => ScrollTrigger.maxScroll(window) - 1,
  onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
  onLeave: self => self.scroll(2)
}).scroll(2);