let button = document.querySelector(".button");
let buttonText = document.querySelector(".button-text");

button.addEventListener("click", () => {
     button.classList.add("active");

     setTimeout(() => {
          button.classList.remove("active");
          document.querySelector("i").classList.replace("bx-cloud-download", "bx-check-circle");
          buttonText.innerHTML = "Complete";
     }, 6000)
});