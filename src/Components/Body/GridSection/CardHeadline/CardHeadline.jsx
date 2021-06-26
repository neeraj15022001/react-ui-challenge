import React from "react";
import {Container} from "react-bootstrap"

function CardHeadline({title,secondaryTitle,className}) {
  return (
    <Container className={`${className} d-flex align-items-center justify-content-between py-3`} fluid>
      <p className="fs-5 text-capitalize fw-bold">{title}</p>
      <p className="text-capitalize text-themeGrey fs-small">{secondaryTitle}</p>
    </Container>
  );
}

export default CardHeadline;
