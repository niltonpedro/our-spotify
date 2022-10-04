import { AudioPlaylist } from 'ts-audio';
import amazonics from '../../assets/music/Bossa_NMarley/AMAZONICS.mp3';
import anakelly from '../../assets/music/Bossa_NMarley/ANAKELLY.mp3';
import BANDA from '../../assets/music/Bossa_NMarley/BANDA.mp3';
import DUAL from '../../assets/music/Bossa_NMarley/DUAL.mp3';
import FREEDOM from '../../assets/music/Bossa_NMarley/FREEDOM.mp3';
import GROOVE from '../../assets/music/Bossa_NMarley/GROOVE.mp3';
import ITUANA from '../../assets/music/Bossa_NMarley/ITUANA.mp3';
import MICHELLE from '../../assets/music/Bossa_NMarley/MICHELLE.mp3';
import SAO_VICENTE from '../../assets/music/Bossa_NMarley/SAO_VICENTE.mp3';
import SAWA from '../../assets/music/Bossa_NMarley/SAWA.mp3';
import TRIPPYNOVA from '../../assets/music/Bossa_NMarley/TRIPPYNOVA.mp3';
import URBAN_LOVE from '../../assets/music/Bossa_NMarley/URBAN_LOVE.mp3';

export default function ReprodutorBM() {
  const playlist = AudioPlaylist({
    files: [amazonics, anakelly, BANDA, DUAL, FREEDOM, GROOVE, ITUANA, MICHELLE, SAO_VICENTE, SAWA, TRIPPYNOVA, URBAN_LOVE]
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

