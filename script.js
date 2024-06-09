const btnMenu = document.querySelector(".btn");
const list = document.querySelector(".list");

btnMenu.addEventListener("click",()=>{
    list.classList.toggle("list-toggle");
    btnMenu.classList.toggle("btn-toggle");
})