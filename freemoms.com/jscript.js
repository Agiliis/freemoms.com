var btn1 = document.getElementById('btn1');
var ctxt = document.getElementById('confirm');
var cnt = document.querySelector('#code_display');

function compareRR(){
    if(String(document.getElementById('codigo').value) == "7425-7655"){
        btn1.disabled = true;
        ctxt.style.opacity = "1";
        cnt.classList.add("removed");
    }
}

cnt.addEventListener("transitionend", () =>
{
    cnt.remove();
    var loadingGif = document.createElement("IMG");
    loadingGif.setAttribute(src, "loading.jpg");
    loadingGif.setAttribute("width", "304");
    loadingGif.setAttribute("height", "228");
    document.body.appendChild(loadingGif);
});