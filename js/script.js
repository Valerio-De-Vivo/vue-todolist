var i = 0;
var txt = 'Cose da fare??';
var speed = 100; 

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}