/* Modo Escuro do site */
let darkmode = document.getElementById('trilho')
let body = document.querySelector('body')

darkmode.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
});

/* Efeito Cursor */
var isClicking = false;
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e){
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

document.addEventListener("mousedown", function() {
    isClicking = true;
    cursor2.style.transform = "translate(-50%, -50%) scale(3)";
    cursor2.style.transition = ".3s";
});

document.addEventListener("mouseup", function() {
    isClicking = false;
    cursor2.style.transform = "translate(-50%, -50%)";
});

document.addEventListener("mousemove", function(e) {
    if (isClicking) {
        cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px; transform: translate(-50%, -50%) scale(3); transition: .5s;";
    } else {
        cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    }
});
