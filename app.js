// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo adivinhe o número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um  número entre 1 e 10";
let numeroLimite = 10;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let  tentativas = 1;

function mensagemInicial(){
    exibirTextonaTela("h1", "Jogo do número secreto");
    exibirTextonaTela("p", "Escolha um núnero entre 1 e 10");
}
mensagemInicial()

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextonaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";//Aqui estou armazenando, por questões obvias `depende do numero de tentativas`
        let mensagensTentativas = `Parabéns descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextonaTela("p",mensagensTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute > numeroSecreto) {
        exibirTextonaTela("h1", "Errou!");
        exibirTextonaTela("p", "O numero  secreto é menor");
    } else {
        exibirTextonaTela("p", "O numero secreto é maior");
    } 
    tentativas++;
    limpeCampo();

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 3 + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNalista == 3){
        listaDeNumerosSorteados= [];

    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
return gerarNumeroAleatorio();
} else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido
}
}

function limpeCampo(){
    chute = document.querySelector("input");
    chute.value = "";

}
function verificarReinicio(){
     numeroSecreto = gerarNumeroAleatorio();
     limpeCampo();
     tentativas = 1;
mensagemInicial();
document.getElementById("reiniciar").setAttribute("disable", true)
}
le