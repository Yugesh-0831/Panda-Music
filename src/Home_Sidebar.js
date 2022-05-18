import React,{useState} from 'react';
import "./Home_Sidebar.css"
import SidebarOption from './SidebarOption';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import {Switch} from "@material-ui/core"
import Player from "./Player";
import {Link} from "react-router-dom";
// import { useNavigate } from  "react-router-dom";




function Home_Sidebar({Spotify , theme , toggleTheme}){
   

  
    const[{ user,playlists}, dispatch] = useDataLayerValue();
    // const navigate = useNavigate();

        return(
            <div className="homeSidebar">
           
           {/* <div className="avatar"> */}
                 {/* <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                 <p>{user?.display_name}</p> */}
                 <img src={require("./panda6.png")} alt=""/>
                 {/* </div> */}
                 <hr />
                 <div className="options">
            <SidebarOption Icon={HomeIcon} title="Home" />
            <h4><Link to= "/">Home</Link></h4>
            </div>
            <div className="options">
                 <SidebarOption Icon={SearchIcon} title="Search" />
                 <h4><Link to= "/Search">Search</Link></h4>
                 </div>
                 <div className="options">
                 <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
                 <h4>Your Library</h4>
                 </div>
                 <br />
                 <hr />
                 <p className="sidebar_title">PLAYLISTS</p>
                 {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
        // onClick={()=> {navigate('/Player')}} />
      ))}
       <div className="theme">
       <LightModeIcon />
            <Switch color="default" onChange={toggleTheme} checked={theme === "dark"}/>
            <DarkModeIcon />
        
            </div>
               </div>
        );
    }


export default Home_Sidebar;