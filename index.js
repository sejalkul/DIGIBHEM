const head = document.querySelector("header");

window.addEventListener ("scroll", function(){
    head.classList.toggle ("sticky", this.window.scrollY > 0);
})

