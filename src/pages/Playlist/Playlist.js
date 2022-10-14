import React, { Component } from 'react';
import './Playlist.css'
import bilie from '../../assets/homepage/bilie.jpg';
import BilieElish from '../playlists/BilieElish'

const musics = [
    {
        title: 'This is Bilie Elish',
        nameMusic: 'All good girls',
        artist: 'Billie elish',
    },
    {
        title: 'You make me hate this city',
        nameMusic: 'You make me hate this city',
        artist: 'Billie elish and Dua Lipa',
    },
    {
        title: 'Nowdays paranoia',
        nameMusic: 'Nowdays paranoia',
        artist: 'Billie elish and Post malone',
    },
    {
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