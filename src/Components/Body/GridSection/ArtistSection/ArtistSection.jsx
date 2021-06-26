import React from 'react'
import ArtistCard from "./ArtistCard/ArtistCard";
import {Container} from "react-bootstrap"
import {
  alan,
  billie,
  camila,
  chainsmoker,
  kanye,
  martin,
  nicki,
  travis,
} from "../Images.js";

function ArtistSection() {
    return (
        <Container className="overflow-auto d-flex align-items-center justify-content-start">
                <ArtistCard
                  image={travis}
                  bgColor="lightblue"
                  artistName="travis scott"
                  playCount="44"
                  className="me-5"
                />
                <ArtistCard
                  image={billie}
                  bgColor="lightyellow"
                  artistName="billie ellish"
                  playCount="203"
                  className="me-5"
                />
                <ArtistCard
                  image={alan}
                  bgColor="lightgray"
                  artistName="alan walker"
                  playCount="63"
                  className="me-5"
                />
                <ArtistCard
                  image={kanye}
                  bgColor="lightcoral"
                  artistName="kanye"
                  playCount="15"
                  className="me-5"
                />
                <ArtistCard
                  image={nicki}
                  bgColor="lightgrey"
                  artistName="nicki minaj"
                  playCount="180"
                  className="me-5"
                />
                <ArtistCard
                  image={camila}
                  bgColor="lightcoral"
                  artistName="camila cabello"
                  playCount="180"
                  className="me-5"
                />
                <ArtistCard
                  image={chainsmoker}
                  bgColor="lightgrey"
                  artistName="chainsmokers"
                  playCount="100"
                  className="me-5"
                />
                <ArtistCard
                  image={martin}
                  bgColor="lightblue"
                  artistName="martin garrix"
                  playCount="150"
                />
              </Container>
    )
}

export default ArtistSection
