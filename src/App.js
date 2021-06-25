import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Body from "./Components/Body/Body";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Container className="bg-success full-page" fluid>
        <Row className="full-page">
          <Col xs={2} className="p-0 m-0 full-page">
            <Sidebar />
          </Col>
          <Col xs={10} className="p-0 m-0 full-page">
            <Body />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
