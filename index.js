// typed.js 
var typed = new Typed('#hello', options = {
    strings: ["Hello!"],
    typeSpeed: 40,
    startDelay: 900,
    backSpeed: 70,
    showCursor: true,
    cursorChar: "_",
    shuffle: true,
    fadeOut: true,
    fadeOutDelay: 700
    }
);
// display alert if resolution is above our current highest supported
function checkResIfSupport(){
    if(screen.width > 1920){
        alert("Your resolution is currently unsupported on my website at a screen width of " + screen.width + "\
        px. Some elements may not render or position correctly. The largest currently supported width is 1920px. \
        Sorry about that I'm still working on it.");
    }
}
checkResIfSupport();
//  animations
anime({
    // Disabled while I work on getting typedjs working better
    // targets: '.links a',
    translateY: "-100px",
    duration: 1000
  });


