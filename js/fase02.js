//Recebendo o elemento para inserir a nova imagem
const person = document.getElementById('img-person');
//Recebendo o valor do localstorage personagem
let resp = localStorage.getItem('personagem');

//Variáveis responsáveis por alterar o conteúdo do questionário (Questão 1)
const question = document.getElementById('txt');
const alt1Q01 = document.getElementById('ques1');
const alt2Q01 = document.getElementById('ques2');
const alt3Q01 = document.getElementById('ques3');
const alt4Q01 = document.getElementById('ques4');

//Variáveis responsáveis por alterar o conteúdo do questionário (Questão 2)
const question02 = document.getElementById('txtQ2');
const alt1Q02 = document.getElementById('alt1Quest2');
const alt2Q02 = document.getElementById('alt2Quest2');
const alt3Q02 = document.getElementById('alt3Quest2');
const alt4Q02 = document.getElementById('alt4Quest2');


if(resp === 'boy'){
    let avatar = document.getElementById('img-person');
    let select = document.createElement('img');
    select.src = '../images/adolescente(menino).png';
    select.width = 300;
    select.height = 300;
    avatar.appendChild(select);

    //Questão 1
    question.innerHTML = '<h2>Tema: Percepção Social e Racismo Velado</h2> <p>Pergunta 1: "Durante uma abordagem policial, você percebe que os jovens negros são mais revistados e tratados de forma mais dura em comparação aos jovens brancos. Como você reage a essa situação?"</p>' 
    alt1Q01.innerHTML = 'Acho que a polícia está apenas fazendo seu trabalho e deve haver uma razão para isso.' 
    alt2Q01.innerHTML = 'Fico incomodado, mas não sei ao certo por que isso acontece.'
    alt3Q01.innerHTML = 'Acredito que isso seja resultado do racismo institucional, onde jovens negros são vistos como mais suspeitos.'
    alt4Q01.innerHTML = 'Acho que é apenas uma coincidência, pois a polícia trata todo mundo da mesma maneira.'

    //Questão 2
    question02.innerHTML = '<h2>Tema: Autoestima, Identidade e Raça</h2> <p>Pergunta 2: "Você está na escola e percebe que colegas fazem piadas sobre o seu tom de pele. Você sente que isso está te afetando, mas não sabe como reagir. O que você faz?"</p>'
    alt1Q02.innerHTML = 'Ignoro as piadas, mesmo que me machuquem, para evitar conflitos.'
    alt2Q02.innerHTML = 'Fico quieto, mas sinto que isso está afetando minha autoestima.'
    alt3Q02.innerHTML = 'Respondo com confiança, mostrando que essas piadas não definem quem eu sou.'
    alt4Q02.innerHTML = 'Converso com alguém de confiança, como um professor ou amigo, sobre o impacto dessas piadas.'
}
else if(resp === 'girl'){
    let avatar = document.getElementById('img-person');
    let select = document.createElement('img');
    select.src = '../images/adolescente(menina).png';
    select.width = 300;
    select.height = 300;
    avatar.appendChild(select);
    //Questão 1
    question.innerHTML = "<h2>Tema: Autoestima e Percepção de Si Mesma</h2> <p>Pergunta 1: 'Na escola, algumas colegas fazem comentários sobre como seu cabelo natural 'deveria ser alisado' ou 'ser mais arrumado'. Como você reage?</p>"
    alt1Q01.innerHTML = 'Tento alisar meu cabelo para evitar mais comentários negativos.' 
    alt2Q01.innerHTML = 'Fico incomodada, mas não respondo aos comentários.'
    alt3Q01.innerHTML = 'Respondo com confiança, dizendo que meu cabelo é lindo do jeito que é.'
    alt4Q01.innerHTML = 'Tento educar as pessoas sobre a beleza e diversidade de tipos de cabelo.'

    //Qustão 2
    question02.innerHTML = "<h2>Tema: Autoestima e Percepção de Si Mesma</h2><p>Pergunta 2: Em um evento social, você percebe que algumas pessoas fazem elogios apenas superficiais, focados na sua aparência física, e você se pergunta se elas realmente veem quem você é por dentro. Isso te faz...</p>"
    alt1Q02.innerHTML = "Aceitar os elogios, mesmo que não pareçam autênticos, pois eles ajudam a aumentar minha confiança."
    alt2Q02.innerHTML = "Ficar um pouco frustrada, pois prefiro ser reconhecida pelas minhas habilidades e personalidade."
    alt3Q02.innerHTML = "Ficar confusa sobre como as pessoas me veem, o que abala um pouco minha confiança."
    alt4Q02.innerHTML = "Não me deixar afetar, pois sei que minha autoestima não depende da validação dos outros."

}
function validar(){
    //Recuperando chave pontuação do localstorage
    let pontuacao = Number(localStorage.getItem('pontuação'));
    console.log(pontuacao);
    const selQ01 = document.querySelector('input[name="question"]:checked');
    let alt1 = 1;
    let alt2 = 2;
    let alt3 = 3;
    let alt4 = 0;
    /*let pontuacaoTotal = 0;*/
    const btn = document.getElementById('btn');
    if(selQ01 == null){
        alert('Por favor selecione uma das alternativas');
        btn.style.backgroundColor = '#5d5dff';
        
    }
    else if(selQ01.value == 1){
        const btn = document.getElementById('btn');
        btn.style.backgroundColor = 'green';
        btn.innerHTML = `Alternativa (${selQ01.value}) selecionada`;
        pontuacao+=alt1;
        console.log(pontuacao)
    }
    else if(selQ01.value == 2){
        btn.style.backgroundColor = 'green';
        btn.innerHTML = `Alternativa (${selQ01.value}) selecionada`;
        pontuacao+=alt2;
    }
    else if(selQ01.value == 3){
        console.log(alt3);
        btn.style.backgroundColor = 'green';
        btn.innerHTML = `Alternativa (${selQ01.value}) selecionada`;
        pontuacao+=alt3;
    }
    else if(selQ01.value == 4){
        console.log(alt4);
        btn.style.backgroundColor = 'green';
        btn.innerHTML = `Alternativa (${selQ01.value}) selecionada`;
        pontuacao+=alt4;
    }
    localStorage.setItem("pontuação", pontuacao);
}

function validarQ2(){
    //Recuperando chave pontuação do localstorage
    let pontuacao = Number(localStorage.getItem('pontuação'));
    console.log(pontuacao);
    const selQ02 = document.querySelector('input[name="question2"]:checked');
    let alt1 = 1;
    let alt2 = 2;
    let alt3 = 3;
    let alt4 = 0;
    const btn2 = document.getElementById('btn2');
    if(selQ02 == null){
        alert('Por favor selecione uma das alternativas');
        btn2.style.backgroundColor = '#5d5dff';
    }
    else if(selQ02.value == 1){
        console.log(alt1);
        btn2.style.backgroundColor = 'green';
        btn2.innerHTML = `Alternativa (${selQ02.value}) selecionada`;
        pontuacao+=alt1;
    }
    else if(selQ02.value == 2){
        console.log(alt2);
        btn2.style.backgroundColor = 'green';
        btn2.innerHTML = `Alternativa (${selQ02.value}) selecionada`;
        pontuacao+=alt2;
    }
    else if(selQ02.value == 3){
        console.log(alt3);
        btn2.style.backgroundColor = 'green';
        btn2.innerHTML = `Alternativa (${selQ02.value}) selecionada`;
        pontuacao+=alt3;
    }
    else if(selQ02.value == 4){
        console.log(alt4);
        btn2.style.backgroundColor = 'green';
        btn2.innerHTML = `Alternativa (${selQ02.value}) selecionada`;
        pontuacao+=alt4;
    }
    console.log(pontuacao);
    localStorage.setItem("pontuação", pontuacao);
}
function nextFase(){
    const selQ01 = document.querySelector('input[name="question"]:checked');
    const selQ02 = document.querySelector('input[name="question2"]:checked');
    if(selQ01!=null && selQ02!=null){
        window.location.href = '#';
    }
    else{
        alert("Marque todas as questões para ir para a próxima fase");
    }
}