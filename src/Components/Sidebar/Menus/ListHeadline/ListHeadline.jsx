import React from 'react'

function ListHeadline({title, className}) {
    const headlineStyle = {fontSize : "small", letterSpacing: "2px"}
    return (
        <div className={`${className} w-100 text-uppercase`}>
            <p className="text-themeGrey" style={headlineStyle}>{title}</p>
        </div>
    )
}

export default ListHeadline
