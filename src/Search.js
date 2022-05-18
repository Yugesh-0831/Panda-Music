import React,{useState, useEffect} from "react";
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";
import Sidebar from "./Sidebar";
import Body from './Body';
import Home_Footer from './Home_Footer';
import Home_Sidebar from './Home_Sidebar';
import Header from './Header';
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import { spotify } from "./App";
import SongRow3 from "./SongRow3";
import SongRow2 from "./SongRow2";

function Search({theme,toggleTheme}){

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



  const[{ user,tracks,recently_played }, dispatch] = useDataLayerValue();
  const [search,setSearch]= useState("");
const [searchResults,setSearchResults] = useState([]);


// console.log({tracks});

useEffect(() =>{
//    console.log(searchResults);

   if(!search) return setSearchResults([])

   let cancel =false;
   spotify.searchTracks(search).then((response) =>{
       if(cancel)
        dispatch({
                    type: "SET_TRACKS",
                    tracks: response,
                    
                  })
        // console.log(response);
        setSearchResults(response?.tracks.items.map((track) =>{
   //           return {
   //                artsist:track.artists[0].name,
   //    title:track.name,
   //      uri:track.uri,
   //      albumUrl:smallestAlbumImage.url 
        const smallestAlbumImage = track.album.images.reduce(
                   (smallest,image) => {
                     if(image.height<smallest.height) return image
                     return smallest
                   },track.album.images[0]
                 )
                 return{
                   artist:track.artists[0].name,
                   title:track.name,
                   uri:track.uri,
                   id:track.id,
                   albumUrl:smallestAlbumImage.url
                 }
                 }))
             
         
             return () => cancel = true
   })
             
   },[search])

        return (
            <div className="home">
                             <div class="circle1"></div>
    <div class="circle2"></div>
            <div className="homeGlass">
        
        <div className="homeTop">
                <Home_Sidebar spotify={spotify} theme={theme} toggleTheme={toggleTheme}/>
                <div className="body">
                <div className="header">
     <div className="header_left">
<SearchIcon />
<input placeholder="Search for Artists, Songs, or Podcasts"  value={search} 
onChange={e =>setSearch(e.target.value)}/>

{/* {tracks?.items.filter((item, idx) => idx < 10).map((item) => (
    <SongRow3 playSong={playSong} item={item} />
     ))} */}
     
     </div>

     <div className="header_right">

<Avatar src={user?.images[0]?.url} alt={user?.display_name} />
<h4>{user?.display_name}</h4>
     </div>
    
    </div>
    <div className="search">
    {/* {recently_played?.items.filter((item, idx) => idx < 10).map((item) => (
    <SongRow2 playSong={playSong} track={item.track} />
    ))}     */}
{searchResults.map((item) => (
    <SongRow3 playSong={playSong} item={item} />
     ))}
     </div>
     <h1>Recently Played</h1>
    {recently_played?.items.filter((item, idx) => idx < 7).map((item) => (
    <SongRow2 playSong={playSong} track={item.track} />
    ))}    
    
                </div>
                         
     </div>
    
               <div className="homeBottom">
               <Home_Footer spotify={spotify}/>
               </div>
            </div>
        </div>
        );
}



export default Search;