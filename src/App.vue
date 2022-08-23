<template>
  <div class="page">
    <MainHeader></MainHeader>
    <div class="bg-white">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>

<style>
@media screen and (max-width: 960px) {
}
@media (min-width: 992px) {
  .offset-lg-2 {
    margin-left: 16.66667%;
  }
}

@media (min-width: 992px) {
  .col-lg-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
}
* {
  box-sizing: border-box;
}

.page {
  background: #afb9ff;
  max-width: 960px;
  margin: 0 auto;
}

.bg-white {
  display: flex;
  background: #f9f9f9;
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
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  background: #f9f9f9;
  color: #373c65;
}
.title-1 {
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  /* identical to box height */

  color: #373c65;
}
.descr-1 {
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #373c65;
}
.t-symbol {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-align: right;

  color: #383d63;
}
.t-symbol-1 {
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-align: right;

color: #383D63;
}
.btn-play,
audio {
  width: 23px;
  height: 23px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: #a6f80f;
  cursor: pointer;
}

.play {
  border: 7px solid transparent;
  border-left: 9px solid rgb(236, 16, 16);
  cursor: pointer;
  background: transparent;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600&family=Roboto&display=swap");
</style>
