<template>
  <div class="blockWithArrows">
    <!-- <img
      v-if="width > 1138"
      class="leftArrow"
      :src="leftArrow"
      alt="character"
    /> -->
    <leftArrow class="leftArrow" />
    <slot></slot>
    <rightArrow class="rightArrow" />
    <!-- <img
      v-if="width > 1138"
      class="rightArrow"
      :src="rightArrow"
      alt="character"
    /> -->
  </div>
</template>

<script>
import leftArrow from '../../assets/svg/arrows/leftArrow.svg'
import rightArrow from '../../assets/svg/arrows/rightArrow.svg'

export default {
  name: 'BlockSwitchWrapper',
  components: {
    leftArrow,
    rightArrow
  }
  // inject: ['width'],
  // data() {
  //   return {
  //     leftArrow: require('@/assets/svg/arrows/leftArrow.svg'),
  //     rightArrow: require('@/assets/svg/arrows/rightArrow.svg'),
  //     width: this.width
  //   }
  // }
}
</script>

<style scoped>
.blockWithArrows {
  display: flex;
  gap: 3%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.leftArrow,
.rightArrow {
  cursor: pointer;
}
</style>
