import React from 'react'
import {Container, Row,Col} from "react-bootstrap"

function GridSection() {
    return (
        <Container className="h-50 bg-danger">
            <Row className="h-100">
                <Col xs={8}>
                    <Container className="h-50 p-2" fluid><Container className="bg-info h-100" fluid>upper-left</Container></Container>
                    <Container className="h-50" fluid>
                        <Row className="h-100">
                            <Col xs={4} className="py-2 px-0"><Container className="bg-warning h-100" fluid>inner-4</Container></Col>
                            <Col xs={8} className="py-2 ps-3 pe-0"><Container className="bg-primary h-100" fluid>inner-8</Container></Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs={4} className="py-2 px-0"><Container className="bg-success h-100" fluid>right</Container></Col>
            </Row>
        </Container>
    )
}

export default GridSection
