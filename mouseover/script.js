

const para = document.querySelector(".para");
let hashoverd = false;
let originalText = para.innerHTML;

para.addEventListener("mouseover",()=>{
   if(!hashoverd){
     para.innerHTML = "mouseover done";
     hashoverd = true;
   }
   else if(hashoverd){
    para.innerHTML = originalText;
    hashoverd = false;
   }
})

