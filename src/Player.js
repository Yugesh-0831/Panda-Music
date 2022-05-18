import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from './Body';
import Home_Footer from './Home_Footer';
import Home_Sidebar from './Home_Sidebar';

function Player({ spotify,theme,toggleTheme }){

        return (
            <div className="home">
                               <div class="circle1"></div>
    <div class="circle2"></div>
            <div className="homeGlass">
                <div className="homeTop">
                <Home_Sidebar spotify={spotify} theme={theme} toggleTheme={toggleTheme}/>
                <Body spotify={spotify}/>
                    </div>
               <div className="homeBottom">
               <Home_Footer spotify={spotify}/>
               </div>
            </div>
        </div>
        );
}



export default Player;