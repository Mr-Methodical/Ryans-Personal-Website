document.addEventListener('DOMContentLoaded', function() {
    let previous = document.querySelector('#previous');
    previous.addEventListener('click', function(){
    location.href = "../hockey/stats.html";
    });
    let channel = document.querySelector('#channel');
    channel.addEventListener('click', function(){
    location.href = "https://www.youtube.com/channel/UCpRntUX2bJjgClRR37AM4eA";
    });
});
