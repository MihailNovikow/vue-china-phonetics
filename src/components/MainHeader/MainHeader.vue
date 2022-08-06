<template>
  <div>
    <header class="header">
      <div class="header__wrap">
        <router-link to="/" class="logowrap">
          <img src="../../assets/img/train-2.png" alt="logo" class="logo" />
        </router-link>
        <nav class="menu">
          <ul class="menu__ul">
            <li class="menu__li">
              <router-link
                to="/menu"
                :id="[blackText ? 'black__text' : 'white__text']"
                >Тренажеры</router-link
              >
            </li>
            <li class="menu__li">
              <router-link
                to="/about"
                :id="[blackText ? 'black__text' : 'white__text']"
                >О Китае</router-link
              >
            </li>
            <li class="menu__li">
              <router-link
                to="#"
                :id="[blackText ? 'black__text' : 'white__text']"
                >Личный кабинет</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    blackText: Boolean
  }
}
</script>

<style scoped>
.header,
.header__wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  flex-direction: row;
}
.header,
.header__wrap,
.menu__ul {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
}
.logowrap {
  width: 64px;
  height: 64px;
  margin: 10px 0px;
}
.logo {
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.header {
  font-family: 'MontserratAlternates', Verdana, Tahoma, sans-serif;
  display: flex;
  flex-direction: row;
  padding-top: 35px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 700;
}
.header__wrap {
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 auto;
}
.menu__li {
  font-family: 'MontserratAlternates', sans-serif;
  font-weight: 600;
  padding: 25px 10px;
  margin: 0 15px;
  cursor: pointer;
}

.menu__li:last-of-type {
  margin-right: 0;
}

#white__text {
  color: #fff;
}
#black__text {
  color: #000;
}
#black__text:hover {
  border-bottom: 2px solid #000;
}
.menu__li a:hover {
  border-bottom: 2px solid #fff;
}
.menu__li a:last-child {
  margin-right: 0;
  padding-right: 0;
}
.menu__ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
}
@media screen and (max-width: 1024px) {
  html body {
    padding: 0 20px;
  }
  .content__wrap {
    padding: 30px 20px;
  }
}
@media screen and (max-width: 720px) {
  body {
    padding: 10px 15px;
  }
  .content__wrap {
    padding: 30px 15px;
  }
  .header__wrap,
  .menu__ul {
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .menu__li {
    padding: 15px 10px;
  }
}
</style>
