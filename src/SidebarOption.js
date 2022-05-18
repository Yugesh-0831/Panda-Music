import React from 'react';
import './SidebarOption.css'
import Player from './Player';
import {Link} from "react-router-dom";
import Home from './Home';

function SidebarOption({title,Icon}){

    return(

        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_icon"></Icon>}

{Icon ? <h4></h4> : <p><Link to= "/Player"> {title}</Link></p>}
        </div>
    );
}



export default SidebarOption;