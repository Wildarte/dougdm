var current_pos = 0;
var limit_cards = 0;
var count_cards = document.querySelectorAll(".type_services .type_service_body .card_service");
for(var i = 0; i < count_cards.length-4; i++){
    limit_cards -= 25;
}
console.log("valor total: " + limit_cards);
document.getElementById("btn-next-service").addEventListener("click", function(){
    if(current_pos > limit_cards){
        current_pos -= 25;
        var els = document.querySelectorAll(".type_services .type_service_body .card_service");
        console.log("antigo valor: "+current_pos+"%");
        for(var i = 0; i < els.length; i++){
            els[i].style.left = current_pos+"%";
        }
        if(current_pos < 0){
            document.getElementById("btn-previous-service").style.display = "block";
        }else{
            document.getElementById("btn-previous-service").style.display = "none";
        }
    }
    console.log("novo valor: "+current_pos);
});

document.getElementById("btn-previous-service").addEventListener("click", function(){
    
    var els = document.querySelectorAll(".type_services .type_service_body .card_service");
    console.log("antigo valor: "+current_pos+"%");

    if(current_pos < 0){
        current_pos += 25;
        for(var i = 0; i < els.length; i++){
            els[i].style.left = current_pos+"%";
        }
        if(current_pos < 0){
            document.getElementById("btn-previous-service").style.display = "block";
        }else{
            document.getElementById("btn-previous-service").style.display = "none";
        }
    }
    console.log("novo valor: "+current_pos);
});