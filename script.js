// const page1 = document.getElementById("heading");

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

// document.onscroll = function() {
//     if (window.scrollY > window.innerHeight * 0.42) {
//         let page2 = document.getElementById("heading");
//         page2.style.display = "block";
//         page2.style.animation = "fadeIn 5s";
//         console.log("loaded2");
//     }
//     if (page2.style.display === "block" && window.scrollY > 1.34*window.innerHeight) {
//         const page3 = document.getElementById("page3");
//         page3.style.display = "block";
//         page3.style.animation = "fadeIn 3s";
//         console.log("loaded3");
//     }
// }
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".bg-transparent").css("background" , "blue");
        }
  
        else{
            $(".bg-transparent").css("background" , "#333");  	
        }
    })
  })