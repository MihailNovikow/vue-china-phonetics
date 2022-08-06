<template>
  <div>
    <div class="content__video">
      <router-link :to="path">
        <div class="content__video__img">
          <div class="content__hover__bg"></div>
          <slot name="img" class="content__video__img__slot"></slot>
        </div>
        <section class="content__video__text">
          <div class="content__video__name">
            <slot name="name"></slot>
          </div>
          <div class="content__video__description">
            <slot name="description"></slot>
          </div>
        </section>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonVideoCard	',
  props: {
    path: String
  }
}
</script>

<style scoped lang="sass">
@import '../../assets/sass/vars'

.content
	&__hover__bg
		position: absolute
		width: 100%
		height: 100%
		background-color: transparent
		opacity: .3
	&__video
		text-align: left
		width: 250px
		margin-bottom: 45px
		cursor: pointer
		// background-color: #fff
		// -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.15)
		// -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.15)
		// box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.15)
		// transition: all .15s
		// &:hover
		// 	-webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.075)
		// 	-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.075)
		// 	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.075)
			// background-color: azure
			// background-color: rgb(248,248,248)
		&:hover .content__video__name
			color: $MainPurple
		&:hover .content__video__description
			color: $DarkPurple
		&:hover .content__video__img img
			opacity: 0.7
		&:hover .content__hover__bg
			background-color: $MainPurple
		&:nth-child(3n)
			margin-right: 0
		&__img
			position: relative
			height: 160px
			overflow: hidden
			display: flex
			justify-content: center
			// background-color: aliceblue
			flex-wrap: wrap
			cursor: pointer
			&__slot
				width: 100%
		&__text
			padding: 20px 0
			min-height: 8.5em
		&__name
			font-family: $RobotoFamily
			font-weight: 500
			font-size: 18px
			overflow: hidden
			text-overflow: ellipsis
			display: -webkit-box
			-webkit-line-clamp: 1
			-webkit-box-orient: vertical
			line-height: 1.3em
			min-height: 1.5em
		&__description
			font-family: $RobotoFamily
			font-weight: 400
			font-size: 16px
			overflow: hidden
			text-overflow: ellipsis
			display: -webkit-box
			-webkit-line-clamp: 4
			-webkit-box-orient: vertical
			line-height: 1.3em
</style>
