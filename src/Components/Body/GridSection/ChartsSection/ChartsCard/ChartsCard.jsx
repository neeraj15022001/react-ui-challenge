import React from 'react'
import { Container, Row, Col, Image  } from 'react-bootstrap'
import {  PlayFill, Plus } from 'react-bootstrap-icons'

function ChartsCard({number, trackLength, songName, artistName, image, className}) {
    return (
        <Container className={className} fluid>
            <Row>
                <Col xs={1} className="d-flex align-items-center justify-content-start p-0 m-0">
                    <p className="text-themeGrey">{number}</p>
                </Col>
                <Col xs={2}>
                    <Image src={image} alt={songName} width="40" height="40" className="rounded-3" />
                </Col>
                <Col xs={6} className='p-0 m-0 d-flex align-items-center justify-content-start'>
                    <div className="d-flex flex-column align-items-start justify-content-center">
                        <p className="fw-bold text-capitalize" style={{fontSize: "13px"}}>{songName}</p>
                        <p className="text-themeGrey text-capitalize" style={{fontSize : "11px"}}>{artistName}</p>
                    </div>
                </Col>
                <Col xs={1} className="d-flex align-items-center justify-content-end">
                    <p className="fw-bold" style={{fontSize: "small"}}>{trackLength}</p>
                </Col>
                <Col xs={1} className="p-1 m-0">
                    <div className="h-100 w-100 rounded-3 bg-themeSecondaryBlack d-flex align-items-center justify-content-center border-themeGrey">
                        <PlayFill className="text-themePurple" />
                    </div>
                </Col>
                <Col xs={1} className="p-2 m-0">
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-white text-dark rounded-3">
                        <Plus />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ChartsCard
