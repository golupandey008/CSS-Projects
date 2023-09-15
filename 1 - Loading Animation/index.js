
const mainBox = document.querySelector(".container");

const percentage = document.querySelector("#percent");

let percentageValue = 0;

let increment = setInterval(() => {
     percentageValue++;
     percentage.innerHTML = `${percentageValue}%`;

     if(percentageValue == 100) {
          clearInterval(increment);
          mainBox.classList.remove("active");
     }
}, 100)
