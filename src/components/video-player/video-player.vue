<template>
  <main-container>
    <div class="video__container">
      <video
        ref="video"
        class="video__player"
        controls
        preload
        @loadedmetadata="initVideoData"
        @timeupdate="updateCurrentTime"
      >
        <source src="@/assets/demo/peppa.mp4" type="video/mp4" />
        <track
          label="Russian"
          kind="subtitles"
          srclang="ru"
          :src="videoSubtitles"
          default
          @cuechange="activeCueChange"
        />
      </video>

      <transition>
        <div v-if="player.showOverlay" class="video__controls__overlay" />
      </transition>

      <div
        class="video__controls__container"
        @mouseover="onVideoHover('in')"
        @mouseleave="onVideoHover('out')"
      >
        <div class="video__controls__play">
          <transition mode="out-in">
            <play-icon
              v-if="player.showPlayBtn"
              ref="playBtn"
              class="video__controls__play__btn"
              @click.stop="togglePlay"
            />

            <stop-icon
              v-else-if="player.showStopBtn"
              ref="playBtn"
              class="video__controls__play__btn"
              @click.stop="togglePlay"
            />
          </transition>
        </div>

        <transition>
          <div v-if="player.showControls" class="video__controls__footer">
            <div>
              <span class="video__controls__footer__switch__value__left">
                10
              </span>
              <switch-time-icon
                class="video__controls__footer__switch__left"
                @click="skipTime(-10)"
              />
            </div>

            <div class="video__controls__footer__play">
              <play-mini-icon
                v-if="player.showPlayBtn"
                @click="togglePlay"
                class="video__controls__footer__play btn"
              />
              <stop-mini-icon
                v-if="player.showStopBtn"
                @click="togglePlay"
                class="video__controls__footer__play btn"
              />
            </div>

            <div>
              <span class="video__controls__footer__switch__value__right">
                10
              </span>
              <switch-time-icon
                class="video__controls__footer__switch__right"
                @click="skipTime(10)"
              />
            </div>

            <playback-speed-icon
              class="video__controls__footer__playback-speed btn"
            />

            <div class="video__controls__footer__progress">
              <input
                v-model="player.progress.current"
                class="video__controls__footer__progress__input"
                type="range"
                min="0"
                :max="player.progress.overall"
                @change="setVideoCurrentTime"
                @input="$refs.video.pause"
              />
            </div>

            <div class="video__controls__footer__time">
              <p>{{ player.time.current }}</p>
              <span class="video__controls__footer__time__divider">/</span>
              <p>{{ player.time.overall }}</p>
            </div>

            <fullscreen-icon class="video__controls__footer__fullscreen btn" />
          </div>
        </transition>

        <div
          v-if="player.activeCue"
          class="video__controls__subtitles"
          @mouseover="onSubtitleHover('in')"
          @mouseleave="onSubtitleHover('out')"
        >
          <tippy placement="top">
            <p class="video__controls__subtitles__text">
              {{ player.activeCue }}
            </p>

            <template v-slot:content>
              <p>{{ player.selectedCue }}</p>
            </template>
          </tippy>
        </div>
      </div>
    </div>
  </main-container>
</template>

<script>
import PlayIcon from '@/assets/svg/play.svg'
import StopIcon from '@/assets/svg/stop.svg'
import FullscreenIcon from '@/assets/svg/fullscreen.svg'
import SwitchTimeIcon from '@/assets/svg/switch-time.svg'
import PlayMiniIcon from '@/assets/svg/play-mini.svg'
import StopMiniIcon from '@/assets/svg/stop-mini.svg'
import PlaybackSpeedIcon from '@/assets/svg/playback-speed.svg'

import videoSubtitles from '@/assets/demo/peppa.vtt'
import MainContainer from '@/components/containers/main-container'

export default {
  name: 'VideoPlayer',
  components: {
    MainContainer,
    PlayIcon,
    StopIcon,
    FullscreenIcon,
    SwitchTimeIcon,
    PlayMiniIcon,
    StopMiniIcon,
    PlaybackSpeedIcon
  },
  data: () => ({
    videoSubtitles,
    player: {
      isPaused: false,
      isEnded: false,
      showPlayBtn: true,
      showStopBtn: false,
      showControls: false,
      activeCue: null,
      selectedCue: null,
      showOverlay: false,
      isStoppedManually: false,
      time: {
        overall: null,
        current: '00:00'
      },
      progress: {
        overall: null,
        current: null
      }
    }
  }),
  mounted() {
    this.hideNativeControls()
    this.initTextSelection()
  },
  methods: {
    activeCueChange(e) {
      const track = e.target.track
      if (!track.activeCues.length) return (this.player.activeCue = null)
      this.player.activeCue = track.activeCues[0].text
    },

    hideNativeControls() {
      const videoWorks = !!document.createElement('video').canPlayType
      if (videoWorks) {
        // disable default controls
        this.$refs.video.controls = false
        // disable default subtitles
        Object.values(this.$refs.video.textTracks).forEach(
          (item) => (item.mode = 'hidden')
        )
      }
    },

    initVideoData() {
      const preparedTime = this.formatTime(this.$refs.video.duration)
      this.player.time.overall = `${preparedTime.minutes}:${preparedTime.seconds}`
      this.player.progress.overall = this.$refs.video.duration
      this.player.progress.current = this.$refs.video.currentTime
    },

    updateCurrentTime() {
      const preparedTime = this.formatTime(this.$refs.video.currentTime)
      this.player.time.current = `${preparedTime.minutes}:${preparedTime.seconds}`
      this.player.progress.current = this.$refs.video.currentTime
    },

    togglePlay() {
      const videoPlayer = this.$refs.video
      if (this.$refs.video.paused || this.$refs.video.ended) {
        videoPlayer.play()
        this.player.showOverlay = false
        this.player.showPlayBtn = false
        this.player.isStoppedManually = false
      } else {
        videoPlayer.pause()
        this.player.isStoppedManually = true
        this.player.showOverlay = true
        this.player.showPlayBtn = true
        this.player.showStopBtn = false
      }
    },

    onVideoHover(state) {
      this.player.showControls = state === 'in'

      if (!this.$refs.video.paused) {
        if (state === 'in') this.player.showStopBtn = true
        if (state === 'out') this.player.showStopBtn = false
      }
    },

    initTextSelection() {
      const self = this

      document.onselectionchange = function () {
        const selection = document.getSelection()

        selection.anchorOffset < selection.focusOffset
          ? self.setSelectedCue(selection.anchorOffset, selection.focusOffset)
          : self.setSelectedCue(selection.focusOffset, selection.anchorOffset)
      }
    },

    setSelectedCue(start, end) {
      this.player.selectedCue = this.player.activeCue
        ? this.player.activeCue.slice(start, end)
        : null
    },

    skipTime(value) {
      this.$refs.video.currentTime += value
    },

    setVideoCurrentTime(e) {
      this.$refs.video.currentTime = e.target.value
      this.togglePlay()
    },

    onSubtitleHover(state) {
      if (state === 'in') {
        this.$refs.video.pause()
        this.player.showPlayBtn = true
        this.player.showStopBtn = false
        this.player.showOverlay = true
      }

      if (state === 'out') {
        if (this.player.isStoppedManually) return
        this.$refs.video.play()
        this.player.selectedCue = null
        this.player.showOverlay = false
        this.player.showPlayBtn = false
        this.player.showStopBtn = true
      }
    },

    formatTime(timeInSeconds) {
      const result = new Date(Math.round(timeInSeconds) * 1000)
        .toISOString()
        .substr(11, 8)

      return {
        minutes: result.substr(3, 2),
        seconds: result.substr(6, 2)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.video {
  &__container {
    position: relative;
    display: flex;
    z-index: 2;
  }
  &__player {
    width: 100%;
    border-radius: 15px;
  }
  &__controls {
    &__overlay {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.2);
      width: 100%;
      height: 100%;
      z-index: 3;
      border-radius: 15px;
    }

    &__container {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 4;
    }

    &__subtitles {
      text-align: center;
      position: absolute;
      left: 0;
      bottom: 50px;
      width: 95%;
      height: fit-content;
      margin: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: rgb(0, 0, 0, 0.8);
      border-radius: 5px;

      &__text {
        font-weight: 400;
        font-size: 20px;
        color: white;
        margin: 10px 0;
      }
    }

    &__play {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      &__btn {
        cursor: pointer;
        display: flex;
        height: 115px;
        width: 115px;
        max-width: 70%;
        max-height: 70%;
      }
    }

    &__footer {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 95%;
      margin: 0 20px;
      margin-bottom: 10px;

      font-weight: 400;
      font-size: 16px;
      color: white;

      &__play {
        height: 20px;
        width: 20px;
      }

      &__playback-speed {
        height: 23px;
        width: 23px;
        margin-right: 20px;
      }

      &__switch {
        display: flex;
        height: 23px;
        width: 23px;
        cursor: pointer;
        user-select: none;

        &__value {
          position: absolute;
          font-size: 10px;
          font-weight: 400;

          &__left {
            @extend .video__controls__footer__switch__value;
            transform: translate(7px, 6px);
          }

          &__right {
            @extend .video__controls__footer__switch__value;
            transform: translate(25px, 6px);
          }
        }

        &__left {
          @extend .video__controls__footer__switch;
          transform: scale(1, 1);
          margin-right: 20px;
        }

        &__right {
          @extend .video__controls__footer__switch;
          transform: scale(-1, 1);
          margin: 0 20px;
        }
      }

      &__time {
        display: flex;
        align-items: center;
        justify-content: center;

        &__divider {
          margin: 0 5px;
        }
      }

      &__fullscreen {
        width: 30px;
        height: 30px;
        margin-left: 20px;
      }

      &__progress {
        display: flex;
        width: 100%;

        &__input {
          width: 100%;
          margin-right: 20px;
          height: 4px;
          border: none;
          border-radius: 0;
        }
      }
    }
  }
}

::cue {
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
