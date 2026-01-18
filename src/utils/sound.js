let soundEnabled = false
let bgAudio = null

// يتنادى مرة واحدة بعد user interaction
export const enableSound = () => {
  soundEnabled = true
}

// Sound effects (click, hover, etc.)
export const playSound = (src) => {
  if (!soundEnabled) return

  const audio = new Audio(src)
  audio.volume = 0.4
  audio.play().catch(() => {})
}

// Background music (loop)
export const startBackgroundMusic = () => {
  if (!soundEnabled) return

  if (!bgAudio) {
    bgAudio = new Audio("/audio/bg-music.mp3")
    bgAudio.loop = true
    bgAudio.volume = 0.35
  }

  bgAudio.play().catch(() => {})
}

// Stop music (optional)
export const stopBackgroundMusic = () => {
  if (bgAudio) bgAudio.pause()
}

// Toggle mute
export const toggleMute = () => {
  if (!bgAudio) return false

  bgAudio.muted = !bgAudio.muted
  return bgAudio.muted
}
