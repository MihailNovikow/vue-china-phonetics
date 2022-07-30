<template>
  <section class="page">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'layout-base'
}
</script>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  width: 100%;

  background-color: #afb9ff;
  background-image: url('../assets/img/bg-picture.png');
  background-position: bottom;
  background-size: auto;
  background-repeat: no-repeat;
}
</style>
