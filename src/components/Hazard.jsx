import React from 'react'

const Hazard = (props) => {
    const hazardStyle = {
        fill: '#777',
        stroke: '#444',
        strokeWidth: '2px',
        width: 50,
        height: 70,
    }
    return (
        <rect style={hazardStyle} x={props.position.x} y={props.position.y}/>
    )
}

export default Hazard