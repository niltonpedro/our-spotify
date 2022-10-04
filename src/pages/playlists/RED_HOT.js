import { AudioPlaylist } from 'ts-audio';
import Breaking from '../../assets/music/Red_Hot/Breaking.mp3';
import Californication from '../../assets/music/Red_Hot/Californication.mp3';
import Give from '../../assets/music/Red_Hot/Give.mp3';
import Otherside from '../../assets/music/Red_Hot/Otherside.mp3';
import Parallel_Universe from '../../assets/music/Red_Hot/Parallel_Universe.mp3';
import Scar_Tissue from '../../assets/music/Red_Hot/Scar_Tissue.mp3';
import Squeeze from '../../assets/music/Red_Hot/Squeeze.mp3';
import Suck from '../../assets/music/Red_Hot/Suck.mp3';
import Under from '../../assets/music/Red_Hot/Under.mp3';
import Way from '../../assets/music/Red_Hot/Way.mp3';

export default function ReprodutorRH() {
  const playlist = AudioPlaylist({
    files: [Breaking, Californication, Give, Otherside, Parallel_Universe, Scar_Tissue, Squeeze, Suck, Under, Way]
  })

  const play = () => {
    playlist.play()
  }

  const pause = () => {
    playlist.pause()
  }

  const next = () => {
    playlist.next()
  }


  const stop = () => {
    playlist.stop()
  }

  return (
    <>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={next}>Next</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}

