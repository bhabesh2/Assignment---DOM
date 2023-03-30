

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
let count = 0;

increment.addEventListener("click",()=>{
    count++;
    result.textContent = count;
});

decrement.addEventListener("click",()=>{
    count--;
    result.textContent = count;
});

reset.addEventListener("click",()=>{
    count = 0;
    result.textContent = 0;
});