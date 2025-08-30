document.addEventListener('DOMContentLoaded', function() {
    function mouseOn(container, image) {
        container.style.border="thick solid gold";
        image.style.border="none";
    }
    function mouseOff(container, image) {
        container.style.border="none";
        image.style.border="8px solid black";
    }

    let images = document.querySelectorAll('.box');
    images.forEach((img) => {
        img.addEventListener('mouseover', () => mouseOn(img, img.firstElementChild));
        img.addEventListener('mouseout', () => mouseOff(img, img.firstElementChild));
    });

    let left = document.querySelector('#left')
    left.addEventListener('click', function(){
        location.href = "/trivia/index.html";
    });
    left.addEventListener('mouseover', function() {
        document.querySelector('#Pitt').style.transformOrigin="bottom center";
        document.querySelector('#Pitt').style.transform="scale(2.5)";
    });
    left.addEventListener('mouseout', function() {
        document.querySelector('#Pitt').style.transformOrigin="center center";
        document.querySelector('#Pitt').style.transform="scale(1)";
    });

    let middle = document.querySelector('#middle')
    middle.addEventListener('click', function(){
        location.href = "https://www.linkedin.com/in/ryan-howe-b8230034b/";
    });

    let right = document.querySelector('#right')
    right.addEventListener('click', function(){
        location.href = "/hockey/stats.html";
    });

    let closedEyes = false;
    let bottom = document.querySelector('#bottom');
    let closed = document.querySelector('#closed');
    let open = document.querySelector('#open');
    bottom.addEventListener('click', function() {
        closedEyes = !closedEyes;
        if (closedEyes)
        {
            closed.style.opacity = "0";
            open.style.opacity = "1";
        }
        else
        {
            closed.style.opacity = "1";
            open.style.opacity = "0";
        }
    });
});
