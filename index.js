// typed.js stuff
let typed = new Typed('#hello', options = {
    strings: ["Hello!"],
    typeSpeed: 40,
    startDelay: 1700,
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
  // animate navbar fadein
  anime({
    targets: "#navbar",
    keyframes: [
      {opacity: "0", duration: 0},
      {opacity: "100%"}
    ],
    duration: 5000,
    loop: false,
    easing: "easeOutQuart"
  });
  // NAME animation
  anime({
    targets: "#name",
    keyframes: [
        {translateX: -1000, duration: 0},
        {translateX: 1, delay: 100}
    ],
    duration: 3000,
    delay: 500,
    loop: false,
    easing: "easeOutQuart"
  });
  // animate the "web developer" text
  anime({
    targets: "#webdeveloper",
    keyframes:[
      {opacity: "0%", translateY: "+=50", duration: 0},
      {opacity: "100%", translateY: 0}
    ],
    duration: 2000,
    delay: 1000,
    loop: false,
    easing: "easeOutCubic"
  });
  // animate the linkedin logo fadein
  anime({
      targets: "#linkedin img",
      keyframes: [
        {translateY: "-200%", duration: 0},
        {translateY: "0%"}
    ],
    duration: 2000,
    delay: 1000,
    loop: false,
    easing: "easeInOutCubic"
  });
  // animate the typedjs greeting
  anime({
    targets: "#greeting",
    keyframes: [
      {opacity: "0%", duration: 0},
      {opacity: "100%"}
  ],
  duration: 2000,
  delay: 1000,
  loop: false,
  easing: "easeInOutCubic"
  });
  // animate the firsttext div
  anime({
    targets: "#firsttext",
    keyframes: [
      {opacity: "0%", duration: 0},
      {opacity: "100%"}
  ],
  duration: 10000,
  delay: 2000,
  loop: false,
  easing: "easeOutExpo"
  });
  // animate the buttons to fadein
  anime({
    targets: ".empty",
    keyframes: [
      {opacity: "0%", duration: 0},
      {opacity: "100%"}
  ],
  duration: 2000,
  delay: 3000,
  loop: false,
  easing: "easeOutQuint"
  });
  //  animate the first headline to come in alongside typed.js
  anime({
    targets: "#headline",
    keyframes: [
        {width: "0%", duration: 0},
        {width: "87%", delay: 100}
    ],
    duration: 3000,
    delay: 2000,
    loop: false,
    easing: 'easeInOutQuint'
  });
  // animate the abit and aboutme sections sliding in from the left
  anime({
    targets: "#abit",
    keyframes: [
      {translateX: "-=1000", duration: 0},
      {translateX: "0"}
    ],
    duration: 3000,
    delay: 2000,
    loop: false,
    easing: "easeOutQuint"
  });
  anime({
    targets: "#aboutme",
    keyframes: [
      {translateX: "-=1000", duration: 0},
      {translateX: "0"}
    ],
    duration: 3000,
    delay: 2000,
    loop: false,
    easing: "easeOutQuint"
  });
  // animate the rest of the content in the page to translate up and fade in
  anime({
    targets: "#restofcontent",
    keyframes: [
        {translateY: 1000, opacity: "0%", duration: 0},
        {translateY: 0, opacity: "100%", delay: 100}
    ],
    duration: 3000,
    delay: 2500,
    loop: false,
    easing: "easeOutSine"
  });
};
animate()

