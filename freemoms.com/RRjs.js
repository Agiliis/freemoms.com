var video = document.getElementById('video');
var btn = document.getElementById('btn');

function playRR(){
    if(video.paused){
        video.play();
        btn.style.opacity = "0";
        video.style.opacity = "1";
    }
}
