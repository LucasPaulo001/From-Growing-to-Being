let resp = localStorage.getItem('personagem');


//Variáveis responsáveis por alterar o conteúdo do questionário (Questão 1)
const question = document.getElementById('txt');
const alt1Q01 = document.getElementById('ques1');
const alt2Q01 = document.getElementById('ques2');
const alt3Q01 = document.getElementById('ques3');
const alt4Q01 = document.getElementById('ques4');

//Variável para mudar cor de fundo de acordo com o personagem escolhido
const background = document.getElementById('background');

if(resp === 'boy'){
    let avatar = document.getElementById('img-person');
    let person = document.createElement('img');
    person.src = '../images/homem.png';
    person.width = 300;
    person.height = 300;
    avatar.appendChild(person);
    background.style.backgroundColor = '#452011';

    //Questão 1
    question.innerHTML = '<h2>Tema: Desafios Sociais e Identidade Racial na Vida Adulta</h2> <p>Pergunta 1: Você percebe que é frequentemente seguido por seguranças em lojas ou observado de forma desconfiada em locais públicos. Como isso afeta sua percepção de si mesmo?</p>' 
    alt1Q01.innerHTML = 'Tento ignorar, mas isso afeta minha confiança e autoestima.' 
    alt2Q01.innerHTML = 'Me sinto irritado e desanimado, mas acredito que essa desconfiança é inevitável. '
    alt3Q01.innerHTML = 'Uso essa experiência para refletir sobre o racismo estrutural e como ele impacta a vida de homens negros diariamente. '
    alt4Q01.innerHTML = 'Converso com amigos e familiares sobre essas situações para entender melhor como lidar com elas sem internalizar o preconceito.'
}
else if(resp === 'girl'){
    let avatar = document.getElementById('img-person');
    let person = document.createElement('img');
    person.src = '../images/mulher.png';
    person.width = 300;
    person.height = 300;
    avatar.appendChild(person);
    background.style.backgroundColor = '#7b4833';

    //Questão 1
    question.innerHTML = '<h2>Tema: Desafios Sociais, Identidade Racial e Gênero</h2> <p>Pergunta 8: "Você está em um ambiente público e nota que as pessoas ao redor parecem tratá-la de forma desconfiada ou desconfortável, como se você não pertencesse àquele lugar. Como você reage?"</p>' 
    alt1Q01.innerHTML = 'Tento ignorar e continuar com minha rotina.' 
    alt2Q01.innerHTML = 'Fico incomodada, mas não sei como responder a isso.'
    alt3Q01.innerHTML = 'Reafirmo minha confiança e não permito que o tratamento dos outros afete minha percepção de mim mesma.'
    alt4Q01.innerHTML = 'Converso com amigos ou familiares sobre o impacto dessas situações e busco formas de enfrentá-las.'
}

// Recebendo valor de progresso da barra do nível 1
const progressoFase3 = document.getElementById('progress');
progressoFase3.value = Number(localStorage.getItem('Progresso'));
console.log(progressoFase3.value)

function validar(){
    const selQ01 = document.querySelector('input[name="question"]:checked');
    let alt1 = 1;
    let alt2 = 2;
    let alt3 = 3;
    let alt4 = 0;
    let newScore;
    
    // Recupera a pontuação total do localStorage (ou começa com 0)
    let pontuacaoTotal = Number(localStorage.getItem('pontuação')) || 0;

    // Recupera a pontuação anterior da questão 1
    let pontuacaoAnterior = parseInt(localStorage.getItem('pontuacaoQ01')) || 0;
    pontuacaoTotal -= pontuacaoAnterior; // Remove a pontuação anterior

    const btn = document.getElementById('btn');

    if(selQ01 == null){
        alert('Por favor selecione uma das alternativas');
        btn.style.backgroundColor = '#5d5dff';
    }
    else{ 
        newScore=0;
        if(selQ01.value == 1){
            newScore+=alt1;
            console.log(newScore);
        }
        else if(selQ01.value == 2){
            newScore+=alt2;
            console.log(newScore);
        }
        else if(selQ01.value == 3){
            newScore+=alt3;
            console.log(newScore);
        }
        else if(selQ01.value == 4){
            newScore+=alt4;
            console.log(newScore);
        }

        pontuacaoTotal += newScore; // Adiciona nova pontuação
        btn.style.backgroundColor = 'green';
        btn.innerHTML = `Alternativa (${selQ01.value}) selecionada`;
    }

    //Atualização da barra de progresso
    const progressoAtual = progressoFase3.value;
    const max = progressoFase3.max;
    progressQ1 = localStorage.getItem("ProgressãoPorQuestãoQ1F3")||0;
    progressQ1 = Number(progressQ1);
    
    if(progressoAtual <= max && progressQ1 === 0){
        let audio = new Audio('../audio/ding.mp3');
        audio.play();
        progressoFase3.value = progressoAtual+1;
        localStorage.setItem('Progresso', progressoFase3.value);

        progressQ1 = 1;
        localStorage.setItem("ProgressãoPorQuestãoQ1F3", progressQ1);
    }

    // Armazena as pontuações
    localStorage.setItem('pontuacaoQ01', newScore); // Armazena a pontuação da questão 1
    localStorage.setItem('pontuação', pontuacaoTotal); // Armazena a pontuação total
    localStorage.getItem('pontuaçãoFase3', newScore);// Armazena a pontuação da primeira questão da fase 3

    //Armazena a pontuação de cada fase
    let scoreFase1 = Number(localStorage.getItem('pontuaçãoFase1'));
    let scoreFase2 = Number(localStorage.getItem('pontuaçãoFase2'));
    let scoreFase3 = Number(localStorage.getItem('pontuacaoQ01'));

    //Soma a pontuação de cada fase
    let somaScore = scoreFase1 + scoreFase2 + scoreFase3;

    //Pontuação na janela modal
    const windowScore = document.getElementById('windowScore');
    windowScore.innerHTML = "<p>Pontuação de questões : </p>" + "<strong>" + "<h1>" +  somaScore + "</h1>" + "</strong> <br><p>A pontuação é computada com base no nível de reflexão, crítica ou ação que as respostas indicam</p>";
    //console.log(somaScore);

    
    msgFim.innerHTML = 'Quiz Finalizado!';
    var gifContent = document.createElement('img');
    gifContent.src = '../images/like.gif';
    gifContent.style.height = '50px';
    gif.appendChild(gifContent);
}
