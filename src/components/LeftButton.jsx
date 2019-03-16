import React from 'react'
import { connect } from 'react-redux'

const LeftButton = ({handleClick}) => {

    return (
        <button id="leftButton" onClick={() => handleClick()}>Left</button>
    )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftButton)