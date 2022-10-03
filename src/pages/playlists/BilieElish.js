// import React, { Component } from "react";

// let goodgirls = new Audio(my_goodgirls);
// goodgirls.play();
// goodgirls.pause();

// // Import your audio file
// import goodgirls from "../../../public/Assets/Music";

// class App extends Component {
//   // Create state
//   state = {

//     // Get audio file in a variable
//     audio: new Audio(goodgirls),

//     // Set initial state of song
//     isPlaying: false,
//   };

//   // Main function to handle both play and pause operations
//   playPause =() => {

//     // Get state of song
//     let isPlaying = this.state.isPlaying;

//     if (isPlaying) {
//       // Pause the song if it is playing
//       this.state.audio.pause();
//     } else {

//       // Play the song if it is paused
//       this.state.audio.play();
//     }

//     // Change the state of song
//     this.setState({ isPlaying: !isPlaying });
//   };

//   render() {
//     return (
//       <div>
//         {/* Show state of song on website */}
//         <p>
//           {this.state.isPlaying ? 
//             "Song is Playing" : 
//             "Song is Paused"}
//         </p>

//         {/* Button to call our main function */}
//         <button onClick={this.playPause}>
//           Play | Pause
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

import { AudioPlaylist } from 'ts-audio';
import goodgirls from '../../Assets/Music';
import Amazonics from '../../Assets/Music/bossa NMarley';

export default function App() {
  const playlist = AudioPlaylist({
    files: [goodgirls, Amazonics]
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

  const previous = () => {
    playlist.prev()
  }

  const stop = () => {
    playlist.stop()
  }

  return (
    <>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={next}>Next</button>
      <button onClick={prev}>Prev</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}

