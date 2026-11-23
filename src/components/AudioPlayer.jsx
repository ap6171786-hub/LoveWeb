import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioPlayer({ started }) {
  const [muted, setMuted] = useState(false)
  const contextRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!started || muted) return
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    const context = contextRef.current || new AudioContext()
    contextRef.current = context
    if (context.state === 'suspended') context.resume()

    const notes = [261.63, 329.63, 392, 329.63, 293.66, 349.23, 440, 349.23]
    let index = 0
    const playNote = () => {
      if (!contextRef.current) return
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.value = notes[index++ % notes.length]
      gain.gain.setValueAtTime(0.018, context.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 1.2)
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start()
      oscillator.stop(context.currentTime + 1.2)
    }
    playNote()
    timerRef.current = window.setInterval(playNote, 1250)
    return () => window.clearInterval(timerRef.current)
  }, [started, muted])

  const toggle = () => {
    setMuted((value) => !value)
  }

  return (
    <button className="music-toggle" onClick={toggle} aria-label={muted ? 'Unmute music' : 'Mute music'}>
      {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </button>
  )
}
