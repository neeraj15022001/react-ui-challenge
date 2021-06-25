import React from 'react'

function Links({className}) {
    const labelStyle = {
        fontSize : "small"
    }
    return (
        <div className={`${className} d-flex align-items-center justify-content-start`}>
            <p className="text-themeGrey text-uppercase fw-normal me-3" style={labelStyle}>music</p>
            <p className="text-themeGrey text-uppercase fw-normal me-3" style={labelStyle}>podcast</p>
            <p className="text-themeGrey text-uppercase fw-normal" style={labelStyle}>live</p>
        </div>
    )
}

export default Links
