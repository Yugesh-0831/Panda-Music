import React, { Component } from 'react';
import { useDataLayerValue } from './DataLayer';
import "./Home_Player.css" 
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Header from './Header';
import SongRow2 from './SongRow2';
import Top_artists from './Top_artists';

function Home_Player({spotify,token}){

    const [{ top_artists,recently_played }, dispatch] = useDataLayerValue();

    // console.log({top_artists});

    const playArtist = (uri) => {
        spotify
          .play({
            context_uri: `${uri}`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
    const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((k) => {
              dispatch({
                type: "SET_ITEM",
                item: k.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };


        return (

            <div className="artists" >
              <div className="head">
              <Header spotify={spotify} token={token}/>
              </div>
              <div className="middle">
                <h1>Top Artists</h1>
             
    <div className="top_artists">{top_artists?.items.filter((item, idx) => idx < 6).map((item) => (
          <Top_artists index="idx" spotify={spotify} playArtist={playArtist} item={item} />
          ))}</div>
                <div className="recently_played">
                <h1>Recently Played</h1>
      
               
                
        {recently_played?.items.filter((item, idx) => idx < 10).map((item) => (
    <SongRow2 playSong={playSong} track={item.track} />
    ))}
    </div>
                
                </div>
              </div>
            
        );
    }


export default Home_Player;