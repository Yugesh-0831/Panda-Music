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
// import { useNavigate } from  "react-router-dom";




function Home_Sidebar({Spotify} ){

  
    const[{ user,playlists}, dispatch] = useDataLayerValue();
    // const navigate = useNavigate();
    // console.log({user});

        return(
            <div className="homeSidebar">
           
           <div className="avatar">
                 <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                 <p>{user?.display_name}</p>
                 </div>
                 <hr />
            <SidebarOption Icon={HomeIcon} title="Home" />
                 <SidebarOption Icon={SearchIcon} title="Search" />
                 <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
                 <br />
                 <hr />
                 <p className="sidebar_title">PLAYLISTS</p>
                 {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
        // onClick={()=> {navigate('/Player')}} />
      ))}
       <div className="theme">
       <DarkModeIcon />
            <Switch />
            <LightModeIcon />
           
            </div>
               </div>
        );
    }


export default Home_Sidebar;