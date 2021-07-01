import React from 'react'
import { Container } from 'react-bootstrap'
import ChartsCard from "./ChartsCard/ChartsCard"
import { closer, echo, faded, havana, jesus, leanOn } from "./Images.js"

function ChartsSection() {
    return (
        <Container className="overflow-auto" style={{height: "9rem"}} fluid>
            <ChartsCard number="01" trackLength="3:45" songName="Havana" artistName="Camilla Cabello" image={havana} className="mb-3" />
            <ChartsCard number="02" trackLength="3:45" songName="jesus is king" artistName="kanye west" image={jesus} className="mb-3" />
            <ChartsCard number="03" trackLength="3:45" songName="closer" artistName="the chainsmokers" image={closer} className="mb-3" />
            <ChartsCard number="04" trackLength="3:45" songName="lean on" artistName="dj snake" image={leanOn} className="mb-3" />
            <ChartsCard number="05" trackLength="3:45" songName="faded" artistName="alan walker" image={faded} className="mb-3" />
            <ChartsCard number="06" trackLength="3:45" songName="echo" artistName="armaan malik" image={echo} />
        </Container>
    )
}

export default ChartsSection
