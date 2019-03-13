import React from 'react'
// import { pathFromBezierCurve } from '../utils/formulas'

const VehicleBody = (props) => {
    const VehicleBodyStyle = {
        fill: '#ce2029',
        stroke: '#75450e',
        strokeWidth: '2px',
        width: 50,
        height: 70
    }

    // const bodyWidth = 80
    // const halfBody = 40
    // const height = 60
    // const negativeHeight = height * -1

    return (
        <rect style={VehicleBodyStyle} />
    )
}

export default VehicleBody