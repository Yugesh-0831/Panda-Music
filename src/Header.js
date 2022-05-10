import React,{useState} from "react";
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import TrackSearchResult from "./TrackSearchResult";

function Header({ spotify }){

    const[{ user }, dispatch] = useDataLayerValue();
    const [search,setSearch]= useState("");
const [searchResults,setSearchResults] = useState([]);
return(
    <div className="header">
     <div className="header_left">
<SearchIcon />
<input placeholder="Search for Artists, Songs, or Podcasts"  value={search} 
onChange={e =>setSearch(e.target.value)}/>
<div>
     {searchResults.map(track => (
     <TrackSearchResult track={track} key={track.uri} />    
     ))}
</div>
     </div>
     <div className="header_right">

<Avatar src={user?.images[0]?.url} alt={user?.display_name} />
<h4>{user?.display_name}</h4>
     </div>
    </div>
)

}

export default Header;