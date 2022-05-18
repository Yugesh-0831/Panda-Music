import React,{useState, useEffect} from "react";
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import { spotify } from "./App";
import SongRow3 from "./SongRow3";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom";

function Header({ token }){

     const[style,setStyle]=useState("cont");

     const changeStyle = () => {
          // setStyle("cont2");
          setStyle((curr) =>(curr==="cont" ? "cont2" : "cont"));
        };

     // function myFunction() {
     //      document.getElementById("myDropdown").classList.toggle("show");
     //    }
        
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }

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

    const[{ user,tracks }, dispatch] = useDataLayerValue();
    const [search,setSearch]= useState("");
const [searchResults,setSearchResults] = useState([]);


// console.log({tracks});

// useEffect(() =>{
     // console.log(searchResults);

     // if(!search) return setSearchResults([])
     // spotify.searchTracks(search).then((response) =>{
     //      dispatch({
     //                  type: "SET_TRACKS",
     //                  tracks: response,
                      
     //                })
          // console.log(response);
          // setSearchResults(response?.items.map((track) =>{
     //           return {
     //                artsist:track.artists[0].name,
     //    title:track.name,
     //      uri:track.uri,
     //      albumUrl:smallestAlbumImage.url 
          // const smallestAlbumImage = track.album.images.reduce(
          //            (smallest,image) => {
          //              if(image.height<smallest.height) return image
          //              return smallest
          //            },track.album.images[0]
          //          )
               //     return{
               //       artsist:track.artists[0].name,
               //       title:track.name,
               //       uri:track.uri,
                    //  albumUrl:smallestAlbumImage.url
               //     }
               //     }))
               //   })
               
           
               // return () => cancel = true
     // })
               
     // },[search])
     // if(!search) return setSearchResults([])
     // if(!token) return
     // let cancel = false 
     // // spotify.searchTracks(search).then(res=>{
     //      spotify.searchTracks(search).then((response) =>{
     //      console.log(response)
     //      // dispatch({
     //      //   type: "SET_TRACKS",
     //      //   tracks: response,
            
     //      // })
     //   setSearchResults(response.body.tracks.items.map(track =>{
     //     if(cancel) return
     //     const smallestAlbumImage = track.album.image.reduce(
     //       (smallest,image) => {
     //         if(image.height<smallest.height) return image
     //         return smallest
     //       },track.album.images[0]
     //     )
     //     return{
     //       artsist:track.artists[0].name,
     //       title:track.name,
     //       uri:track.uri,
     //       albumUrl:smallestAlbumImage.url
     //     }
     //   })
     // )})
 
     // return () => cancel = true
//    },[search])
//    // console.log(user);


return(
    <div className="header">
     <div className="header_leftt">
          <ArrowBackIosNewIcon className="back"/>
          <ArrowForwardIosIcon className="front"/>
{/* <SearchIcon />
<input placeholder="Search for Artists, Songs, or Podcasts"  value={search} 
onChange={e =>setSearch(e.target.value)}/> */}
</div>
{/* {tracks?.items.filter((item, idx) => idx < 10).map((item) => (
    <SongRow3 playSong={playSong} item={item} />
     ))} */}
{/* </div> */}
     {/* </div> */}
     <div className="header_right">
    
<Avatar src={user?.images[0]?.url} alt={user?.display_name} />

<h4>{user?.display_name}</h4>
<div className="menu">
<div class="dropdown">
<ArrowDropDownIcon onClick={changeStyle}/>

  </div>
<div  className={style} >
   <p><Link to= "/Contact">About Us</Link></p>
    <p><Link to= "/Login">Log Out</Link></p>  
  </div>
  </div>
     </div>
    </div>
)

}

export default Header;