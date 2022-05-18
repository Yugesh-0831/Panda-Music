
import React,{ useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player'
import { useDataLayerValue } from './DataLayer';
import Home from './Home';
import { BrowserRouter as Switch,Routes,Route} from 'react-router-dom';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import Search from './Search';
import { useLocation } from 'react-router-dom'
import { createContext } from 'react';
import Contact from './Contact';

export const spotify = new SpotifyWebApi();
const hash = getTokenFromResponse();
window.location.hash="";

export const ThemeContext = createContext(null);


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

  const[theme,setTheme] = useState("light")

 const toggleTheme = () =>{
    setTheme((curr) =>(curr==="light" ? "dark" : "light"));
  }
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




  return (
    // <TransitionGroup>
    //   <CSSTransition
    //   timeout={250}
    //   classNames="fade"
    //   >
    <ThemeContext.Provider value={{theme,toggleTheme}} >
    <Switch>
    <div className="app" id={theme} >
   {
     token ? (
       <Routes>
         <Route path="/" element={<Home spotify={spotify} accesstoken={_token} theme= {theme} toggleTheme={toggleTheme}/>} />
         <Route path="/Player" element={<Player spotify={spotify} theme= {theme} toggleTheme={toggleTheme}/>} />
         <Route path="/Search" element={<Search spotify={spotify} theme= {theme} toggleTheme={toggleTheme}/>} />
         <Route path="/Login" element={<Login/>} />
         <Route path="/Contact" element={<Contact/>} />
       {/* <Home spotify={spotify} accesstoken={_token}/> */}
       </ Routes>
       
     ) : (
      <Login />
     )
   }
      
    </div>
    </Switch>
    </ThemeContext.Provider >
  //   {/* </CSSTransition>
  //   </TransitionGroup> */}
  );
}

export default App;

