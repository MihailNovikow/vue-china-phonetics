<template>
  <div class="wrapper">
    <div class="wrapper__inner">
      <h1 class="name">
        <slot name="name"></slot>
      </h1>
      <p class="description h1">
        <!-- <slot name="description"></slot> -->
        他叫<span id="popcorn" class="chosen__text" @mousedown="Popper()"
          >小王</span
        ><span class="exstension">小王 - маленький Ванг</span>
        他是张文的朋友。小王不是北京语言学院的学生，他是北京大学的学生。这是小王的家。小王的爸爸是老师，妈妈是大夫。那是他爸爸和他妈妈的屋子，这是小王的屋子。小王有一张床，一张大桌子，一把椅子，一个书架，一张小桌子和一个电视。小王学习法语。他有三本法文书，一本法文词典，两本法文画报。他没有法文杂志。小王的老师不是中国人，她是外国人。
      </p>
      <div class="img__wrap">
        <img
          src="../../assets/img/table.jpg"
          alt="table"
          class="img__wrap__img"
        />
        <!-- <slot name="img"></slot> -->
      </div>
      <br />
      <div class="words__block">
        <h2 class="newwords__heading">生词 Новые слова</h2>
        <ul id="newwords__ul" class="newwords__ul">
          <li class="newwords__li">
            <!-- <slot name="Hieroglyph"></slot> -->
            <span class="newwords__green">(名)</span>*
            <!-- <slot name="translate"></slot> -->
            [dàxué] университет
          </li>
          <li class="newwords__li">
            家 <span class="newwords__green">(名)</span> [jiā] семья/дом
          </li>
          <li class="newwords__li">
            屋子 <span class="newwords__green">(名)</span> [wūzi] комната
          </li>
          <li class="newwords__li">
            电视 <span class="newwords__green">(名)</span> [diànshì] телевизор
          </li>
          <li class="newwords__li">
            法语 <span class="newwords__green">(名)</span> [fǎyǔ] французский
            язык
          </li>
          <li class="newwords__li">
            词典 <span class="newwords__green">(名)</span> [cídiǎn] словарь
          </li>
          <li class="newwords__li">
            画报 <span class="newwords__green">(名)</span> [huàbào] фотожурнал
          </li>
          <li class="newwords__li">
            杂志 <span class="newwords__green">(名)</span> [zázhì] журнал
          </li>
          <li class="newwords__li">*名词 – существительное</li>
        </ul>
      </div>

      <div class="words__block">
        <h2 class="newwords__heading">专名 Имена собственные</h2>
        <ul id="newwords__ul" class="newwords__ul">
          <li class="newwords__li">张文 [zhāngwén] Чжан Вэнь (имя)</li>
          <li class="newwords__li">
            北京语言学院 [běijīng yǔyán xuéyuàn] Пекинский институт иностранных
            языков
          </li>
          <li class="newwords__li">
            北京大学 [běijīng dàxué] Пекинский университет
          </li>
        </ul>
      </div>

      <p class="description">
        他叫小王，他是张文的朋友。小王不是北京语言学院的学生，他是北京大学的学生。这是小王的家。小王的爸爸是老师，妈妈是大夫。那是他爸爸和他妈妈的屋子，这是小王的屋子。小王有一张床，一张大桌子，一把椅子，一个书架，一张小桌子和一个电视。小王学习法语。他有三本法文书，一本法文词典，两本法文画报。他没有法文杂志。小王的老师不是中国人，她是外国人
      </p>
      <div class="video__wrap">
        <video
          src="../../assets/demo/peppa.mp4"
          class="video__wrap__video"
          controls
        ></video>
      </div>
      <h1 class="name">称象</h1>
      <p class="description">
        古时候,中国北方的人们没看见过象。<br />
        有人用船从南方带来一只,大家知道了,都跑到河边去看。<br />
        "这只象太大了, 比马大得多。"<br />
        "可能它的一只脚就跟一匹马一样重。"<br />
        "这只象最少有五千斤。"<br />
        "不, 我看要比五千厅重一倍, 有一万斤。"<br />
        大家讨论了很长时间,一个人说:<br />
        "要想知道这只象的重量, 应该用秤称一称。"<br />
        "哪儿有这么大的秤呢?"<br />
        大家都想不出怎么称这只象。这时候, 一个七岁的孩子走出来说:<br />
        "我有办法。"<br />
        "你有什么办法?"<br />
        "把这只象牵到船上去, 看看水到船的什么地方, 在那儿作一个记号。作完记号,
        把象牵下来, 再往船上撒石头。等水到了作记号的地方,
        就别搬了。这只象就跟这些石头一样重。把石头报下来, 称一称,
        不(是)就知道象的重量了吗?"
      </p>
    </div>

    <div class="extension" id="tooltip">
      <div class="extension__img__wrap">
        <img src="" alt="" class="extension__img" />
      </div>

      <div class="extension__top__wrap">
        <div class="extension__name__wrap">
          <span class="extension__name__open__bracker h6">[</span>
          <p class="extension__name h6">кот</p>
          <span class="extension__name__close__bracker h6">]</span>
        </div>
        <div class="extension__audio__wrap">
          <div class="extension__audio__svg__wrap">
            <PlaySvg class="extension__audio__svg" />
          </div>
          <audio class="extension__audio">
            <source src="../../assets/audio/ChinesePod.mp3" />
          </audio>
        </div>
      </div>

      <div class="extension__translation__wrap">
        <div class="extension__translation">
          <span class="extension__translation__number h6">1) </span>
          <span class="extension__translation__name h6">Котенок</span>
        </div>
        <div class="extension__translation">
          <span class="extension__translation__number h6">2) </span>
          <span class="extension__translation__name h6">Кошка</span>
        </div>
        <div class="extension__translation">
          <span class="extension__translation__number h6">3) </span>
          <span class="extension__translation__name h6">Кошка</span>
        </div>
      </div>
      <div class="extension__45deg"></div>
    </div>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core'
import PlaySvg from '../../assets/svg/PlaySvg/PlaySvg.vue'

export default {
  name: 'TextTranslate',
  components: {
    PlaySvg
  },
  methods: {
    Popper() {
      const popcorn = document.querySelector('#popcorn')
      const tooltip = document.querySelector('#tooltip')
      createPopper(popcorn, tooltip, {
        placement: 'top'
      })
    }
  }
}
</script>

<style scoped lang="sass">
@import '../../assets/sass/vars.sass'
.chosen__text
	color: red
	cursor: pointer
.wrapper
	font-family: $RobotoFamily
	font-weight: normal
	max-width: 960px
	width: 100%
	margin: 0 auto
	padding: 65px 100px
	background-color: $White
	// ghostwhite
	border-radius: 27px
	margin-bottom: 70px
	&__inner
		width: 100%
.name
	font-family: $MontserratFamily
	font-size: 24px
	font-weight: 500
	color: #373C65
	margin-bottom: 25px
.description
	font-size: 16px
	color: #383D63
.img__wrap
	width: 80%
	margin: 25px auto
	&__img
		display: block
		width: 100%
		border-radius: 18px
.video__wrap
	width: 80%
	margin: 25px auto
	&__video
		width: 100%
#newwords__ul
	margin-bottom: 40px
.newwords
	&__ul
		font-size: 18px
		font-weight: 500
		color: #383D63
	&__heading
		margin-bottom: 10px
		font-weight: 500
	&__green
		color: #2AA317
		cursor: pointer
.extension
	width: fit-content
	background-color: $White
	color: $DarkPurple
	padding: 10px 15px
	box-shadow: 0px 4px 11px rgba(100, 107, 116, 0.16)
	border-radius: 7px
	&__name__wrap
		display: flex
		flex-direction: row
		margin-right: 5px
	&__audio__svg
		width: 22px
		cursor: pointer
		fill: $DarkPurple
	&__top__wrap
		display: flex
		flex-direction: row
		justify-content: space-between
@media only screen and (max-width: 720px)
	.wrapper
		padding: 65px 20px
	.img__wrap, .video__wrap
		width: 90%
@media only screen and (max-width: 420px)
	.img__wrap, .video__wrap
		width: 100%
	.description
		font-size: 12px
	.newwords__ul
		font-size: 14px
</style>
