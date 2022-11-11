console.log('start');

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const randomColor = (() => {
    "use strict";
  
    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    return () => {
      var h = randomInt(0, 360);
      var s = randomInt(42, 98);
      var l = randomInt(40, 90);
      return `hsl(${h},${s}%,${l}%)`;
    };
  })();

window.addEventListener('load', function () {
    for (let c of document.querySelectorAll(".img-column")) {
        for (let i = 0; i < 10; i++) {
            console.log('hi')
            let d = document.createElement("div");
            d.style.height = randomNumber(15, 40) + "em";
            d.style.backgroundColor = randomColor();

            c.appendChild(d);
        }
    }
})
