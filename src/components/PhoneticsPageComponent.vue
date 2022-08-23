<template>
  <div class="main">
    <router-link to="/phonetics1">
      <div class="main__inner">1</div>
    </router-link>
    <router-link to="/phonetics2">
      <div class="main__inner">2</div>
    </router-link>
    <router-link to="/phonetics3">
      <div class="main__inner">3</div>
    </router-link>
    <router-link to="/phonetics4">
      <div class="main__inner">4</div>
    </router-link>
    <router-link to="/phonetics5">
      <div class="main__inner">5</div>
    </router-link>
    <router-link to="/phonetics6">
      <div class="main__inner">6</div>
    </router-link>
    <router-link to="/phonetics7">
      <div class="main__inner">7</div>
    </router-link>
    <router-link to="/phonetics8">
      <div class="main__inner">8</div>
    </router-link>
    <router-link to="/phonetics9">
      <div class="main__inner">9</div>
    </router-link>
    <router-link to="/phonetics10">
      <div class="main__inner">10</div>
    </router-link>
    <router-link to="/phonetics11">
      <div class="main__inner">11</div>
    </router-link>
    <router-link to="/phonetics12">
      <div class="main__inner">12</div>
    </router-link>
    <router-link to="/phonetics13">
      <div class="main__inner">13</div>
    </router-link>
    <router-link to="/phonetics14">
      <div class="main__inner">14</div>
    </router-link>
    <router-link to="/phonetics15">
      <div class="main__inner">15</div>
    </router-link>
    <router-link to="/phonetics16">
      <div class="main__inner">16</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "page-phonetics",
};
</script>

<style>
@media screen and (max-width: 960px) {
  * {
    width: 100%;
    box-sizing: border-box;
  }
}

.main {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 10%;
  flex-wrap: wrap;
  margin-top: 70px;
}
.main__inner {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  cursor: pointer;
}
.bg-white-cont {
  background: transparent;
}

.table {
  /*width: 100%;*/
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  border-collapse: collapse;
  background: #f9f9f9;
}
/*.table th {
                          font-weight: bold;
                          padding: 5px;
                          background: #efefef;
                          border: 1px solid #dddddd;
                       } */
.table td {
  border: 1px solid #dddddd;
  padding: 5px;
}
tr {
  display: flex;
  flex-direction: row;
}
.table-a {
  width: 50px;
  height: 80px;
}
.t-1 {
  width: 17.39px;
  height: 33.76px;
  left: 600.39px;
  top: 346px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-2 {
  width: 165.39px;
  height: 18.49px;
  left: 763.96px;
  top: 346px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-3 {
  width: 104.35px;
  height: 18.42px;
  left: 866.39px;
  top: 346px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-4 {
  width: 206.66px;
  height: 18.42px;
  left: 1071px;
  top: 346px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-5 {
  width: 81.84px;
  height: 18.42px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-cont-1-4 {
  display: flex;
  flex-direction: column;
}
.t-b-cont-1-2 {
  display: flex;
  flex-direction: row;
}
.t-b-1 {
  display: flex;
}
.t-b-2 {
  width: 63.43px;
  height: 140.16px;
  left: 764px;
  top: 377.72px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-3-4 {
  display: flex;
  flex-direction: column;
}
.t-b-3 {
  width: 165.74px;
  height: 48.08px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-4 {
  width: 165.74px;
  height: 63.43px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-cont-5-6 {
  display: flex;
  flex-direction: column;
}
.t-b-5 {
  width: 104.35px;
  height: 140.16px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-6 {
  width: 104.35px;
  height: 109.47px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-6-2 {
  width: 267px;
  height: 48px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-7 {
  width: 267px;
  height: 48px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-8 {
  width: 206.66px;
  height: 140.16px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-9 {
  width: 206.66px;
  height: 109.47px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-10 {
  width: 206.66px;
  height: 48.08px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-10-2 {
  width: 206.66px;
  height: 48.08px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-cont-11-12 {
  display: flex;
  flex-direction: row;
}
.t-b-11 {
  width: 84px;
  height: 184px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-12 {
  width: 104px;
  height: 184px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-13 {
  width: 186px;
  height: 63px;
  left: 1255px;
  top: 562px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-13-2 {
  width: 186px;
  height: 48.08px;
  left: 1255px;
  top: 562px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-14 {
  width: 186px;
  height: 48.08px;
  left: 1255px;
  top: 562px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-15 {
  width: 84px;
  height: 184px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-15-2 {
  width: 83.67px;
  height: 63.24px;
  left: 1337px;
  top: 561.98px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-16 {
  width: 83.89px;
  height: 48.08px;
  left: 1337px;
  top: 623.25px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-b-16-2 {
  width: 83.89px;
  height: 48.08px;
  left: 1337px;
  top: 623.25px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-min {
  width: 22.51px;
  height: 17.39px;
  left: 620.85px;
  top: 362.37px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.t-min-v {
  width: 17.39px;
  height: 17.39px;
  left: 583px;
  top: 377.72px;
  border: 2px solid #4b5078;
}
.t-block-1 {
  width: 104.35px;
  height: 140.16px;
  left: 866px;
  top: 377.72px;
  border: 2px solid #4b5078;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.title-2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #4b5078;
  background: #f9f9f9;
}
.descr-2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #383d63;
  background: #f9f9f9;
}
.title-3 {
  /* width: 172px;*/
  height: 28px;
  left: 583px;
  top: 1245px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #4b5078;
  background: #f9f9f9;
}
.descr-3 {
  /* width: 513px;*/
  height: 19px;
  left: 583px;
  top: 1293px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #383d63;
  background: #f9f9f9;
}
.descr-4 {
  /*  width: 754px;*/
  height: 342px;
  left: 583px;
  top: 1526px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #383d63;
  background: #f9f9f9;
}
.title-5 {
  /* width: 166px;*/
  height: 28px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #4b5078;
  background: #f9f9f9;
}
.descr-5 {
  /*width: 513px;*/
  height: 19px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #383d63;
  background: #f9f9f9;
}
.descr-6 {
  /* width: 658px;*/
  height: 19px;
  left: 583px;
  top: 2236px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #383d63;
  background: #f9f9f9;
}
.rectangle-1 {
  padding: 33px;
  border: 2px solid gray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
}
.rectangle-1-text {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 185px;*/
  height: 46px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #383d63;
  background: #f9f9f9;
}

.text-center {
  text-align: center !important;
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table {
  display: flex;
  /* margin-left: 265px;
        margin-right: 265px;
        margin-bottom: 100px;*/
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  width: 100%;
  margin-bottom: 1rem;
  color: #525f7f;
  background-color: transparent;
}

.t-s-1 {
  display: flex;
  flex-direction: row;
  background: #f9f9f9;
  width: 500px;
  justify-content: space-around;
  align-items: center;
}

.hr-1 {
  width: 392px;
  height: 0px;
  left: 779px;
  top: 2320px;

  border: 1px solid #afb9ff;
}

.rectangle-2 {
  padding-top: 33px;
  padding-bottom: 33px;
  padding-left: 45px;
  padding-right: 45px;
  border: 2px solid gray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #f9f9f9;
}

.rectangle-2-text {
  display: flex;
  width: 161px;
  height: 65px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #383d63;
  background: #f9f9f9;
  align-items: center;
  justify-content: center;
}

.btn-play,
audio {
  width: 23px;
  height: 23px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: #afb9ff;
  cursor: pointer;
}

.play {
  border: 7px solid transparent;
  border-left: 9px solid #fff;
  cursor: pointer;
  background: transparent;
}

.t-symbol {
  margin-left: 61px;
  background: #f9f9f9;
}

.t-symbol-1 {
  margin-left: 25px;
  margin-right: 8px;
}
.btn_toggle_text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
}
.btn-img {
  width: 14px;
  height: 14px;
  background: transparent;
}
</style>
