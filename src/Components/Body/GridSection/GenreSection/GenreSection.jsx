import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GenreCard from "./GenreCard/GenreCard";

function GenreSection() {
  return (
    <Container
      className="d-flex flex-column overflow-auto"
      style={{ height: "9rem" }}
    >
      <Row style={{ height: "5rem" }} className="mb-3">
        <Col className="px-1">
          <GenreCard line1="dance" line2="beat" bgColor="lightblue" />
        </Col>
        <Col className="px-1">
          <GenreCard line1="electro" line2="pop" bgColor="burlywood" />
        </Col>
      </Row>
      <Row style={{ height: "5rem" }} className="mb-3">
        <Col xs={8} className="px-1">
          <GenreCard line1="alternative" line2="indie" bgColor="lightcoral" />
        </Col>
        <Col xs={4} className="px-1">
          <GenreCard line1="hip" line2="hop" bgColor="teal" />
        </Col>
      </Row>
      <Row style={{ height: "5rem" }} className="mb-3">
        <Col xs={8} className="px-1">
          <GenreCard line1="alternative" line2="indie" bgColor="lightcoral" />
        </Col>
        <Col xs={4} className="px-1">
          <GenreCard line1="hip" line2="hop" bgColor="teal" />
        </Col>
      </Row>
    </Container>
  );
}

export default GenreSection;
