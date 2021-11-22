var i = 0;
var txt = 'Ouvir. Entender. Melhorar.';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title_intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
});

