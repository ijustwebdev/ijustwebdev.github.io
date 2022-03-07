// typed.js stuff
let typed = new Typed('#hello', options = {
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

//  animate the first headline to come in alongside typed.js
anime({
    targets: "#headline",
    keyframes: [
        {scaleX: 0, duration: 0},
        {scaleX: 1, delay: 700}
    ],
    duration: 2000,
    loop: false,
    easing: 'easeInOutSine'
  });

// animate my name to slide in from the left
  anime({
    targets: "#name",
    keyframes: [
        {translateX: -1000, duration: 0},
        {translateX: 1, delay: 500}
    ],
    duration: 1000,
    loop: false,
    easing: "easeInOutSine"
  });
  // TODO: test animations for the divider headlines sliding in from right