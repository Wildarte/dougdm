var n = 0;
var txt = "Briefing, Criação, Implementação e Desenvolvimento";
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
function close_modal(id){
    //var id_btn = document.querySelector(".btn_close_modal").getAttribute('data-close-modal');
    document.querySelector(".over_modal").style.display = "none";
    document.querySelector(".modal_service#modal-"+id).classList.remove("open_modal");
    console.log("valor do atributo: "+id);
};
over_modal.addEventListener("click", function(){
    //var id_btn = document.querySelector(".btn_close_modal").getAttribute('data-close-modal');
    document.querySelector(".over_modal").style.display = "none";
    document.querySelector(".modal_service.open_modal").classList.remove("open_modal");
    console.log("valor do atributo: ");
})
//close modal


//open modal
//var open_modal = document.querySelector(".btn_open_modal");
function open_modal(id){
    //var id_btn = open_modal.getAttribute("data-open-modal");
    document.querySelector(".over_modal").style.display = "block";
    document.querySelector(".modal_service#modal-"+id).classList.add("open_modal")
};
//open modal



//open menu mobile
document.querySelector(".btn_open_menu_mobile i").addEventListener("click", function(){
    document.querySelector(".header_main_content").classList.add("open_menu_mobile");
});
document.querySelector(".close_menu_mobile i").addEventListener("click", function(){
    document.querySelector(".header_main_content").classList.remove("open_menu_mobile");
});
