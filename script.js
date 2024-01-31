const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo")
const avançarFaixa = document.getElementById("proxima")
const retornarFaixa = document.getElementById("anterior")
const nomeCapitulo = document.getElementById("capitulo")
const botaoVolume = document.getElementById("volumeControl")


const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

botaoVolume.oninput = function () {
    audioCapitulo.volume = botaoVolume.value / 100

}

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    trocarNomeFaixa()
}
function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");

}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = "Capítulo " + capituloAtual

}
function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    }
    else {
        pausarFaixa();
        taTocando = 0;
    }
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    }
    else {
        capituloAtual = capituloAtual + 1
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    }
    else {
        capituloAtual = capituloAtual - 1
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
avançarFaixa.addEventListener("click", proximaFaixa);
retornarFaixa.addEventListener("click", voltarFaixa);


function adjustSliderWidth() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const sliderWidth = Math.min(10, screenWidth * 0.10);
    volumeControl.style.width = `${sliderWidth}%`;
}


adjustSliderWidth();
window.addEventListener('resize', adjustSliderWidth);
;



