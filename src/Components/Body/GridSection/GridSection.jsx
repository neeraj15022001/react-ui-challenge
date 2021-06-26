import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./GridSection.css";
import CardHeadline from "./CardHeadline/CardHeadline";
import { MusicNoteList } from "react-bootstrap-icons";
import GenreCard from "./GenreCard/GenreCard";

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
                  <Container className="d-flex flex-column overflow-auto" style={{height: "9rem"}}>
                    <Row style={{height: "5rem"}} className="mb-3">
                      <Col  className="px-1">
                        <GenreCard
                          line1="dance"
                          line2="beat"
                          bgColor="lightblue"
                        />
                      </Col>
                      <Col  className="px-1">
                      <GenreCard
                          line1="electro"
                          line2="pop"
                          bgColor="burlywood"
                        />
                        </Col>
                    </Row>
                    <Row style={{height: "5rem"}} className="mb-3">
                      <Col xs={8} className="px-1">
                        <GenreCard
                          line1="alternative"
                          line2="indie"
                          bgColor="lightcoral"
                        />
                      </Col>
                      <Col xs={4} className="px-1">
                      <GenreCard
                          line1="hip"
                          line2="hop"
                          bgColor="teal"
                        />
                        </Col>
                    </Row>
                    <Row style={{height: "5rem"}} className="mb-3">
                      <Col xs={8} className="px-1">
                        <GenreCard
                          line1="alternative"
                          line2="indie"
                          bgColor="lightcoral"
                        />
                      </Col>
                      <Col xs={4} className="px-1">
                      <GenreCard
                          line1="hip"
                          line2="hop"
                          bgColor="teal"
                        />
                        </Col>
                    </Row>
                  </Container>
                </Container>
              </Col>
              <Col xs={8} className="py-2 ps-3 pe-0">
                <Container
                  className="theme-tertiary-black rounded-3 h-100 px-0"
                  fluid
                >
                  <CardHeadline title="top charts" secondaryTitle="see all" />
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
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default GridSection;
