// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//   trigger: "#background",
//   start: "top top", 
//   end: "bottom bottom",
 
// });

var body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'white';

        // trigger this function every time the user scrolls
        window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll >=1540) {
                // green
                body.style.backgroundColor = 'black';
            } else if (scroll >= 1540 && scroll < 1550) {
                // yellow
                body.style.backgroundColor = 'white';
            } else if (scroll >= 1550 && scroll < 1560) {
                // blue
                body.style.backgroundColor = 'black';
            } else if (scroll >= 1560 && scroll < 1570) {
                // orange
                body.style.backgroundColor = 'white';
            } else if (scroll >= 1570 && scroll < 1580) {
                // red
                body.style.backgroundColor = 'black';
            } else {
                // purple
                body.style.backgroundColor = 'white';
            }
        }