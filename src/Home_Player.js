import React, { Component } from 'react';
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';
import "./Home_Player.css" 
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Header from './Header';

function Home_Player({spotify}){

    const [{ top_artists,recently_played }, dispatch] = useDataLayerValue();
    // console.log({top_artists});
    // console.log({recently_played});

    // const list = []
    // for (var i=0; i < 6; i++) {
    //     list.push(<div className="ha"
    //        onClick={() => playArtist(top_artists?.items[i].uri)}> 
        
    //         <img src={top_artists?.items[i].images[0].url} alt="" />
    //     {/* <PlayCircleFilledIcon className="body_shuffle" onClick={playPlaylist} /> */}
    //     <p>{top_artists?.items[i].name}</p></div>)
    // } 


const list2=[]
    for (var j=0; j < 10; j++) {
        list2.push(<div className="Recent_Row" onClick={() => playSong(recently_played?.items[j].track.id)}>
        <img className="Recent_album" src={recently_played?.items[j].track.album.images[0].url} alt="" />
        <div className="Recent_info">
            <h1>{recently_played?.items[j].track.name}</h1>
            <p>{recently_played?.items[j].track.artists.
            map((artist) => artist.name).join(", ")} -{" "}
            {recently_played?.items[j].track.name}</p>
        </div>
        </div>)
    } 


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
              <Header spotify={spotify} />
                <h1>Top Artists</h1>
              <div className="top_artists">
                {/* {list} */}
                <div className="top_artists_info" onClick={() => playArtist(top_artists?.items[0].uri)}> 
            <img src={top_artists?.items[0].images[0].url} alt="" />
        {/* <PlayCircleFilledIcon className="body_shuffle" onClick={playArtist} /> */}
        <p>{top_artists?.items[0].name}</p>
        </div>
        <div className="top_artists_info" onClick={() => playArtist(top_artists?.items[1].uri)}> 
            <img src={top_artists?.items[1].images[0].url} alt="" />
        {/* <PlayCircleFilledIcon className="body_shuffle" onClick={playArtist} /> */}
        <p>{top_artists?.items[1].name}</p>
        </div>
        <div className="top_artists_info" onClick={() => playArtist(top_artists?.items[2].uri)}> 
            <img src={top_artists?.items[2].images[0].url} alt="" />
        {/* <PlayCircleFilledIcon className="body_shuffle" onClick={playArtist} /> */}
        <p>{top_artists?.items[2].name}</p>
        </div>
        <div className="top_artists_info" onClick={() => playArtist(top_artists?.items[3].uri)}> 
            <img src={top_artists?.items[3].images[0].url} alt="" />
        {/* <PlayCircleFilledIcon className="body_shuffle" onClick={playArtist} /> */}
        <p>{top_artists?.items[3].name}</p>
        </div>
        <div className="top_artists_info" onClick={() => playArtist(top_artists?.items[4].uri)}> 
            <img src={top_artists?.items[4].images[0].url} alt="" />
        {/* <PlayCircleFilledIcon className="body_shuffle" onClick={playArtist} /> */}
        <p>{top_artists?.items[4].name}</p>
        </div>
        <div className="top_artists_info" onClick={() => playArtist(top_artists?.items[5].uri)}> 
            <img src={top_artists?.items[5].images[0].url} alt="" />
        {/* <PlayCircleFilledIcon className="body_shuffle" onClick={playArtist} /> */}
        <p>{top_artists?.items[5].name}</p>
        </div>
                </div>
                <div className="recently_played">
                <h1>Recently Played</h1>
               
                {list2}
                
                </div>
              </div>
            
        );
    }


export default Home_Player;