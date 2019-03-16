import React from 'react'
import { connect } from 'react-redux'

const RightButton = ({handleClick}) => {

    return (
        <button id="rightButton" onClick={() => handleClick()}>Right</button>
    )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(RightButton)