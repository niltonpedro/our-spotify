import React, { Component } from 'react';
import './Playlist.css'
import bilie from '../../assets/homepage/bilie.jpg';
import BilieElish from '../playlists/BilieElish'
class Playlist extends Component {

    render() {
        return (
            
            <div className='background' >
                <div className="pictureAndTitle">
                    <div className="content">
                        <img src={bilie} alt="bilieAlbum" />
                        <span>This is Bilie Elish</span>
                    </div>
                </div>

                <div className="listOfMusics">
                    <ul>
                        <li>
                            <div className="blocos">
                                <div className="comandsMusic">
                                    <BilieElish/>
                                </div>
                                <div className="MusicInfo">
                                    <div className="title">
                                        <span>All good girls</span>
                                    </div>
                                    <div className="artista">
                                        <span>Bilie Elish</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }
}

export default Playlist;