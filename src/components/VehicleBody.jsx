import React from 'react'
import { connect } from 'react-redux'

const VehicleBody = (props) => {
    const VehicleBodyStyle = {
        fill: '#ce2029',
        stroke: '#75450e',
        strokeWidth: '2px',
        width: 50,
        height: 70,
    }

    return (
        <rect style={VehicleBodyStyle} x={props.x}/>
    )
}

const mapStateToProps = (state) => ({
    // speedX: state.speedX,
    x: state.x,
    // y: state.y
  })

export default connect(mapStateToProps, null)(VehicleBody)