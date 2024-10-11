let btnBoy = document.getElementById('btn-boy');
let btnGirl = document.getElementById('btn-girl');

//Eventos de clique
btnBoy.addEventListener('click', checkBoy);
btnGirl.addEventListener('click', checkGirl);
let personagem='';//Variável personagem começa vazia

//Funções que fazem com que o botão dos avatares sejam selecionados
function checkBoy(){
    if(btnBoy.style.borderColor == 'white'){
        btnBoy.style.borderColor = 'rgb(0, 255, 0)';
        btnBoy.style.borderWidth = '5px';
        personagem='boy';
    }
    else{
        btnBoy.style.borderColor = 'white';
        btnBoy.style.borderWidth = '1px';
        personagem='';
    }
    btnGirl.style.borderColor = 'white';
    btnGirl.style.borderWidth = '1px';
    console.log(personagem);
}

console.log(checkBoy());
function checkGirl(){
    if(btnGirl.style.borderColor == 'white'){
        btnGirl.style.borderColor = 'rgb(0, 255, 0)';
        btnGirl.style.borderWidth = '5px';
        personagem="girl";
    }
    else{
        btnGirl.style.borderColor = 'white';
        btnGirl.style.borderWidth = '1px';
        personagem='';
    }
    btnBoy.style.borderColor = 'white';
    btnBoy.style.borderWidth = '1px';
    console.log(personagem);
}


//Função para prosseguir com o personagem selecionado
function selected(){
    if(personagem == "boy" || personagem == "girl"){
        localStorage.setItem("personagem", personagem);
        window.location.href = '../Quiz/pages/fase01.html';
    }
    else{
        alert("Escolha um personagem");
    }
}




