let fim = localStorage.getItem('Progresso');
const msgFim = document.getElementById('txtFim');
const gif = document.getElementById('gif');
let max = document.getElementById('progress').max;
console.log("fim " + fim);
console.log("max " + max);
if(fim == 5){
    msgFim.innerHTML = 'Quiz Finalizado!';
    var gifContent = document.createElement('img');
    gifContent.src = '../images/like.gif';
    gifContent.style.height = '50px';
    gif.appendChild(gifContent);
}
