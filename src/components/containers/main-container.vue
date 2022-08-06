<template>
  <div class="main-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'main-container'
}
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  background: #f9f9f9;
  border-radius: 21px;
  height: 50%;
  width: fit-content;
  z-index: 1;
  position: relative;
}
</style>
