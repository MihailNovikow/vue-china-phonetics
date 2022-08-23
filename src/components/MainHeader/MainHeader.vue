<template>
  <div>
    <header class="header">
      <div class="header__wrap">
        <router-link to="/" class="logowrap">
          <img src="../../assets/logo.png" alt="logo" class="logo" />
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
.menu {
	padding: 0;
	max-width: 960px;
	margin-top: 37px;
	margin-bottom: 90px;
	display: flex;
	list-style-type: none;
	background: #afb9ff;
	align-items: center;
	justify-content: center;
}
.menu__li {
  font-family: 'MontserratAlternates', sans-serif;
  font-weight: 600;
  padding: 25px 10px;
  margin: 0 15px;
  cursor: pointer;
  list-style-type: none;
}

.menu__li:last-of-type {
  margin-right: 0;
}

#white__text {
  color: #fff;
  text-decoration: none;

}
#black__text {
  color: #000;
  text-decoration: none;
}

#black__text:hover {
  border-bottom: 2px solid #000;
  display: block;
	
}
.menu__li a {
	font-family: 'Montserrat Alternates';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	position: relative;
	color: #ffffff;
	cursor: pointer;
	text-decoration: none;
}
.menu__li a:after {
	display: block;
	position: absolute;
	left: 0;
	width: 0;
	height: 3px;
	margin-top: 7px;
	background-color: #ffffff;
	content: '';
	transition: width 0.3s ease-out;
}
.menu__li a:focus:after,
.menu__li a:hover:after {
	width: 100%;
}
.menu__ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  list-style-type: none;
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
    list-style-type: none;
    display: flex;
    flex-direction: row;
}
  .menu__li{
    font-family: 'MontserratAlternates', sans-serif;
    font-weight: 600;
    padding: 25px 10px;
    margin: 0 15px;
    cursor: pointer;
    list-style-type: none;
}
}
</style>
