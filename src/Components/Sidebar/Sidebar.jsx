import React from 'react'
import Brand from '../Brand/Brand'
import Menu from './Menus/Menu/Menu'
import Library from "./Menus/Library/Library"
import Playlist from "./Menus/Playlist/Playlist"
import {default as CurrentDevice} from "./Menus/CurrentDevice/Device"

function Sidebar() {
    return (
        <div className="theme-secondary-black h-100 p-3 overflow-auto">
            <Brand className="mb-4" />
            <Menu className="mb-4" />
            <Library className="mb-4" />
            <Playlist className="mb-3" />
            <CurrentDevice />
        </div>
    )
}

export default Sidebar
