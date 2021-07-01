import React from 'react'
import Controls from './Controls/Controls'
import Details from './Details/Details'
import ProgressBar from './ProgressBar/ProgressBar'
import {havana} from "./Images.js"

function Player() {
    return (
        <div style={{height: "23.7rem"}} className="overflow-auto rounded-3">
            <Details image={havana} trackName="havana" artistName="camila cabello" playlistName="best of 2021" className="mb-3" />
            <ProgressBar startingTime="2:45" endingTime="1:02" className="mb-3" />
            <Controls />
        </div>
    )
}

export default Player
