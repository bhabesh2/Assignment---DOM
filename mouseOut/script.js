
const text = document.querySelector(".text");

let original = text.innerHTML;

let hashoverd = false;

text.addEventListener("mouseout",()=>{
    if(!hashoverd){
        text.innerHTML = "mouseout done";
        hashoverd = true;
    }
    // else if(hashoverd){
    //     text.innerHTML = original;
    //     hashoverd = false;
    // }

})