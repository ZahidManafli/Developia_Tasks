
const audioEl = document.querySelector("audio");
const motocard = document.querySelector("#motocard")


motocard.addEventListener("mouseenter", () => {
    audioEl.play()
})

motocard.addEventListener("mouseleave", () => {
    audioEl.pause();
    audioEl.load();
})

