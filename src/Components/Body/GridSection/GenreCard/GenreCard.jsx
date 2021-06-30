import React from 'react'

function GenreCard({line1,line2, bgColor, className}) {
    const genreCard = {
        backgroundColor : bgColor,
        borderRadius : "1rem"
    }
    return (
        <div className={`${className} d-flex align-items-start justify-content-center flex-column h-100 py-3`} style={genreCard}>
            <p className="text-capitalize fw-bold fs-6 w-100 ms-4">{line1}</p>
            <p className="text-capitalize fw-bold fs-6 w-100 ms-4">{line2}</p>
        </div>
    )
}

export default GenreCard
