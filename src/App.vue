<template>
 <div class="app">
  <HeaderComp></HeaderComp>
  <PhoneticsPage></PhoneticsPage>
  </div>
    
</template>

<script>

import HeaderComp from './components/HeaderComp.vue';
import PhoneticsPage from './pages/PhoneticsPage.vue';
export default {
  name: 'App',
  components: {
    HeaderComp,
    PhoneticsPage,
  },
  
}
</script>

<style>
* {
  box-sizing: border-box;
}

.page {
  background: #AFB9FF;
  max-width: 960px;
}

.bg-white {
  display: flex;
  display: flex;
  background: #F9F9F9;
  border-radius: 21px;
  flex-direction: column;
  align-items: center;
}

.grid {
  padding-left: 50px;
  padding-right: 55px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(27, 1fr);
  margin-top: 250px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 45px;
  background: transparent;
  justify-items: center;
  align-items: center;
}

.title {
  display: flex;
  margin-right: 325px;
  margin-top: 78px;
  display: flex;
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  background: #F9F9F9;
  color: #373C65;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600&family=Roboto&display=swap');

@media (max-width: 960px) {}
</style>
