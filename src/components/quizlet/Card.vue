<template>
  <BlockSwitchWrapper>
    <CustomBlock>
      <div class="info">
        <span>11/45</span>
        <div
          class="info__character"
          :style="{
            fontSize: width > 405 ? '27px' : '21px'
          }"
        >
          <!-- <img class="info__character_img" :src="character" alt="character" /> Надо будет уточнить, насколько правильное применение подобной замены -->
          <svg12 class="info__character_img" />
          <span>shi = десятка</span>
        </div>
      </div>
      <Table :limit="12" />
      <CustomButton type="light" style="align-self: flex-start"
        >Начать изучение</CustomButton
      >
    </CustomBlock>
  </BlockSwitchWrapper>
</template>

<script>
import Table from '@/components/quizlet/Table'
import CustomButton from '@/components/AudioPlayer/CustomButton'
import CustomBlock from '@/components/CustomBlock/CustomBlock'
import BlockSwitchWrapper from '@/components/quizlet/BlockSwitchWrapper'

import svg12 from '../../assets/svg/characters/12.svg'

export default {
  name: 'Content',
  components: { BlockSwitchWrapper, CustomBlock, CustomButton, Table, svg12 },
  inject: ['width']
  // data() { без понятия зачем нужна данная функция
  //   return {
  //     character: require('@/assets/svg/characters/12.svg'),
  //     width: this.width
  //   }
  // }
}
</script>

<style scoped>
.info {
  color: #4b5078;
  font-weight: 500;
  padding-bottom: 5%;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.info__character {
  font-weight: 400;
  line-height: 33px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 1s;
  animation: show 3s 1;
  animation-fill-mode: forwards;
  animation-delay: 2s;
}
.info__character_img {
  margin: 0 3%;
}
</style>
