import React from 'react'
import { DiscFill,MicFill,MusicPlayerFill,VolumeDownFill } from 'react-bootstrap-icons'
import ListHeadline from "../ListHeadline/ListHeadline"
import ListItem from "../ListItem/ListItem"

function Menu({className}) {
    return (
        <div className={`${className} w-100 px-2`}>
            <ListHeadline title="menu" className="mb-2" />
            <ListItem icon={<DiscFill />} title="explore" />
            <ListItem icon={<VolumeDownFill />} title="genres" />
            <ListItem icon={<DiscFill />} title="albums" />
            <ListItem icon={<MicFill />} title="artists" />
            <ListItem icon={<MusicPlayerFill />} title="radio" />
        </div>
    )
}

export default Menu
