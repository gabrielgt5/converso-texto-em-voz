//Buscando elementos do documento HTML
const textearea = document.getElementById("texto");
const botaoFalar = document.getElementById("fala");
const voiceSelect = document.getElementById("voz");
const rateInput = document.getElementById("rate");

function populaVozes() {
  vozes = speechSynthesis.getVoices();
  vozes.forEach((voz, i) => {
    let opcoes = document.createElement("option");
    opcoes.value = i;
    opcoes.textContent = `${voz.name} (${voz.lang})`;
    voiceSelect.appendChild(opcoes);
  });
}

speechSynthesis.addEventListener("voiceschanged", populaVozes);

botaoFalar.addEventListener("click", () => {
  let text = textearea.value;
  let utterance = new SpeechSynthesisUtterance(text);

  let selectedVoiceIndex = voiceSelect.value;
  utterance.vozes = vozes[selectedVoiceIndex];

  utterance.rate = rateInput.value;
  speechSynthesis.speak(utterance);
});
