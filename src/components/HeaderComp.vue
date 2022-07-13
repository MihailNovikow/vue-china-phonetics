<template>
  <div class="page">
    <nav>
      <ul class="nav"><img class="header-logo-img" src="../assets/logo.png">
        <div class="li-cont">
          <li><a href="#">Тренажеры</a></li>
          <li><a href="#">О Китае</a></li>
          <li><a href="#">Личный кабинет</a></li>
        </div>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'HeaderComp',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  background: #AFB9FF;
}



.header-logo-img {
    margin-left: -50px;
    display: flex;
    justify-content: space-between;
    width: 129px;
    height: 50px;
}

.nav {
  max-width: 960px;
  margin-top: 37px;
  margin-bottom: 90px;
  display: flex;
  list-style-type: none;
  background: #AFB9FF;
  align-items: center;
  justify-content: center;
}

.li-cont {
    margin-left: 344px;
    width: 476px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

li {
  display: flex;
  flex-wrap: nowrap;
}

a {
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  position: relative;
  color: #FFFFFF;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
}

a:after {
  display: block;
  position: absolute;
  left: 0;
  width: 0;
  height: 3px;
  margin-top: 7px;
  background-color: #FFFFFF;
  content: "";
  transition: width 0.3s ease-out;
}

a:focus:after,
a:hover:after {
  width: 100%;
}
</style>
