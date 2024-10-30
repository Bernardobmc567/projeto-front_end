const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
const video = document.getElementById("video");

listaSelecaoPokedevs.forEach(pokedev => {
	pokedev.addEventListener("click", () => {
		esconderCartaoPokedev();

		const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

		desativarPokedevNaListagem();
		ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

		moverVideoParaPokedevSelecionado(pokedev);
	})
})


function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
	const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
	pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
	const pokedevAtivoNaListagem = document.querySelector(".ativo");
	pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
	const idPokedevSelecionado = pokedev.attributes.id.value;
	const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
	const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
	cartaoPokedevParaAbrir.classList.add("aberto");
	return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
	const cartaoPokedevAberto = document.querySelector(".aberto");
	cartaoPokedevAberto.classList.remove("aberto");
}

function moverVideoParaPokedevSelecionado(pokedev) {
    pokedev.appendChild(video); // Mova o vídeo para o novo <li> selecionado
}

// Seleciona o áudio e o ícone
const audioElement = document.getElementById("audio-element");
const audioIcon = document.getElementById("audio-icon");

// Define o estado inicial como mutado
audioElement.muted = true;

// Função para alternar entre ativado e desativado
function toggleAudio() {
    if (audioElement.muted) {
        audioElement.muted = false;
        audioIcon.src = "./src/images/Alto-falante.png"; // Ícone de áudio ligado
        audioElement.play(); // Toca o áudio se estiver pausado
    } else {
        audioElement.muted = true;
        audioIcon.src = "./src/images/Silencioso.png"; // Ícone de áudio desligado
        audioElement.pause(); // Pausa o áudio se quiser parar ao mutar
    }
}

// Adiciona o evento de clique
audioIcon.addEventListener("click", toggleAudio);
