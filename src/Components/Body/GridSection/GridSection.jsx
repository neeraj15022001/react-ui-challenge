import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./GridSection.css";
import CardHeadline from "./Common/CardHeadline/CardHeadline";
import { MusicNoteList } from "react-bootstrap-icons";
import GenreSection from "./GenreSection/GenreSection"
import ArtistSection from "./ArtistSection/ArtistSection";
import ChartsSection from "./ChartsSection/ChartsSection";
import PlayerSection from "./PlayerSection/PlayerSection";

function GridSection() {
  return (
    <Container className="h-50 mh-100 px-0" id="gridSection">
      <Row className="h-100">
        <Col xs={8}>
          <Container className="h-50 pb-2 px-2" fluid>
            <Container
              className="theme-tertiary-black h-100 rounded-3 px-0"
              fluid
            >
              <CardHeadline title="top artists" secondaryTitle="see all" />
              <ArtistSection />
            </Container>
          </Container>
          <Container className="h-50" fluid>
            <Row className="h-100">
              <Col xs={4} className="py-2 px-0">
                <Container
                  className="theme-tertiary-black rounded-3 px-0   h-100"
                  fluid
                >
                  <CardHeadline title="genres" secondaryTitle="see all" />
                  <GenreSection />
                </Container>
              </Col>
              <Col xs={8} className="py-2 ps-3 pe-0">
                <Container
                  className="theme-tertiary-black rounded-3 h-100 px-0"
                  fluid
                >
                  <CardHeadline title="top charts" secondaryTitle="see all" />
                  <ChartsSection />
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={4} className="pb-2 px-0">
          <Container
            className="theme-tertiary-black rounded-3 h-100 px-0"
            fluid
          >
            <CardHeadline title="player" secondaryTitle={<MusicNoteList />} />
            <PlayerSection />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default GridSection;
