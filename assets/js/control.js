let playlist = ['music(1).mp3', 'music(2).mp3', 'music(3).mp3', 'music(4).mp3']

let treck
window.onload = function () {
  treck = 0
}

let audio = document.getElementById('audio')
let time = document.querySelector('.time')
let btnPlay = document.querySelector('.play')
let btnPause = document.querySelector('.pause')
let btnPrev = document.querySelector('.prev')
let btnNext = document.querySelector('.next')

function switchTreck(numTreck) {
  audio.src = './assets/music/' + playlist[numTreck]
  audio.currentTime = 0
  btnPlay.click()
  btnPlay.classList.add('hidden')
  btnPause.classList.remove('hidden')
}

btnPlay.addEventListener('click', function () {
  audio.play()
  btnPlay.classList.add('hidden')
  btnPause.classList.remove('hidden')
  audioPlay = setInterval(function () {
    let audioTime = Math.round(audio.currentTime)
    let audioLength = Math.round(audio.duration)
    time.style.width = (audioTime * 100) / audioLength + '%'
  }, 10)
})

btnPause.addEventListener('click', function () {
  audio.pause()
  btnPlay.classList.remove('hidden')
  btnPause.classList.add('hidden')
  clearInterval(audioPlay)
})

btnPrev.addEventListener('click', function () {
  if (treck > 0) {
    treck--
    switchTreck(treck)
  } else {
    treck = playlist.length - 1
    switchTreck(treck)
  }
})

btnNext.addEventListener('click', function () {
  if (treck < playlist.length - 1) {
    treck++
    switchTreck(treck)
  } else {
    treck = 0
    switchTreck(treck)
  }
})

btnPlay.click()
