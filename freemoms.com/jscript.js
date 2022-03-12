var head = document.querySelector('.head');

var btn1 = document.getElementById('btn1');
var ctxt = document.getElementById('confirm');
var fpage = document.querySelector('.fpage');

var video = document.getElementById('video');
var btn2 = document.getElementById('btn2');
var btn2C = document.querySelector('.btn2');

function compareRR(){
    if(String(document.getElementById('codigo').value) == "7425-7655"){
        btn1.disabled = true;
        ctxt.style.opacity = "1";
        fpage.classList.add("removed");
    }
}

fpage.addEventListener("transitionend", () =>
{
    fpage.remove();
    btn2.disabled = false;
    // btn2.classList.add("discover");
    btn2C.classList.add("discover");
});

function playRR(){
    if(video.paused){
        head.remove();
        video.play();
        btn2.style.opacity = "0";
        video.style.opacity = "1";
    }
}