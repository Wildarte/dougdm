var n = 0;
var txt = "Ouvir. Entender. Melhorar.";
var speed = 100;

function typeWriter() {
    if (n < txt.length) {
        document.getElementById("title_intro").innerHTML += txt.charAt(n);
        n++;
        setTimeout(typeWriter, speed);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
});


//caso role o site para baixo adiciona a classe que fixa o menu no topo e adiciona um paddintop no body para cobrir o espaço que o menu deixou
document.addEventListener('scroll', function(){
    var tela = window.scrollY;
    var menu = document.querySelector('.header_main');
    var altura_menu = document.querySelector('.header_main').clientHeight;
    if( tela > 150){
        menu.classList.add('sticky-menu');
        this.body.style.paddingTop = altura_menu+"px";
    }else{
        menu.classList.remove('sticky-menu');
        this.body.style.paddingTop = 0;
    }
});