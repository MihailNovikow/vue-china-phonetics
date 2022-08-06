<template>
  <div class="wrapper">
    <img
      class="bg__image"
      src="../../assets/img/mountain-without-dragon.png"
      alt=""
    />
    <nav class="list">
      <ul class="list__ul">
        <li class="list__li">
          <router-link to="/Recognize" class="list__link">
            <div class="list__wrap">
              <PaperIcon class="icon" />
            </div>
            <div class="list__name">
              <p>Почерк</p>
            </div>
          </router-link>
        </li>

        <li class="list__li">
          <router-link to="/CommonSubtitledVideo" class="list__link">
            <div class="list__wrap">
              <VideoIcon class="icon" />
            </div>
            <div class="list__name">
              <p>Видео</p>
            </div>
          </router-link>
        </li>

        <li class="list__li">
          <router-link to="/puzzles" class="list__link">
            <div class="list__wrap">
              <PuzzleIcon class="icon" />
            </div>
            <div class="list__name">
              <p>Пазлы</p>
            </div>
          </router-link>
        </li>

        <li class="list__li">
          <router-link to="/commontextpage" class="list__link">
            <div class="list__wrap">
              <TextIcon class="icon" />
            </div>
            <div class="list__name">
              <p>Текст</p>
            </div>
          </router-link>
        </li>

        <li class="list__li">
          <router-link to="/CommonDictation" class="list__link">
            <div class="list__wrap">
              <DictationIcon class="icon" />
            </div>
            <div class="list__name">
              <p>Диктант</p>
            </div>
          </router-link>
        </li>

        <li class="list__li">
          <router-link to="/music" class="list__link">
            <div class="list__wrap">
              <MusicIcon class="icon" />
            </div>
            <div class="list__name">
              <p>Музыка</p>
            </div>
          </router-link>
        </li>

        <!-- <li class="list__li">
					<router-link to="/chinesegroupes" class="list__link">
						<div class="list__wrap">
							<img src="../../assets/img/note.png" alt="#">
						</div>
						<div class="list__name">Карточки</div>
					</router-link>
				</li> -->

        <li class="list__li">
          <router-link to="/quizlet" class="list__link">
            <div class="list__wrap">
              <PaperIcon class="icon" />
            </div>
            <div class="list__name">
              <p>Ключи</p>
            </div>
          </router-link>
        </li>

        <li class="list__li">
          <router-link to="/" class="list__link">
            <div class="list__wrap">
              <VideoIcon class="icon" />
            </div>
            <div class="list__name">
              <p>Речь</p>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import PaperIcon from '../../assets/svg/MainMenu/PaperSvg.vue'
import VideoIcon from '../../assets/svg/MainMenu/VideoSvg.vue'
import PuzzleIcon from '../../assets/svg/MainMenu/PuzzleSvg.vue'
import TextIcon from '../../assets/svg/MainMenu/TextSvg.vue'
import DictationIcon from '../../assets/svg/MainMenu/DictationSvg.vue'
import MusicIcon from '../../assets/svg/MainMenu/MusicSvg.vue'

export default {
  name: 'MainMenu',
  components: {
    PaperIcon,
    VideoIcon,
    PuzzleIcon,
    TextIcon,
    DictationIcon,
    MusicIcon
  },
  data() {
    return {
      listHover: false
    }
  }
  // methods: {
  //   ChangeBG() {
  //     if (this.listHover) {
  //       document.body.classList.add('writting__bg')
  //       console.log(document.body.className)
  //     }
  //     if (!this.listHover) {
  //       document.body.classList.remove('writting__bg')
  //       console.log(document.body.className + 'Пусто')
  //     }
  //   }
  // }
}
</script>

<!-- <style lang="sass">
.writting__bg
	background-image: url('../../assets/img/chinese-writing.jpg')
	background-size: cover
</style> -->

<style scoped lang="sass">
.icon
	width: 58px
.list
	max-width: 960px
	width: 100%
	margin: 0 auto
	&__name
		transition: all .15s ease
	&__ul
		display: flex
		flex-direction: row
		align-items: center
		justify-content: center
		flex-wrap: wrap
		gap: 4%
	&__li
		font-family: 'MontserratAlternates', sans-serif
		font-weight: 600
		font-size: 18px
		max-width: 22%
		width: 100%
		box-shadow: 0px 4px 11px -1px rgba(100, 107, 116, 0.23)
		border-radius: 21px
		background-color: #F9F9F9
		cursor: pointer
		margin-bottom: 50px
		transition: all 0.15s ease
		&:hover
			background-color: rgba(56, 61, 99, 1)
			.list__name
				color: #fff
			.icon
				fill: #fff
		&:active
			opacity: 0.8
		svg
			width: 100%
	&__link
		display: flex
		flex-direction: column
		align-items: center
		justify-content: center
		gap: 10px
		padding: 30px 22px
	&__wrap
		display: flex
		align-items: center
		justify-content: center
		width: 58px
		height: 52px
	&__img
		display: block
		margin: 0
// .hand__img
// 	background-image: url('../../assets/img/hand-black.png')
// .list__li:hover #hand__img
// 	background-image: url('../../assets/img/hand-white.png')
@media screen and (max-width: 1024px)
	.list__li
		max-width: 30%
@media screen and (max-width: 768px)
	.list__li
		max-width: 46%
@media screen and (max-width: 425px)
	.list__li
		max-width: 100%
</style>
