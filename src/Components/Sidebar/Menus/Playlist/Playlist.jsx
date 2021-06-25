import React from 'react'
import {PlayCircleFill, PlusSquareFill} from 'react-bootstrap-icons'
import ListHeadline from "../ListHeadline/ListHeadline"
import ListItem from "../ListItem/ListItem"

function Playlist({className}) {
    return (
        <div className={`${className} w-100 px-2`}>
            <ListHeadline title="playlist" className="mb-2" />
            <ListItem icon={<PlusSquareFill />} title="create new" />
            <ListItem icon={<PlayCircleFill />} title="design flow" />
            <ListItem icon={<PlayCircleFill />} title="best of 2021" />
            <ListItem icon={<PlayCircleFill />} title="india jams" />
        </div>
    )
}

export default Playlist
