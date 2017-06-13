var navi = document.getElementById("navegadorId");
window.addEventListener("scroll", function(){
    
    if (document.body.scrollTop > 80) {
        navi.classList.add('cambiaNav');
    } else {
        navi.classList.remove('cambiaNav');
    }
});