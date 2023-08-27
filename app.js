const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger")
const ham_open =  document.querySelector(".ham_open")
const ham_close =  document.querySelector(".ham_close")
const video = document.querySelector(".home_video");
const play = document.querySelector(".play")
const overlay = document.querySelector(".overlay")
const pause = document.querySelector("#myVideo")

hamburger.addEventListener("click",()=>{
    const visibility = menu.getAttribute("data-visible")
    if(visibility==="true"){
        ham_close.setAttribute("data-visible",false);
        ham_open.setAttribute("data-visible",false);
        menu.setAttribute("data-visible",false)
        
       }
   if(visibility==="false"){
    ham_close.setAttribute("data-visible",true);
    ham_open.setAttribute("data-visible",true);
    menu.setAttribute("data-visible",true)
   }
 
})
play.addEventListener("click",()=>{
   video.classList.add("show")
   overlay.classList.add("show")

})

    overlay.addEventListener("click",()=>{
        video.classList.remove("show")
        overlay.classList.remove("show")
        pause.pause();
    })
  

