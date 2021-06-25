import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import camila from "./Resources/camila.png";

function Slide() {
  const slideStyle = {
    backgroundImage:
      "linear-gradient(to bottom, #000000, #000000, #000000, #000000, #000000, #060405, #0b0809, #100c0e, #171316, #1c191d, #211f25, #25252d)",
  };
  const likeButtonStyle = {
    width: "2.5rem",
    height: "2.5rem",
    backgroundColor: "transparent"
  }
  return (
    <div className="w-100 h-100" style={slideStyle}>
      <Container fluid>
        <Row>
          <Col xs={8}>
            <Container style={{ marginTop: "6rem" }} fluid>
              <p className="fw-bold text-capitalize fs-5">trending new hits</p>
              <Container>
                <p className="display-3 text-capitalize fw-bold mt-3">in my feelings</p>
                <div className="d-flex align-items-center justify-content-start mb-3">
                  <p className="fw-bold fs-4 me-4 text-capitalize">camila cabello</p>
                  <p className="fw-normal fs-5 text-capitalize text-themeGrey">63million plays</p>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <button className="border-0 rounded-pill text-capitalize me-3 py-2 px-3 bg-themePurple">listen now</button>
                  <button className="rounded-circle border-1 border-white" style={likeButtonStyle}>
                    <HeartFill className="text-themePurple fs-5" />
                  </button>
                </div>
              </Container>
            </Container>
          </Col>
          <Col xs={4}>
            <Image
              src={camila}
              alt="camila cabello"
              style={{ filter: "grayscale(100%" }}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Slide;
