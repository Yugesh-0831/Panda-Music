import React, { Component } from 'react';
function TrackSearchResult({track}){
        return (
            <div>
<img src={track.albumUrl} />
            </div>
        );
    }



export default TrackSearchResult;