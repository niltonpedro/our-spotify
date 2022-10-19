import React, { Component } from 'react';
import './Playlist.css'
import bilie from '../../assets/homepage/bilie.jpg';
import BilieElish from '../playlists/BilieElish'
import { Link} from "react-router-dom";



function PlaylistList () {
    const dados = PlaylistList.map((play) => {
       
            return(
                <Link to={`/playlistlist/${play.id}`}>
                <div className='background' >
                <div className="pictureAndTitle">
                    <div className="content">
                        <img src={play.image} alt="bilieAlbum" />
                        <span></span>
                    </div>
                </div>

                <div className="listOfMusics">
                    <ul>
                        <li>
                            <div className="blocos">
                                <div className="comandsMusic">
                                    {play.callAction}
                                </div>
                                <div className="MusicInfo">
                                    <div className="title">
                                       {play.title}
                                    </div>
                                    <div className="artista">
                                      {play.title}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div></Link>
                )
        }
    )

    return(
        <div>
        {dados}
        </div>
    )
    

}

export default PlaylistList;