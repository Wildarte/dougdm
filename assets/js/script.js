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


//close modal
var btn_close_modal = document.querySelector(".btn_close_modal i");
var over_modal = document.querySelector(".over_modal");
over_modal.addEventListener("click", function(){
    var id_btn = document.querySelector(".btn_close_modal").getAttribute('data-close-modal');
    document.querySelector(".over_modal").style.display = "none";
    document.querySelector(".modal_service#modal-"+id_btn).classList.remove("open_modal");
    console.log("valor do atributo: "+id_btn);
});
btn_close_modal.addEventListener("click", function(){
    var id_btn = document.querySelector(".btn_close_modal").getAttribute('data-close-modal');
    document.querySelector(".over_modal").style.display = "none";
    document.querySelector(".modal_service#modal-"+id_btn).classList.remove("open_modal");
    console.log("valor do atributo: "+id_btn);
})
//close modal


//open modal
var open_modal = document.querySelector(".btn_open_modal");
open_modal.addEventListener("click", function(){
    var id_btn = open_modal.getAttribute("data-open-modal");
    document.querySelector(".over_modal").style.display = "block";
    document.querySelector(".modal_service#modal-"+id_btn).classList.add("open_modal")
});
//open modal