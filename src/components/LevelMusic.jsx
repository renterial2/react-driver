import React, { Component } from 'react'
import Sound from 'react-sound'
import soundfile from '../sfx/background.mp3'

class LevelMusic extends Component {

  render() {
    return <Sound 
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                volume={100}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
                loop={true}
                debugMode={false}
            />
  }
}

export default LevelMusic