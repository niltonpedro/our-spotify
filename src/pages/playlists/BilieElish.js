import { AudioPlaylist } from 'ts-audio';
import goodgirls from '../../assets/goodgirls.mp3';


export default function Reprodutor() {
  const playlist = AudioPlaylist({
    files: [goodgirls]
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

