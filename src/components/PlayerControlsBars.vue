<template>
  <div>
    
      <button flat icon @click="toggleMute">
        <template v-if="!this.muted">
          <p v-if="this.volume >= 0.5">volume_up</p>
          <p v-else-if="this.volume > 0">volume_down</p>
          <p v-else>volume_mute</p>
        </template>
        <p v-show="this.muted">volume_off</p>
      </button>
      <v-slider v-model="volume" @input="updateVolume(volume)" max="1" step="0.1"></v-slider>
      {{ this.volume * 100 + '%' }}
      
      <button outline fab small color="light-blue" @click="skipTrack('prev')">
        <p>skip_previous</p>
      </button>
      <button outline fab small color="light-blue" @click="stopTrack">
        <p>stop</p>
      </button>
      <button outline fab color="light-blue" @click="playTrack()">
        <p large>play_arrow</p>
      </button>
      <button outline fab small color="light-blue" @click="pauseTrack">
        <p>pause</p>
      </button>
      <button outline fab small color="light-blue" @click="skipTrack('next')">
        <p>skip_next</p>
      </button>
      
      <button flat icon @click="toggleLoop">
        <p color="light-blue" v-if="this.loop">repeat_one</p>
        <p color="blue-grey" v-else>repeat_one</p>
      </button>
      <button flat icon @click="toggleShuffle">
        <p color="light-blue" v-if="this.shuffle">shuffle</p>
        <p color="blue-grey" v-else>shuffle</p>
      </button>
    
    
      <v-model="trackProgress"  @click="updateSeek($event)" /> 
    
  </div>
</template>

<script>
  export default {
    props: {
      loop: Boolean,
      shuffle: Boolean,
      progress: Number
    },
    data () {
      return {
        volume: 0.5,
        muted: false
      }
    },
    computed: {
      trackProgress () {
        return this.progress * 100
      },
    },
    created: function () {
      
    },
    methods: {
      playTrack(index) {
        this.$emit('playtrack', index)
      },
      pauseTrack() {
        this.$emit('pausetrack')
      },
      stopTrack() {
        this.$emit('stoptrack')
      },
      skipTrack (direction) {
          this.$emit('skiptrack', direction)
      },
      
      toggleMute () {
        
        this.muted = !this.muted
      },
      toggleLoop () {
        this.$emit('toggleloop', !this.loop)
      },
      toggleShuffle () {
        this.$emit('toggleshuffle', !this.shuffle)
      },
      updateSeek (event) {
        let el = document.querySelector(".progress-linear__bar"),
            mousePos = event.offsetX,
            elWidth = el.clientWidth,
            percents = (mousePos / elWidth) * 100
        this.$emit('updateseek', percents)
      }
    } 
  }
</script>