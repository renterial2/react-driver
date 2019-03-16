import React from 'react'
// import Road from './Road'
import Vehicle from './Vehicle'
import Hazard from './Hazard';

const Canvas = (props) => {
    const gameHeight = 890
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight]

    return (
        <svg
            id="driver"
            // perserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
        >

            {/* <Road /> */}

            <Hazard position={{x: 0, y: -700}}/>

            <Vehicle />
                      
        </svg>
    )
}

export default Canvas