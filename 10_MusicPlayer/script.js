const song = document.querySelector("#song")
const progress = document.querySelector("#progress")
const ctrlIcon = document.querySelector("#ctrlIcon")

song.onloadedmetadata = function () {
    progress.max = song.duration
    progress.value = song.currentTime
}

function playPouse() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    } else {
        song.play()
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }
}

song.ontimeupdate = () => {
    progress.value = song.currentTime
}

progress.oninput = () => {
    song.currentTime = progress.value
}

progress.onchange = () => {
    song.play()
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")
}

ctrlIcon.parentElement.addEventListener("click", playPouse)
