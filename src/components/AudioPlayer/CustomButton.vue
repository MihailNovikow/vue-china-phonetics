<template>
  <button :class="`button ${type}`"><slot></slot></button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    type: String
  }
}
</script>

<style scoped>
.button {
  margin: 5% 0;
  padding: 3% 5%;
  background: transparent;
  border: 2px solid #afb9ff;
  box-sizing: border-box;
  border-radius: 27px;
  cursor: pointer;
  transition: background-color 0.1s ease-in;
}
.button:hover {
  background-color: #afb9ff;
  color: #f9f9f9;
}
.button:active {
  opacity: 0.7;
}
.light {
  background: #f9f9f9;
  color: #383d63;
}
.dark {
  background: #afb9ff;
  color: #f9f9f9;
}
</style>
