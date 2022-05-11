
import React,{ useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromResponse } from './Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player'
import { useDataLayerValue } from './DataLayer';
import Home from './Home';
import { BrowserRouter as Switch,Routes,Route} from 'react-router-dom';
import { TransitionGroup,CSSTransition } from 'react-transition-group';

const spotify = new SpotifyWebApi();
const hash = getTokenFromResponse();
window.location.hash="";


const _token = hash.access_token;

function App() {

  //const [ token , dispatch] = useDataLayerValue();
  const [ token, setToken] = useState(null);
  const [user , dispatch]= useDataLayerValue(); 
  const[search,setSearch]=useState("");
  const[searchResult,setSearchResults]= useState([]);
  const[playingTrack,setPlayingTrack]=useState();
  // run code based on  a condititon

  // function chooseTrack(track){
  //   setPlayingTrack(track)
  //   }
  useEffect(() => {
    spotify.getMyRecentlyPlayedTracks().then((response) =>
                dispatch({
                  type: "SET_RECENTLY_PLAYED",
                  recently_played: response,
                  
                })
              );

  },);

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

  // useEffect(() =>{
  //   if(!search) return setSearchResults([])
  //   if(!_token) return
  //   let cancel = false 
  //   spotify.searchTracks(search).then(res=>{
      
  //     setSearchResults(res.body.tracks.items.map(track =>{
  //       if(cancel) return
  //       const smallestAlbumImage = track.album.image.reduce(
  //         (smallest,image) => {
  //           if(image.height<smallest.height) return image
  //           return smallest
  //         },track.album.images[0]
  //       )
  //       return{
  //         artsist:track.artists[0].name,
  //         title:track.name,
  //         uri:track.uri,
  //         albumUrl:smallestAlbumImage.url
  //       }
  //     })
  //   )})

  //   return () => cancel = true
  // },[search,_token])
  // console.log(user);


  return (
    <Switch>
    <div className="app">
   {
     token ? (
       <Routes>
         <Route path="/" element={<Home spotify={spotify} accesstoken={_token}/>} />
         <Route path="/Player" element={<Player spotify={spotify}/>} />
       {/* <Home spotify={spotify} accesstoken={_token}/> */}
       </ Routes>
       
     ) : (
      <Login />
     )
   }
      
    </div>
    </Switch>
  );
}

export default App;
