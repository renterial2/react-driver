import React, { Component } from 'react'
import soundfile from '../sfx/coin.mp3'
import Sound from 'react-sound'

class CoinSound extends Component {

  render() {
    console.log("Hello", this.props)
    return <Sound 
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                volume={100}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
            />
  }
}

export default CoinSound