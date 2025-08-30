document.addEventListener('DOMContentLoaded', function() {
    let previous = document.querySelector('#previous');
    previous.addEventListener('click', function(){
    location.href = "../index.html";
    });
    let video = document.querySelector('#video');
    video.addEventListener('click', function(){
    location.href = "../hockey-video/hockey-video.html";
    });
});
