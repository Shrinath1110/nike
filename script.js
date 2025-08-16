document.addEventListener("DOMContentLoaded", function () {

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });


    var elems = document.querySelectorAll(".elem");
    var fixed = document.querySelector(".fixed-image");

    elems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            var image = elem.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
            fixed.style.display = "block";
        })

        elem.addEventListener("mouseleave", function () {
            fixed.style.display = "none";  // Hide the fixed image when the mouse leaves
        });
    })

})
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function menuanimation(){
    var manu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    manu.addEventListener("click",function(){
      if(flag == 0){
          full.style.top = 0
          navimg.style.opacity = 0
          flag = 1
      }else{
          full.style.top = "-100%"
          navimg.style.opacity = 1
          flag = 0
      }
   
    })
}
function loaderAnimation(){
    var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
    loader.style.display = "none"
},4200)
}
menuanimation()
loaderAnimation()



