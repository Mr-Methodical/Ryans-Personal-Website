document.addEventListener('DOMContentLoaded', function() {
    function step1(container, image) {
        document.querySelector(container).style.border="medium solid #0077b5";
        document.querySelector(image).style.border="none";
    }
    function step2(container, image) {
        document.querySelector(container).style.border="none";
        document.querySelector(image).style.border="medium solid #EFBF04";
    }

    let CenterImage = document.querySelector('.image-container')
    CenterImage.addEventListener("mouseover", () => step1('.image-container', '#Ryan'));
    CenterImage.addEventListener("mouseout", () => step2('.image-container', '#Ryan'));
    CenterImage.addEventListener("click", function() {
        location.href = "https://www.linkedin.com/in/ryan-howe-b8230034b/";
    });

    let CenterImage1 = document.querySelector('#image-container1')
    CenterImage1.addEventListener("mouseover", () => step1('#image-container1', '#Ryan1'));
    CenterImage1.addEventListener("mouseout", () => step2('#image-container1', '#Ryan1'));
    CenterImage1.addEventListener("mouseover", function() {
        document.querySelector('#Ryan1').style.transformOrigin="bottom center";
        document.querySelector('#Ryan1').style.transform="scale(2.5)";
    });
    CenterImage1.addEventListener("mouseout", function() {
        document.querySelector('#Ryan1').style.transformOrigin="center center";
        document.querySelector('#Ryan1').style.transform="scale(1)";
    });
    CenterImage1.addEventListener("click", function() {
        location.href = "/trivia/index.html";
    });

    let CenterImage2 = document.querySelector('#image-container2')
    CenterImage2.addEventListener("mouseover", () => step1('#image-container2', '#Ryan2'));
    CenterImage2.addEventListener("mouseout", () => step2('#image-container2', '#Ryan2'));
    CenterImage2.addEventListener("mouseover", () => step1('#image-container2', '#Ryan3'));
    CenterImage2.addEventListener("mouseout", () => step2('#image-container2', '#Ryan3'));
    let showingOpen = true;
    document.querySelector("#button").addEventListener("click", function() {
        showingOpen = !showingOpen;
        document.querySelector("#Ryan2").style.display = showingOpen ? "block" : "none";
        document.querySelector("#Ryan3").style.display = showingOpen ? "none" : "block";
    });
});
