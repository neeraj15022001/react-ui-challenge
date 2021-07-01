import React from 'react'
import { Container } from 'react-bootstrap'
import {ArrowRepeat, CaretRightFill, ChevronCompactUp, Shuffle, SkipEndFill, SkipStartFill} from "react-bootstrap-icons"

function Controls() {
    return (
        <div className="bg-themePurple h-100">
            <Container className="d-flex align-items-center justify-content-between py-3 px-5 fs-5">
                <ArrowRepeat />
                <SkipStartFill />
                <div className="bg-white d-flex align-items-center justify-content-center" style={{width: "45px", height: "45px", borderRadius: "1rem"}}>
                    <CaretRightFill className="text-themePurple" />
                </div>
                <SkipEndFill />
                <Shuffle />
            </Container>
            <Container className="d-flex flex-column align-items-center justify-content-center">
                <ChevronCompactUp />
                <p className="text-capitalize p-0 m-0 fw-bold">lyrics</p>
            </Container>
        </div>
    )
}

export default Controls
