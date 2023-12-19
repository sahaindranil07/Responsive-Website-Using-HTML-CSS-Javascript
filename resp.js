burger=document.querySelector(".burger")
nav=document.querySelector(".nav")
nav2=document.querySelector('.nav2')
navlist=document.querySelector('.nav-list')

burger.addEventListener("click",()=>{
    nav2.classList.toggle('v')
    navlist.classList.toggle('v')
    nav.classList.toggle('h-nav')

})