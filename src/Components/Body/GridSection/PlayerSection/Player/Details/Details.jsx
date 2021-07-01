import React from 'react'
import { Container, Image } from 'react-bootstrap'

function Details({image, trackName, artistName, playlistName, className}) {
    return (
        <Container className={`${className} d-flex align-items-center justify-content-center flex-column`}>
            <Image src={image} alt={trackName} width="115" className="rounded-3 mb-2" />
            <p className="text-capitalize fs-4 fw-bold p-0 m-0">{trackName}</p>
            <p className="text-capitalize fs-6 fw-bolder p-0 m-0">{artistName}</p>
            <p className="text-capitalize text-themeGrey" style={{fontSize: "12px"}}>{playlistName}</p>
        </Container>
    )
}

export default Details
