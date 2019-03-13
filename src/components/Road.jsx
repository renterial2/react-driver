import React from 'react'

const Road = () => {
    const roadStyle = {
        fill: '#D3D3D3',
    }
    const roadWidth = window.innerWidth / 2
    const gameHeight = 1200
    return (
        <rect 
            style={roadStyle}
            x={roadWidth / -2}
            y={100 - gameHeight}
            width={roadWidth}
            height={gameHeight}
        />
    )
}

export default Road