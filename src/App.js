
import React,{ useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromResponse } from './Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player'
import { useDataLayerValue } from './DataLayer';
import Home from './Home';

const spotify = new SpotifyWebApi();
const hash = getTokenFromResponse();
window.location.hash="";

const _token = hash.access_token;

function App() {


  const [ token, setToken] = useState(null);
  const [user , dispatch]= useDataLayerValue(); 
 
  // run code based on  a condititon


  useEffect(() => {
    spotify.getMyRecentlyPlayedTracks().then((response) =>
                dispatch({
                  type: "SET_RECENTLY_PLAYED",
                  recently_played: response,
                  
                })
              );
  })
  useEffect(() => {
   

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token :_token,
      });
      
      spotify.getMe().then((user)=>{
        dispatch({
          type: "SET_USER",
          user: user,
        
        });
        
    }
    );
spotify.getUserPlaylists().then((playlists)=>{
dispatch({
  type : "SET_PLAYLISTS",
  playlists: playlists,
});
    });

    spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

    spotify.getPlaylist('789PBjuDj3ELMhQgO1Asqh').then(response =>
      dispatch({

        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );
    spotify.getMyRecentlyPlayedTracks().then((response) =>
                dispatch({
                  type: "SET_RECENTLY_PLAYED",
                  recently_played: response,
                  
                })
              );
    }

  },[_token]);


  return (
    <div className="app">
   {
     token ? (
       <Home spotify={spotify} accesstoken={_token}/>
     ) : (
      <Login />
     )
   }
      
    </div>
  );
}

export default App;
