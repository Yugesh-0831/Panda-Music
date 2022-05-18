import React, { Component } from 'react';
import "./Home.css";
import Home_Sidebar from './Home_Sidebar';
import Home_Footer from "./Home_Footer";
import Home_Player from "./Home_Player";


function Home({spotify,token , theme , toggleTheme}){

        return (
            <div className="home">
                             <div class="circle1"></div>
    <div class="circle2"></div>
                <div className="homeGlass">
                    <div className="homeTop">
                    <Home_Sidebar spotify={spotify} theme={theme} toggleTheme={toggleTheme}/>
                    <Home_Player spotify={spotify} accesstoken={token}/>
                        </div>
                   
                   <div className="homeBottom">
                   
                   <Home_Footer spotify={spotify}/>
      
                   </div>
                </div>
            </div>
        );
    }



export default Home;