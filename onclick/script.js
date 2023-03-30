
const bulb = document.querySelector(".bulb");

const button = document.querySelector("button");


button.addEventListener("click", () => {
    if (bulb.style.backgroundColor === "white") {
      bulb.style.backgroundColor = "greenyellow";
      bulb.style.boxShadow = "0 0 20px 20px greenyellow";
      button.textContent = "Off";
    } else {
      bulb.style.backgroundColor = "white";
      bulb.style.boxShadow = "none";
      button.textContent = "On";
    }
  });