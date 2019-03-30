import React, { Component } from 'react'
import Sound, { soundManager } from 'react-sound'
import soundfile from '../sfx/startScreen.mp3'
import 'react-sound'
soundManager.setup({debugMode: false})

class StartScreenMusic extends Component {

  render() {
    return <Sound 
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                volume={100}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
                loop={true}
            />
  }
}

export default StartScreenMusic