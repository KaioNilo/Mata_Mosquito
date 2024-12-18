//Para que os elementos sejam criado dentro da área visível independente do tamanho da tela
let height = 0;
let width = 0;

let vidas = 1;

let tempo = 15;

let criacaoTempo = 1500;

// Para definir o nível de dificulidade
let nivel = window.location.search;

//Para encaminhar somente uma string com o nível
nivel = nivel.replace('?', '');

if (nivel === 'facil') {
    criacaoTempo = 1500
} else if (nivel ===  'medio') {
    criacaoTempo = 1000
} else if (nivel === 'dificil') {
    criacaoTempo = 750
}


function responsividadePalco () {
    height = window.innerHeight;
    width = window.innerWidth;
}
responsividadePalco ();

//criar cronometro
let cronometro = setInterval(function() {

    tempo--;

    if (tempo < 0) {
        //para parar a função depois q for executada
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000)


//Criar posições randômicas (posições aleatórias no eixo x e y para o mosquito se movimentar)
function posicaoRandomica () {

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        //Criando o controle das vidas
        if (vidas > 5) {
            window.location.href = 'fim.html';
        } else {
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png';

            vidas++;
        }
    }

    //definir posição com um padding do palco
    let posicaoX = Math.floor(Math.random() * width) -90;
    let posicaoY = Math.floor(Math.random() * height) -90;

    //criando controle da posicao do mosquito
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;


    //Programar a criação do elemento HTML e adc classe
    let mosquito = document.createElement('img');
    mosquito.src = 'img/mosquito.png';
    mosquito.className = tamanhos() + ' ' + orientacao();

    //definir a posição do mosquito
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    //criando o evento de clique
    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);
    
}


//criar tamanhos variados para o mosquito
function tamanhos() {
    let classe = Math.floor(Math.random() * 3);

    switch(classe) {
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2" 
        case 2:
            return "mosquito3"
    } 
}

//mudar a orientação do mosquito
function orientacao() {
    let classe = Math.floor(Math.random() * 3);

    switch(classe) {
        case 0:
            return "ladoA"
        case 1:
            return "ladoB" 
        case 2:
            return "ladoC"  
        }
}
