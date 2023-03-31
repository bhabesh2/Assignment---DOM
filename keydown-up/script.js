
const text = document.querySelector(".text");

document.addEventListener("keydown",(event)=> {
    text.innerHTML = `you have selected keydown ${event.key}`;
});

document.addEventListener("keyup",(event)=> {
    text.innerHTML = `this is keyUP ${event.key}`;
});


/* note:::// keydown
// The keydown event is fired when a key is pressed

//keyup
// The keyup event is fired when a key is released.:::note */