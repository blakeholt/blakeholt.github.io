window.onload = () => {
    document.getElementById("clickme").addEventListener("click", () => speak('Fuck you.'));
}

function speak(message) {
    var msg = new SpeechSynthesisUtterance(message)
    var voices = window.speechSynthesis.getVoices()
    console.log(voices)
    msg.voice = voices[0]
    window.speechSynthesis.speak(msg)
}
