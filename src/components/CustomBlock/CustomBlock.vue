<template>
  <div v-if="type === 'content'" class="block">
    <slot></slot>
  </div>
  <div v-else-if="type === 'warning'" class="warningBlock">
    <!-- <img :src="warningLogo" alt="warning" /> -->
    <warning class="warning" />
    <slot></slot>
  </div>
</template>

<script>
import warning from '@/assets/svg/warning.svg'

export default {
  name: 'CustomBlock',
  components: {
    warning
  },
  data: () => ({
    warningLogo: require('@/assets/svg/warning.svg')
  }),
  props: {
    type: {
      type: String,
      default: 'content'
    }
  }
}
</script>

<style scoped>
.block {
  display: flex;
  flex: 1 1;
  flex-direction: column;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 21px;
  padding: 9vh 6vw;
  max-width: 960px;
}
.warningBlock {
  color: #4b5078;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 3%;
  align-items: center;
  background: #f9f9f9;
  border-radius: 21px;
  padding: 4vh 5vw;
  margin-top: 5%;
  margin-bottom: 5%;
  max-width: 960px;
  margin: 40px auto;
}
.warning {
  width: 10%;
}
@media screen and (max-width: 768px) {
  .warning {
    width: 25%;
  }
}
@media screen and (max-width: 576px) {
  .warningBlock {
    flex-direction: column;
    gap: 30%;
  }
  .warning {
    width: fit-content;
    margin-bottom: 20px;
  }
}
</style>
