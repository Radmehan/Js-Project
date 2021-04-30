let burger=document.querySelector(".burger");
let navBar=document.querySelector("#navBar");
let input=document.querySelector(".input");
let navList=document.querySelector(" .v-class-resp");

burger.addEventListener("click",()=>{
    navBar.classList.toggle('h-class-resp');
    navList.classList.toggle('v-class-resp');
    input.classList.toggle('v-class-resp');
})