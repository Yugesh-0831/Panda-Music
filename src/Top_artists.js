import React, { Component } from 'react';


function Top_artists({playArtist, item}){
   
        return (

                <div className="top_artists_info" onClick={() => playArtist(item.uri)}> 
            <img src={item.images[0].url} alt="" />
        {/* <PlayCircleFilledIcon className="body_shuffle" onClick={playArtist} /> */}
        <p>{item.name}</p>
        </div>
        
        );
    }


export default Top_artists;
