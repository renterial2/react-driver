import React from 'react'

const Login = (props) => {

    const button = {
        x: -300,
        y: -600,
        width: 600,
        height: 300,
        style: {
            fill: 'transparent',
            cursor: 'pointer',
        },
        onClick: props.authenticate,
    }

    const text = {
        textAnchor: 'middle', // center
        x: 0, // center relative to X axsis
        y: -400, // 440 up
        style: {
            fontFamily: '"Press Start 2P", cursive',
            fontSize: 45,
            cursor: 'pointer',
        },
        onClick: props.authenticate,
    }

    return (
        <g>
            <rect {...button} />
            <text class="flashit" {...text}>
                Click to Login to Leadboard
            </text>
        </g>
    )
}

export default Login