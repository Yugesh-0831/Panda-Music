import React, { Component } from 'react';
import "./Home.css";
import Home_Sidebar from './Home_Sidebar';
import Home_Footer from "./Home_Footer";
import Home_Player from "./Home_Player"
;
function Home({spotify}){


        return (
            <div className="home">
                <div className="homeGlass">
                    <div className="homeTop">
                    <Home_Sidebar spotify={spotify}/>
                    <Home_Player spotify={spotify}/>
                        </div>
                   <div className="homeBottom">
                   <Home_Footer spotify={spotify}/>
                   </div>
                </div>
            </div>
        );
    }



export default Home;