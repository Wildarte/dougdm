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

