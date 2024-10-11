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


//Inserção das imagens dos respectivos avatares e questionários para cada escolha
if (resp === "boy") {
    let avatar = document.getElementById('img-person');
    let select = document.createElement('img');
    select.src = '../images/menino.png';
    select.width = 300;
    select.height = 300;
    avatar.appendChild(select);

    //Qestão 01
    txt.innerHTML ="<h2>Tema: Impacto da Segregação Social e Racial na Infância</h2> <p>Pergunta 1: Imagine que você é uma criança negra em uma escola onde a maioria dos seus colegas e professores são brancos. Durante uma atividade em grupo, você percebe que não é escolhido para ser o líder da equipe, enquanto seus colegas brancos são. Como isso afeta sua visão de si mesmo?</p>"
    quest1.textContent = "Eu acharia quenão sou bom o suficiente para liderar. (1 ponto)"
    quest2.innerHTML = "Eu acreditariaque os outros têm mais confiança por serem melhores ou mais inteligentes. (2 pontos)"
    quest3.innerHTML = "Eu começaria aquestionar se a cor da minha pele influencia a forma como sou tratado. (3 pontos)"
    quest4.innerHTML = "Não vejo relaçãoentre a cor da pele e ser escolhido como líder; deve ser só falta de sorte. (0pontos)"
    
    //Questão 02
    txt02.innerHTML = "<h2>Tema: Racismo e Autoestima na Infância</h2> <p>Pergunta 1: Você é um menino negro e sempre ouviu que precisa se esforçar mais que seus colegas brancos para ser reconhecido. Quando um professor elogia um colega por suas notas e ignora seu esforço, como você se sente?</p>"
    alt1Quest2.innerHTML = "Fico desmotivado e começo a achar que meu esforço não vale a pena. (1 ponto)"
    alt2Quest2.innerHTML = "Sinto que preciso trabalhar ainda mais duro para ser notado e reconhecido. (2 pontos)"
    alt3Quest2.innerHTML = "Isso é injusto; eu também me esforço e mereço reconhecimento. (3 pontos)"
    alt4Quest2.innerHTML = "Não me importo com os elogios, o que importa é que eu sei que estou aprendendo. (0 pontos)"

}
else if (resp === "girl") {
    localStorage.removeItem('cont')
    let avatar = document.getElementById('img-person');
    let select = document.createElement('img');
    select.src = '../images/menina.png';
    select.width = 300;
    select.height = 300;
    avatar.appendChild(select);

    //Questão 01
    txt.innerHTML ="<h2>Tema: Gênero e Raça na Infância</h2> <p>Você é uma menina negra que ama ciência e sonha em ser engenheira. Na escola, quando você fala sobre isso, alguns colegas dizem que 'isso não é coisa de menina' e que 'não existe muita mulher negra engenheira'. Como você reage a esses comentários?</p>"
    quest1.textContent = "Eu concordo, talvez engenharia seja algo mais para meninos e devo pensar em outra profissão. (1 ponto)"
    quest2.innerHTML = "Fico triste, mas acho que eles estão certos, é difícil para mulheres negras conseguirem destaque em áreas como essa. (2 pontos)"
    quest3.innerHTML = "Acredito que isso é preconceito e vou continuar perseguindo meu sonho, porque posso ser o que eu quiser. (3 pontos)"
    quest4.innerHTML = "Não me importo com o que dizem, mas começo a questionar se realmente tenho capacidade. (0 pontos)"

    //Questão 02
    txt02.innerHTML = "<h2>Tema: Representatividade e Autoestima na Infância</h2> <p>Pergunta 1: Durante uma aula de artes, você recebe a tarefa de desenhar uma princesa. Quando você desenha uma princesa com sua cor de pele, cabelo e traços, a professora pergunta: 'Por que você não desenhou uma princesa mais tradicional?'. Como você se sente?</p>"
    alt1Quest2.innerHTML = "Eu me sinto mal e penso que fiz algo errado. Talvez as princesas devam ser como nos filmes. (1 ponto)"
    alt2Quest2.innerHTML = "Acho que a professora está certa. Sempre vejo princesas brancas, talvez eu deva desenhar algo mais parecido com elas. (2 pontos)"
    alt3Quest2.innerHTML = "Sinto que o que eu desenhei representa melhor quem eu sou e quem eu gostaria de ver como princesa. (3 pontos)"
    alt4Quest2.innerHTML = "Não ligo para o que a professora diz, mas começo a pensar que talvez minha cor de pele não seja vista como bonita. (0 pontos)"

}


function validar(){
    const selQ01 = document.querySelector('input[name="question"]:checked');
    let alt1 = 0;
    let alt2 = 0;
    let alt3 = 0;
    let alt4 = 0;
    let pontuacaoTotal = 0;
    const btn = document.getElementById('btn');
    
    if(selQ01 == null){
        alert('Por favor selecione uma das alternativas');
        btn.style.backgroundColor = '#5d5dff';
        
    }
    else if(selQ01.value == 1){
        alt1++;
        console.log(alt1);
        const btn = document.getElementById('btn');
        btn.style.backgroundColor = 'green';
        btn.innerHTML = `Alternativa (${selQ01.value}) selecionada`;
        pontuacaoTotal+=alt1;
        
    }
    else if(selQ01.value == 2){
        alt2+=2;
        console.log(alt2);
        btn.style.backgroundColor = 'green';
        btn.innerHTML = `Alternativa (${selQ01.value}) selecionada`;
        pontuacaoTotal+=alt2;
    }
    else if(selQ01.value == 3){
        alt3+=3;
        console.log(alt3);
        btn.style.backgroundColor = 'green';
        btn.innerHTML = `Alternativa (${selQ01.value}) selecionada`;
        pontuacaoTotal+=alt3;
    }
    else if(selQ01.value == 4){
        alt4+=0;
        console.log(alt4);
        btn.style.backgroundColor = 'green';
        btn.innerHTML = `Alternativa (${selQ01.value}) selecionada`;
        pontuacaoTotal+=alt4;
    }

    localStorage.setItem('pontuação', pontuacaoTotal);
}
function validarQ2(){
    const selQ02 = document.querySelector('input[name="question2"]:checked');
    let alt1 = 0;
    let alt2 = 0;
    let alt3 = 0;
    let alt4 = 0;
    let pontuacaoTotal = 0;
    const btn2 = document.getElementById('btn2');
    
    if(selQ02 == null){
        alert('Por favor selecione uma das alternativas');
        btn2.style.backgroundColor = '#5d5dff';
    }
    else if(selQ02.value == 1){
        alt1++;
        console.log(alt1);
        btn2.style.backgroundColor = 'green';
        btn2.innerHTML = `Alternativa (${selQ02.value}) selecionada`;
        pontuacaoTotal+=alt1;
    }
    else if(selQ02.value == 2){
        alt2+=2;
        console.log(alt2);
        btn2.style.backgroundColor = 'green';
        btn2.innerHTML = `Alternativa (${selQ02.value}) selecionada`;
        pontuacaoTotal+=alt2;
    }
    else if(selQ02.value == 3){
        alt3+=3;
        console.log(alt3);
        btn2.style.backgroundColor = 'green';
        btn2.innerHTML = `Alternativa (${selQ02.value}) selecionada`;
        pontuacaoTotal+=alt3;
    }
    else if(selQ02.value == 4){
        alt4+=0;
        console.log(alt4);
        btn2.style.backgroundColor = 'green';
        btn2.innerHTML = `Alternativa (${selQ02.value}) selecionada`;
        pontuacaoTotal+=alt4;
    }

    localStorage.setItem('pontuação', pontuacaoTotal);
}
