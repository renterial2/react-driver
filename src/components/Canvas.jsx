import React from 'react'
import Road from './Road'
import VehicleBody from './VehicleBody'

const Canvas = (props) => {
    const gameHeight = 860
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight]

    return (
        <svg
            id="driver"
            // perserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
        >
            <Road />
            <VehicleBody />
            
        </svg>
    )
}

export default Canvas