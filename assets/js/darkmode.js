let darkmode = document.getElementById('trilho')
let body = document.querySelector('body')

darkmode.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})