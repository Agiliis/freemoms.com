var head = document.querySelector('.head');
// var loader = document.getElementById('loader');

var btn1 = document.getElementById('btn1');
var ctxt = document.getElementById('confirm');
var fpage = document.querySelector('.fpage');

var video = document.getElementById('video');
var btn2 = document.getElementById('btn2');
var btn2C = document.querySelector('.btn2');

$(window).on("load",function(){
    $(".loading_wrapper").fadeOut(1000);
});

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
    head.remove();
    btn2.style.opacity = "0";
    video.style.opacity = "1";
    video.play();

    window.setTimeout(displayText1,2000);
    window.setTimeout(displayText2,4000);
    window.setTimeout(displayText3,6000);
    window.setTimeout(displayText4,9500);
}

function displayText1(){
    document.getElementById('funnyTxt1').innerHTML = "BOZO WAS RICKROLLED";
}

function displayText2(){
    document.getElementById('funnyTxt2').innerHTML = "BOZO == SARAH =<br>= ANYONE ELSE THAT<br> ENTERS THIS PAGE???";
}

function displayText3(){
    let txt3 = document.getElementById('funnyTxt3');
    txt3.innerHTML = "I DON'T FUCKING CARE";
    txt3.classList.add("funnyTxt3");
}

function displayText4(){
    document.getElementById('funnyTxt4').innerHTML = "Feliz aniversário ;)";
}


var md = new MobileDetect(window.navigator.userAgent);
var lndscp = window.matchMedia("(orientation: landscape)");
var btn2_cnt = document.getElementById('btn2_cnt');

if(md.mobile()!=null && lndscp.matches){
    btn2_cnt.classList.add("btn2M");
}




// console.log( detect );          // 'Sony'
// console.log( md.phone() );           // 'Sony'
// console.log( md.tablet() );          // null
// console.log( md.userAgent() );       // 'Safari'
// console.log( md.os() );              // 'AndroidOS'
// console.log( md.is('iPhone') );      // false
// console.log( md.is('bot') );         // false
// console.log( md.version('Webkit') );         // 534.3
// console.log( md.versionStr('Build') );       // '4.1.A.0.562'
// console.log( md.match('playstation|xbox') );