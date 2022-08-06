<template>
  <div class="wrapper">
    <!-- <div class="small__wrap">
      <h1 class="h1">Музыка</h1>
      <ul class="level__wrap">
        <li class="level__wrap__li">1 уровень</li>
        <li class="level__wrap__li">2 уровень</li>
        <li class="level__wrap__li">3 уровень</li>
      </ul>
    </div> -->

    <FiltersComponent :btnBorder="false">
      <template #name>Музыка</template>
      <template #btn__text1>Уровень 1</template>
      <template #btn__text2>Уровень 2</template>
      <template #btn__text3>Уровень 3</template>
    </FiltersComponent>

    <div class="big__wrap">
      <div class="music">
        <ul class="music__list">
          <li class="music__li">
            <router-link to="/musicpass" class="music__audio">
              <div class="music__wrap__left">
                <div class="music__play__wrap">
                  <PlaySvg class="music__play__img" />
                </div>
                <div class="music__name">Smells Like Teen Spirit</div>
                <div class="music__singer">Nirvana</div>
              </div>
              <div class="music__time">3:58</div>
            </router-link>
          </li>
          <li class="music__li">
            <router-link to="/musicpass" class="music__audio">
              <div class="music__wrap__left">
                <div class="music__play__wrap">
                  <PlaySvg class="music__play__img" />
                </div>
                <div class="music__name">Smells Like Teen Spirit</div>
                <div class="music__singer">Nirvana</div>
              </div>
              <div class="music__time">3:58</div>
            </router-link>
          </li>
          <li class="music__li">
            <router-link to="/musicpass" class="music__audio">
              <div class="music__wrap__left">
                <div class="music__play__wrap">
                  <PlaySvg class="music__play__img" />
                </div>
                <div class="music__name">Smells Like Teen Spirit</div>
                <div class="music__singer">Nirvana</div>
              </div>
              <div class="music__time">3:58</div>
            </router-link>
          </li>
          <li class="music__li">
            <router-link to="/musicpass" class="music__audio">
              <div class="music__wrap__left">
                <div class="music__play__wrap">
                  <PlaySvg class="music__play__img" />
                </div>
                <div class="music__name">Smells Like Teen Spirit</div>
                <div class="music__singer">Nirvana</div>
              </div>
              <div class="music__time">3:58</div>
            </router-link>
          </li>
          <li class="music__li">
            <router-link to="/musicpass" class="music__audio">
              <div class="music__wrap__left">
                <div class="music__play__wrap">
                  <PlaySvg class="music__play__img" />
                </div>
                <div class="music__name">Smells Like Teen Spirit</div>
                <div class="music__singer">Nirvana</div>
              </div>
              <div class="music__time">3:58</div>
            </router-link>
          </li>
          <li class="music__li">
            <router-link to="/musicpass" class="music__audio">
              <div class="music__wrap__left">
                <div class="music__play__wrap">
                  <PlaySvg class="music__play__img" />
                </div>
                <div class="music__name">Smells Like Teen Spirit</div>
                <div class="music__singer">Nirvana</div>
              </div>
              <div class="music__time">3:58</div>
            </router-link>
          </li>
          <li class="music__li">
            <router-link to="/musicpass" class="music__audio">
              <div class="music__wrap__left">
                <div class="music__play__wrap">
                  <PlaySvg class="music__play__img" />
                </div>
                <div class="music__name">Smells Like Teen Spirit</div>
                <div class="music__singer">Nirvana</div>
              </div>
              <div class="music__time">3:58</div>
            </router-link>
          </li>
          <li class="music__li">
            <router-link to="/musicpass" class="music__audio">
              <div class="music__wrap__left">
                <div class="music__play__wrap">
                  <PlaySvg class="music__play__img" />
                </div>
                <div class="music__name">Smells Like Teen Spirit</div>
                <div class="music__singer">Nirvana</div>
              </div>
              <div class="music__time">3:58</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FiltersComponent from '@/components/FiltersComponent/FiltersComponent.vue'
import PlaySvg from '../../assets/svg/PlaySvg/PlaySvg.vue'

export default {
  name: 'MusicList',
  components: {
    FiltersComponent,
    PlaySvg
  }
}
</script>

<style scoped lang="sass">
@import '../../assets/sass/vars.sass'
.wrapper
	max-width: 960px
	width: 100%
	margin: 0 auto
	margin-bottom: 70px
// .small__wrap
// 	display: flex
// 	flex-direction: row
// 	justify-content: space-between
// 	flex: 2
// 	margin-bottom: 40px
// .h1
// 	font-family: $MontserratFamily
// 	font-size: 36px
// 	font-weight: 400
// 	color: #373C65
// .level__wrap
// 	display: flex
// 	flex-direction: row
// 	justify-content: space-between
// 	flex-basis: 1
// 	width: 43%
// 	&__li
// 		font-family: $RobotoFamily
// 		font-size: 12px
// 		flex: none
// 		display: flex
// 		flex-direction: row
// 		align-items: center
// 		justify-content: center
// 		width: 30%
// 		padding: 10px 15px
// 		border-radius: 27px
// 		background-color: #F9F9F9
// 		border: 1px solid #F9F9F9
// 		margin-right: 3%
// 		cursor: pointer
// 		transition: all 0.1s ease-in
// 		&:nth-child(3n)
// 			margin-right: 0
// 		&:hover
// 			background-color: #afb9ff
// 			border: 1px solid #000
// 		&:active
// 			opacity: .7
.big__wrap
	max-width: 960px
	width: 100%
	background-color: ghostwhite
	margin: 0 auto
	padding: 70px 100px
	border-radius: 27px
.audio
	width: 100%
	margin-bottom: 25px
.music
	font-family: $RobotoFamily
	&__li
		margin-bottom: 25px
		&:last-of-type
			margin-bottom: 0
	&__audio
		font-size: 20px
		display: flex
		flex-direction: row
		justify-content: space-between
		align-items: center
		padding-bottom: 20px
		border-bottom: 1.5px solid #383D63
		transition: all .15s ease
		&:hover
			color: $MainPurple
			border-bottom: 1.5px solid $DarkPurple
			.music__singer
				color: $MainPurple
			.music__play__img
				fill: $MainPurple
	&__wrap__left
		max-width: 95%
		display: flex
		flex-direction: row
		justify-content: space-between
		align-items: center
	&__play__img
		display: flex
		justify-content: center
		align-items: center
		width: 20px
		&:hover
			fill: $MainPurple
	&__name
		padding: 0 10px
	&__singer
		color: rgba(112, 112, 112, 0.5)
@media only screen and (max-width: 720px)
	.level__wrap
		width: 63%
	.big__wrap
		padding: 70px 45px
@media only screen and (max-width: 576px)
	.small__wrap
		flex-direction: column
	.h1
		text-align: center
		margin-bottom: 20px
	.level__wrap
		width: 100%
		&__li
			font-size: 11px
	.music
		&__audio
			font-size: 12px
		&__play__img, &__name
			text-align: center
	.big__wrap
		padding: 70px 10px
</style>
