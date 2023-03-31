
const text = document.querySelector(".text");

document.addEventListener("keypress",(event)=>{
    text.innerHTML = `you have selected ${event.key.toUpperCase()}`
})