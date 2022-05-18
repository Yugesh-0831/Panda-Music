import React from 'react';
import "./SongRow.css";


function SongRow3({ playSong,item }) {
        return (
            <div className="SongRow" onClick={() => playSong(item.id)}>
                <img className="SongRow_album" src={item.albumUrl} alt="" />
                <div className="SongRow_info">
                    <h1>{item.title}</h1>
                    <p>{item.artist}</p>
                </div>

            </div>
        );
    }



export default SongRow3;