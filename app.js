// let titulo = document.querySelector('h1');
// titulo.innerHTML = ("Jogo do número Secreto");

// let texto = document.querySelector('p');
// texto.innerHTML = ("Ecolha um número entre 1 e 10");
let listaDeNumerosSorteados = [];
let limiteDeNumeros = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;
    if (quantidadeDeElementos == limiteDeNumeros) {listaDeNumerosSorteados = []};
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push (numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    
    }
}

function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirInicial(){
exibirTextoNaTela ('h1','Jogo do número secreto');
exibirTextoNaTela ('p',`Ecolha um número entre 1 e ${limiteDeNumeros}`);
}
exibirInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1','Parabéns');
        exibirTextoNaTela ('p',`Você acertou o número secreto com ${tentativas} ${palavraTentativas}`);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela ('p','O número secreto é menor');
        } else {
            exibirTextoNaTela ('p','O número secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }
   

}
function reiniciarJogo() {
numeroSecreto = gerarNumeroAleatorio()
limparCampo();
exibirInicial();
tentativas = 1;
document.getElementById ('reiniciar').setAttribute('disabled',true);
}

