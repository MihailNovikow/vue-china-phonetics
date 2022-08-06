<template>
  <div class="wrapper">
    <button v-show="!isPlay" class="img-button play-button" @click="play()" />
    <button v-show="isPlay" class="img-button pause-button" @click="pause()" />
    <input
      type="range"
      min="0"
      max="100"
      step="0.1"
      v-model="seekValue"
      @change="onSeek"
    />
    <audio ref="audioPlayer" @timeupdate="onPlaying">
      <source :src="src" type="audio/mp4" />
      <track default kind="subtitles" :src="sub" />
    </audio>
    <div>
      <button class="img-button select-button" @click="toggleSet" />
      <div
        class="peed-button__wrap"
        :style="{
          visibility: isOpen ? 'visible' : 'hidden',
          marginTop: '12px',
          display: 'flex',
          flexDirection: 'column'
        }"
      >
        <button class="speed-button" @click="setSpeed(0.5)">0.5</button>
        <button class="speed-button" @click="setSpeed(0.75)">0.75</button>
        <button class="speed-button" @click="setSpeed(1.0)">1.0</button>
      </div>
    </div>
  </div>
</template>

<script>
function getStopTime(currentTime, stopPoints) {
  for (let endPoint of stopPoints) {
    if (currentTime < endPoint + 0.25 && currentTime > endPoint - 0.15)
      return currentTime
  }
  return -1
}
export default {
  name: 'AudioPlayer',
  data() {
    return {
      //про воспроизведение
      currentTime: 0,
      seekValue: 0,
      isPlay: false,
      //про выбор скорости
      isOpen: false,
      stopTime: -1
    }
  },
  props: {
    src: String,
    sub: String
  },
  methods: {
    // воспроизведение
    play() {
      this.isPlay = true
      this.$refs.audioPlayer.play()
    },
    pause() {
      this.isPlay = false
      this.$refs.audioPlayer.pause()
    },
    setSpeed(speed) {
      this.isOpen = false
      this.$refs.audioPlayer.playbackRate = speed
    },
    onPlaying() {
      const { audioPlayer } = this.$refs
      const stopPoints = [...this.$refs.audioPlayer.textTracks[0].cues].map(
        (cue) => cue.endTime
      )
      if (!audioPlayer) {
        return
      }
      this.currentTime = audioPlayer.currentTime
      this.seekValue = (audioPlayer.currentTime / audioPlayer.duration) * 100
      if (
        getStopTime(audioPlayer.currentTime, stopPoints) >
          this.stopTime + 0.5 ||
        getStopTime(audioPlayer.currentTime, stopPoints) < this.stopTime - 0.5
      )
        this.stopTime = getStopTime(audioPlayer.currentTime, stopPoints)
      if (this.stopTime > 0 && audioPlayer.currentTime === this.stopTime) {
        this.pause()
      }
      if (this.currentTime === audioPlayer.duration) {
        this.togglePlayPause()
        audioPlayer.currentTime = 0
        this.stopTime = -1
      }
    },
    onSeek() {
      const { audioPlayer } = this.$refs
      audioPlayer.currentTime = audioPlayer.duration * (this.seekValue / 100)
    },
    togglePlayPause() {
      this.isPlay = !this.isPlay
    },
    // выбор скорости
    toggleSet() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.peed-button__wrap {
  position: absolute;
}
.wrapper {
  width: 100%;
  gap: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 170px;
}

.img-button {
  flex-shrink: 0;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  border: none;
  vertical-align: top;
  cursor: pointer;
}

.play-button {
  background: url('../../assets/player/play_pause_sprites.png') -10px -70px;
}

.pause-button {
  background: url('../../assets/player/play_pause_sprites.png') -10px -10px;
}

.select-button {
  width: 32px;
  height: 32px;
  margin-left: 8px;
  background: url('../../assets/player/snail.png');
}

.speed-button {
  padding: 6px 13px;
  margin-bottom: 7px;
  border: 2px solid #afb9ff;
  background: transparent;
  box-sizing: border-box;
  border-radius: 23px;
}

.speed-button:hover {
  background: #afb9ff;
  color: #f9f9f9;
  cursor: pointer;
}

input[type='range'] {
  display: block;
  padding: 10px 0;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 90%;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  border-radius: 15px;
  margin-top: -7px;
  background: #afb9ff;
  width: 14px;
  height: 14px;
  cursor: pointer;
}

input[type='range']::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: #afb9ff;
  cursor: pointer;
}

input[type='range']::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0 0 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  cursor: pointer;
  height: 2px;
  background: #afb9ff;
}

input[type='range']::-moz-range-track {
  width: 100%;
  cursor: pointer;
  height: 2px;
  background: #afb9ff;
}

input[type='range']::-ms-track {
  width: 100%;
  cursor: pointer;
  height: 2px;
  background: #afb9ff;
}
</style>
