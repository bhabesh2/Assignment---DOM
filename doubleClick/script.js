const img1 = document.querySelector(".image-one");
const img2 = document.querySelector(".image-two");

img1.addEventListener("dblclick", () => {
  if (img1.style.display === "none") {
    img1.style.display = "block";
    img2.style.display = "none";
  } else {
    img2.style.display = "block";
  }
});

img2.addEventListener("dblclick", () => {
  if (img2.style.display === "none") {
    img2.style.display = "block";
    img1.style.display = "none";
  } else {
    img2.style.display = "none";
    img1.style.display = "block";
  }
});
;
