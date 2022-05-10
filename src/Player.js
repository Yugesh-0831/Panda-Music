import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from './Body';
import Footer from './Footer';
import Home_Sidebar from './Home_Sidebar';

function Player({ spotify },{accesstoken}){

        return (
            <div className="home">
            <div className="homeGlass">
                <div className="homeTop">
                <Home_Sidebar spotify={spotify}/>
                <Body spotify={spotify}/>
                    </div>
               <div className="homeBottom">
               <Footer spotify={spotify}/>
               </div>
            </div>
        </div>
        );
}



export default Player;