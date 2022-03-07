// typed.js stuff
let typed = new Typed('#hello', options = {
    strings: ["Hello!"],
    typeSpeed: 40,
    startDelay: 1000,
    backSpeed: 70,
    showCursor: true,
    cursorChar: "_",
    shuffle: true,
    fadeOut: true,
    fadeOutDelay: 700
    }
);

// display alert if resolution is above our current highest supported
function checkRes(){
    if(screen.width > 2560 || screen.width < 320){
        alert("Your resolution is currently unsupported on my website at a screen width of " + screen.width + "px. Some elements may not render or position correctly. Sorry about that I'm still working on it.");
    }
}
checkRes();

function animate(){
//  animate the first headline to come in alongside typed.js
    anime({
    targets: "#headline",
    keyframes: [
        {width: "0%", duration: 0},
        {width: "87%", delay: 100}
    ],
    duration: 3000,
    loop: false,
    easing: 'easeInOutCubic'
  });

// NAME
  anime({
    targets: "#name",
    keyframes: [
        {translateX: -1000, duration: 0},
        {translateX: 1, delay: 300}
    ],
    duration: 2000,
    loop: false,
    easing: "easeOutElastic"
  });

// animate the linkedin logo fadein
  anime({
      targets: "#linkedin img",
      keyframes: [
        {opacity: 0, duration: 0},
        {opacity: 100, delay: 100}
    ],
    duration: 8000,
    loop: false,
    easing: "easeInOutCubic"
  })
}
animate()
