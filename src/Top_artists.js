import React, { Component } from 'react';
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import "./Top_artists.css"
import {Link} from "react-router-dom";

function Top_artists({playArtist, item}){
   
        return (

               <div className="top_artists_info" onClick={() => playArtist(item.uri)}> 
            <img src={item.images[0].url} alt="" />
            <div className="hide">
        <PlayCircleFilledIcon />
        </div>
        <p>{item.name}</p>
        </div>

        
        );
    }


export default Top_artists;
