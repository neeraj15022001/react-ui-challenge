import React from 'react'
import Links from './Links/Links'
import {default as CustomSearch} from "./Search/Search"
import Profile from "./Profile/Profile"

function Navbar({className}) {
    return (
        <div className={`${className} d-flex align-items-center justify-content-between p-3 position-absolute top-0 end-0 start-0`}>
            <Links />
            <CustomSearch className="me-5" />
            <Profile />
        </div>
    )
}

export default Navbar
