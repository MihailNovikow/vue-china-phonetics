<template>
	<div class="page">
		<nav class="nav">
			<div class="li-cont">
				<div class="li-cont-left">
					<img class="header-logo-img" src="../assets/logo.png" />
				</div>
				<div class="li-cont-right">
					<ul>
						<li><a href="#">Тренажеры</a></li>
						<li><a href="#">О Китае</a></li>
						<li><a href="#">Личный кабинет</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
export default {
	name: 'HeaderComp',
	props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
	background: #afb9ff;
}

.header-logo-img {
	display: flex;
	justify-content: space-between;
	width: 129px;
	height: 50px;
}

.nav {
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

.li-cont {
	width: 960px;
	display: flex;
	align-items: center;
	gap: 3%;
	justify-content: space-between;
}


.li-cont-right {
	display: flex;
	gap: 3%;
	align-items: center;
	justify-content: center;
}

li {
	/* margin-right: 3%; */
	display: flex;
	flex-wrap: nowrap;
	/* margin-left: 3%; */
	text-align: center;
}

a {
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

a:after {
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

a:focus:after,
a:hover:after {
	width: 100%;
}
</style>
