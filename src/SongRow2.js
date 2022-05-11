import React from 'react';
import "./SongRow.css";


function SongRow2({ playSong,track }) {
        return (
            <div className="SongRow" onClick={() => playSong(track.id)}>
                <img className="SongRow_album" src={track.album.images[0].url} alt="" />
                <div className="SongRow_info">
                    <h1>{track.name}</h1>
                    <p>{track.artists.
                    map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}</p>
                </div>

            </div>
        );
    }



export default SongRow2;