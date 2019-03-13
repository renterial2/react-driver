import React from 'react'
import Road from './Road'
import VehicleBody from './VehicleBody'

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight]
    return (
        <svg
            id="driver"
            perserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
        >
            <Road />
            {/* <circle cx={0} cy={0} r={100} /> */}
            <VehicleBody />
        </svg>
    )
}

export default Canvas