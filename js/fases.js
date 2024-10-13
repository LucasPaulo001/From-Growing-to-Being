//Variável que recebe os dados do localstorage
let resp = localStorage.getItem("personagem");

//Questionário 01 - menino e menina
const txt = document.getElementById('txt');
const txt02 = document.getElementById('txtQ2');
const quest1 = document.getElementById('ques1');
const quest2 = document.getElementById('ques2');
const quest3 = document.getElementById('ques3');
const quest4 = document.getElementById('ques4');

//Questionário 02 - menino e menina
const alt1Quest2 = document.getElementById('alt1Quest2');
const alt2Quest2 = document.getElementById('alt2Quest2');
const alt3Quest2 = document.getElementById('alt3Quest2');
const alt4Quest2 = document.getElementById('alt4Quest2');

//Variável para mudar cor de fundo de acordo com o personagem escolhido
const background = document.getElementById('background');


//Inserção das imagens dos respectivos avatares e questionários para cada escolha
if (resp === "boy") {
    let avatar = document.getElementById('img-person');
    let select = document.createElement('img');
    select.src = '../images/menino.png';
    select.width = 300;
    select.height = 300;
    avatar.appendChild(select);
    background.style.backgroundColor = '#452011';

    //Qestão 01
    txt.innerHTML ="<h2>Tema: Impacto da Segregação Social e Racial na Infância</h2> <p>Pergunta 1: Imagine que você é uma criança negra em uma escola onde a maioria dos seus colegas e professores são brancos. Durante uma atividade em grupo, você percebe que não é escolhido para ser o líder da equipe, enquanto seus colegas brancos são. Como isso afeta sua visão de si mesmo?</p>"
    quest1.textContent = "Eu acharia que não sou bom o suficiente para liderar."
    quest2.innerHTML = "Eu acreditariaque os outros têm mais confiança por serem melhores ou mais inteligentes."
    quest3.innerHTML = "Eu começaria aquestionar se a cor da minha pele influencia a forma como sou tratado."
    quest4.innerHTML = "Não vejo relação entre a cor da pele e ser escolhido como líder; deve ser só falta de sorte."
    
    //Questão 02
    txt02.innerHTML = "<h2>Tema: Racismo e Autoestima na Infância</h2> <p>Pergunta 2: Você é um menino negro e sempre ouviu que precisa se esforçar mais que seus colegas brancos para ser reconhecido. Quando um professor elogia um colega por suas notas e ignora seu esforço, como você se sente?</p>"
    alt1Quest2.innerHTML = "Fico desmotivado e começo a achar que meu esforço não vale a pena."
    alt2Quest2.innerHTML = "Sinto que preciso trabalhar ainda mais duro para ser notado e reconhecido."
    alt3Quest2.innerHTML = "Isso é injusto; eu também me esforço e mereço reconhecimento."
    alt4Quest2.innerHTML = "Não me importo com os elogios, o que importa é que eu sei que estou aprendendo."

}
else if (resp === "girl") {
    localStorage.removeItem('cont')
    let avatar = document.getElementById('img-person');
    let select = document.createElement('img');
    select.src = '../images/menina.png';
    select.width = 300;
    select.height = 300;
    avatar.appendChild(select);
    background.style.backgroundColor = '#7b4833';
    

    //Questão 01
    txt.innerHTML ="<h2>Tema: Gênero e Raça na Infância</h2> <p>Você é uma menina negra que ama ciência e sonha em ser engenheira. Na escola, quando você fala sobre isso, alguns colegas dizem que 'isso não é coisa de menina' e que 'não existe muita mulher negra engenheira'. Como você reage a esses comentários?</p>"
    quest1.textContent = "Eu concordo, talvez engenharia seja algo mais para meninos e devo pensar em outra profissão."
    quest2.innerHTML = "Fico triste, mas acho que eles estão certos, é difícil para mulheres negras conseguirem destaque em áreas como essa."
    quest3.innerHTML = "Acredito que isso é preconceito e vou continuar perseguindo meu sonho, porque posso ser o que eu quiser."
    quest4.innerHTML = "Não me importo com o que dizem, mas começo a questionar se realmente tenho capacidade."

    //Questão 02
    txt02.innerHTML = "<h2>Tema: Representatividade e Autoestima na Infância</h2> <p>Pergunta 1: Durante uma aula de artes, você recebe a tarefa de desenhar uma princesa. Quando você desenha uma princesa com sua cor de pele, cabelo e traços, a professora pergunta: 'Por que você não desenhou uma princesa mais tradicional?'. Como você se sente?</p>"
    alt1Quest2.innerHTML = "Eu me sinto mal e penso que fiz algo errado. Talvez as princesas devam ser como nos filmes."
    alt2Quest2.innerHTML = "Acho que a professora está certa. Sempre vejo princesas brancas, talvez eu deva desenhar algo mais parecido com elas."
    alt3Quest2.innerHTML = "Sinto que o que eu desenhei representa melhor quem eu sou e quem eu gostaria de ver como princesa."
    alt4Quest2.innerHTML = "Não ligo para o que a professora diz, mas começo a pensar que talvez minha cor de pele não seja vista como bonita."

}


function validar() {
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

    if (selQ01 == null) {
        alert('Por favor selecione uma das alternativas');
        btn.style.backgroundColor = '#5d5dff';
    } else {
        newScore = 0; // Reinicia a nova pontuação
        if (selQ01.value == 1) {
            newScore += alt1;
        } else if (selQ01.value == 2) {
            newScore += alt2;
        } else if (selQ01.value == 3) {
            newScore += alt3;
        } else if (selQ01.value == 4) {
            newScore += alt4;
        }

        //Atualização da barra de progresso
        const progress = document.getElementById('progress');
        const valorAtual = progress.value;
        const valorMax = progress.max;
        if(valorAtual <= valorMax){
            let audio = new Audio('../audio/ding.mp3');
            audio.play();
            progress.value = valorAtual+1;
            localStorage.setItem('Progresso', progress.value);
        }


        // Atualiza a pontuação total e exibe feedback
        pontuacaoTotal += newScore; // Adiciona a nova pontuação
        btn.style.backgroundColor = 'green';
        btn.innerHTML = `Alternativa (${selQ01.value}) selecionada`;
    }

    // Armazena as pontuações
    localStorage.setItem('pontuacaoQ01', newScore);
    localStorage.setItem('pontuação', pontuacaoTotal);
    
}

function validarQ2() {
    const selQ02 = document.querySelector('input[name="question2"]:checked');
    let alt1 = 1;
    let alt2 = 2;
    let alt3 = 3;
    let alt4 = 0;
    let newScore02;

    // Recupera a pontuação total do localStorage (ou começa com 0)
    let pontuacaoTotal = Number(localStorage.getItem('pontuação')) || 0;

    // Recupera a pontuação anterior da questão 2
    let pontuacaoAnterior = parseInt(localStorage.getItem('pontuacaoQ02')) || 0;
    pontuacaoTotal -= pontuacaoAnterior; // Remove a pontuação anterior

    const btn2 = document.getElementById('btn2');

    if (selQ02 == null) {
        alert('Por favor selecione uma das alternativas');
        btn2.style.backgroundColor = '#5d5dff';
    } else {
        newScore02 = 0; // Reinicia a nova pontuação
        if (selQ02.value == 1) {
            newScore02 += alt1;
        } 
        else if (selQ02.value == 2) {
            newScore02 += alt2;
        } 
        else if (selQ02.value == 3) {
            newScore02 += alt3;
        } 
        else if (selQ02.value == 4) {
            newScore02 += alt4;
        }
        //Atualização da barra de progresso
        const progress = document.getElementById('progress');
        const valorAtual = progress.value;
        const valorMax = progress.max;
        if(valorAtual <= valorMax){
            let audio = new Audio('../audio/ding.mp3');
            audio.play();
            progress.value = valorAtual+1;
            localStorage.setItem('Progresso', progress.value);
        }

        // Atualiza a pontuação total e exibe feedback
        pontuacaoTotal += newScore02; // Adiciona a nova pontuação
        btn2.style.backgroundColor = 'green';
        btn2.innerHTML = `Alternativa (${selQ02.value}) selecionada`;
    }

    // Armazena as pontuações
    localStorage.setItem('pontuacaoQ02', newScore02);
    localStorage.setItem('pontuação', pontuacaoTotal);
    localStorage.setItem('pontuaçãoFase1', pontuacaoTotal);
}
    


function nextFase() {
    const selQ01 = document.querySelector('input[name="question"]:checked');
    const selQ02 = document.querySelector('input[name="question2"]:checked');
    if (selQ01 != null && selQ02 != null) {
        window.location.href = 'fase02.html';
    } else {
        alert("Marque todas as questões para ir para a próxima fase");
    }
}

