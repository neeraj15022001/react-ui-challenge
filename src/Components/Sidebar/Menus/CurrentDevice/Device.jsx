import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { Rainbow } from "react-bootstrap-icons";
import ListItem from "../ListItem/ListItem";

function Device({ className }) {
  return (
    <div className={`${className} w-100 px-2`}>
      <Container className="bg-secondary text-white p-2 rounded-2" fluid>
        <Row>
          <Col xs={4} className="d-flex align-content-center p-0 ps-3 m-0">
            <Image
              src="https://www.cnet.com/a/img/JEPfO1ehrZLl-2Wkwc4bGXkr6u0=/940x0/2017/06/27/644ebb5d-99b6-4076-9977-528fb70f0dea/homepod.jpg"
              alt="google homepod"
              className="rounded-3"
              fluid
            />
          </Col>
          <Col xs={8}>
            <p className="fw-bold">
              Google
              <br />
              Homepod
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="bg-dark rounded-2 text-white" fluid>
        <ListItem icon={<Rainbow />} title="playing on device" />
      </Container>
    </div>
  );
}

export default Device;
