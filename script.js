const page1 = document.getElementById("page1");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.onscroll = function() {
    if (window.scrollY > window.innerHeight * 0.42) {
        const page2 = document.getElementById("page2");
        page2.style.display = "block";
        page2.style.animation = "fadeIn 5s";
        console.log("loaded2");
    }
    if (page2.style.display === "block" && window.scrollY > 1.34*window.innerHeight) {
        const page3 = document.getElementById("page3");
        page3.style.display = "block";
        page3.style.animation = "fadeIn 3s";
        console.log("loaded3");
    }
}