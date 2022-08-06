<template>
  <header class="navbar">
    <div class="logo">Logo</div>
    <div
      class="links"
      :style="{
        flexBasis: getFlexBasis(width),
        fontSize: getFontSize(width)
      }"
    >
      <a class="link">Тренажеры</a>
      <a class="link">О Китае</a>
      <a class="link">Личный кабинет</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  // inject: ['width'],
  // data() {
  //   return {
  //     width: this.width
  //   }
  // },
  methods: {
    getFlexBasis(width) {
      if (width > 942) return '51%'
      if (width > 744) return '65%'
      return '80%'
    },
    getFontSize(width) {
      if (width > 612) return '18px'
      if (width > 542) return '16px'
      if (width > 482) return '14px'
      return '12px'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');

.navbar {
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
  margin-top: 2%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.logo {
  background-color: #ebebeb;
  color: #686868;
  padding: 1.5vh 2vw;
}
.links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10%;
}
.link {
  display: inline-block;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
}
</style>
