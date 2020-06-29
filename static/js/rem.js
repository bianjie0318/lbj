function rem(){
    console.log(document.documentElement.clientWidth);
    
    document.documentElement.style.fontSize = document.documentElement.clientWidth/5.3 + "px";
}
rem()
window.onresize=rem;