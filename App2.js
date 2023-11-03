// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto!";

// //let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 100";

let numeroAleatorio = geraNumeroAleatorio();
let tentativa = 1
let MaximoNumeroAleatorio = 100

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, "Brazilian Portuguese Female",{rate: 1.2});
}

function exibeTexto(){ 
exibirTextoNaTela("h1", "Jogo do número secreto!");
exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    console.log(numeroAleatorio);
    console.log(chute == numeroAleatorio);
   
    if(chute == numeroAleatorio){ 
        exibirTextoNaTela("h1", "Você Acertou!");
        exibirTextoNaTela("p", "Você descobriu o número secreto em " + tentativa + " tentativa(s)!");
        limpaCampo();
        document.getElementById("reiniciar").removeAttribute("disabled")
    }  else {
        if(chute < numeroAleatorio ){
        exibirTextoNaTela("h1", "o número é maior que " + chute);
    } else{
        exibirTextoNaTela("h1","o número é menor que " + chute);
    }
    tentativa++
    }
} 


function geraNumeroAleatorio() {
     return parseInt(Math.random() * limiteNumeroAleatorio + 1);
}

function limpaCampo(){ 
    chute = document.querySelector("input")
    chute.value = ("")

}
reiniciaJogo();
function reiniciaJogo(){
    numeroAleatorio = geraNumeroAleatorio();
    exibeTexto();
    limpaCampo();
    tentativa = 1;
    document.getElementById("reiniciar").setAttribute("disabled",true);
    
}