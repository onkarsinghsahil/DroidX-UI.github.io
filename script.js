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
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".navbar-default").css('background-color', '#f0f0f0');
        } else {
           $('.navbar-default').css('background-color', 'transparent');
        }
    });
     }
 });