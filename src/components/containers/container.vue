<template>
  <div class="container">
    <NavBar />
    <slot />
  </div>
</template>

<script>
import NavBar from '@/components/quizlet/NavBar'
export default {
  name: 'container',
  components: { NavBar }
}
</script>

<style scoped>
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 950px;
  padding: 0 5%;
  margin: auto;
}

input[type='text'] {
  display: block;
  -webkit-appearance: none;
  appearance: none;
  padding-bottom: 13px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #afb9ff;
  width: 90%;
}
input[type='text']:focus {
  outline: none;
}
</style>
