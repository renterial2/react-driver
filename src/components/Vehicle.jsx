import React from 'react'
import { connect } from 'react-redux'

const Vehicle = (props) => {
    const VehicleStyle = {
        fill: '#ce2029',
        stroke: '#75450e',
        strokeWidth: '2px',
        width: 50,
        height: 70,
    }

    return (
        <rect style={VehicleStyle} x={props.x} y={props.y}/>
    )
}

const mapStateToProps = (state) => ({
    x: state.x,
    y: state.y,
  })

export default connect(mapStateToProps, null)(Vehicle)