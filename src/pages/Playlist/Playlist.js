import React, { Component } from 'react';
import './Playlist.css'
import bilie from '../../assets/homepage/bilie.jpg';
import BilieElish from '../playlists/BilieElish'

const musics = [
    {
        id: 1,
        title: 'This is Bilie Elish',
        nameMusic: 'All good girls',
        artist: 'Billie elish',
    },
    {
        id: 2,
        title: 'You make me hate this city',
        nameMusic: 'You make me hate this city',
        artist: 'Billie elish and Dua Lipa',
    },
    {
        id: 3,
        title: 'Nowdays paranoia',
        nameMusic: 'Nowdays paranoia',
        artist: 'Billie elish and Post malone',
    },
    {
        id: 4,
        title: 'Think out',
        nameMusic: 'Think out',
        artist: 'Billie elish',
    }
];
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
                        {musics.map( music => (
                            <ul>
                                <li>
                                    <div className="blocos">
                                        <div className="comandsMusic">
                                            <BilieElish/>
                                        </div>
                                        <div className="MusicInfo">
                                            <div className="title">
                                                <span>{music.nameMusic}</span>
                                            </div>
                                            <div className="artista">
                                                <span>{music.artist}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>                
                            </ul>
                        ))}
                </div>   
            </div>
        );
    }
}

export default Playlist;