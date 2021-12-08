
//variables =======================================
var current_pos = 0;
var limit_cards = 0;
var count_cards = document.querySelectorAll(".type_services .type_service_body .card_service");//get count of card services
var width_card_service = document.querySelector(".type_services .type_service_body .card_service").clientWidth;//get width card service
var width_body_service = document.querySelector(".type_services .type_service_body").clientWidth;//get width body card service
var width_screen = window.innerWidth;//get width screen size in Pixels
var space_for_cards = 0;
var cards_in_space = 0;//variavel que armazena a count of cards in the space for cards
//variables =======================================


//this is for testing ===============================
console.log("largura do espaço com: "+width_body_service);
console.log("size width window: "+width_screen);
//this is for testing ===============================


if(width_screen <= 520){
    space_for_cards = 1;
}else if(width_screen <= 920){
    space_for_cards = 3;
}else{
    space_for_cards = 4;
}



cards_in_space =  parseInt(width_body_service/space_for_cards);
//case have a risize of screen, put new value of width in the card_service
/*
window.addEventListener("resize", function(){
    width_card_service = document.querySelector(".type_services .type_service_body .card_service").clientWidth;

    console.log("new size window: "+width_card_service);
    width_screen = window.innerWidth;
    console.log("size width window: "+width_screen);

});
*/
console.log("largura dos cards: "+width_card_service);


limit_cards -= (width_card_service*count_cards.length)-(width_card_service*space_for_cards);
console.log("contagem de cards: "+(limit_cards-width_card_service));
console.log("contagem de cards in space: "+space_for_cards);




//caso a tela seja redimensionada reseta todas variaveis se adaptando ao novo tamanho
window.addEventListener("resize", function(){
    
    current_pos = 0;
    limit_cards = 0;
    
    count_cards = document.querySelectorAll(".type_services .type_service_body .card_service");//get count of card services
   
    width_card_service = document.querySelector(".type_services .type_service_body .card_service").clientWidth;//get width card service
    console.log("new width card: "+width_card_service);
    
    width_body_service = document.querySelector(".type_services .type_service_body").clientWidth;//get width body card service
    
    width_screen = window.innerWidth;//get width screen size in Pixels
    
    
    
    if(width_screen <= 520){
        space_for_cards = 1;
    }else if(width_screen <= 920){
        space_for_cards = 3;
    }else{
        space_for_cards = 4;
    }
    cards_in_space =  parseInt(width_body_service/space_for_cards);
    limit_cards -= (width_card_service*count_cards.length)-(width_card_service*space_for_cards);
    console.log('largura: '+width_screen);
    var els = document.querySelectorAll(".type_services .type_service_body .card_service");
    for(var i = 0; i < els.length; i++){
        console.log("width: "+current_pos);
        els[i].style.left = 0;
        
    }
});

//function next_sevice(){
    document.getElementById("btn-next-service").addEventListener("click", function(){
        console.log("card width: "+width_card_service);
        console.log("valor de current_pos: "+current_pos);
        console.log("valor de limit_cards: "+limit_cards);
        if(current_pos > limit_cards){
            console.log("current_post > limit_cards (entao passa cards)");
            current_pos -= cards_in_space;
            var els = document.querySelectorAll(".type_services .type_service_body .card_service");
            for(var i = 0; i < els.length; i++){
                els[i].style.left = current_pos+"px";
            }
            if(current_pos < 0){
                document.getElementById("btn-previous-service").style.display = "block";
            }else{
                document.getElementById("btn-previous-service").style.display = "none";
            }
        }else{
            console.log("current_post < limit_cards");
        }
        console.log("valor de current_pos: "+current_pos);
        console.log("valor de limit_cards: "+limit_cards);
    });
//}

document.getElementById("btn-previous-service").addEventListener("click", function(){
    
    var els = document.querySelectorAll(".type_services .type_service_body .card_service");
    console.log("valor de current_pos: "+current_pos);
    console.log("valor de limit_cards: "+limit_cards);
    if(current_pos < 0){
        current_pos += cards_in_space;
        for(var i = 0; i < els.length; i++){
            els[i].style.left = current_pos+"px";
        }
        if(current_pos < 0){
            document.getElementById("btn-previous-service").style.display = "block";
        }else{
            document.getElementById("btn-previous-service").style.display = "none";
        }
    }
});