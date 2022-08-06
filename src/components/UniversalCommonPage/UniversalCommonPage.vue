<template>
  <div class="wrapper">
    <router-link :to="path">
      <div class="links__wrap">
        <div class="links__description">
          <div class="links__name h5">
            <slot name="name"></slot>
          </div>
          <div class="links__author h5">
            <slot name="author"></slot>
          </div>
        </div>
        <div class="links__btn">
          <button id="btn h5">
            <slot name="btn__text"></slot>
          </button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  }
}
</script>

<style scoped lang="sass">
@import '../../assets/sass/vars.sass'
.wrapper
	max-width: 960px
	margin: 0 auto
.links
	&__wrap
		display: flex
		flex-direction: row
		justify-content: space-between
		align-items: center
		margin-bottom: 15px
		// border-bottom: 2px solid black
		padding-bottom: 5px
		transition: all .15s ease
		&:hover
			color: $MainPurple
			cursor: pointer
		&:hover .links__btn button
			background-color: $DarkPurple
			border: 2px solid $DarkPurple
			color: $White
		&:hover .links__name
			color: $MainPurple
		&:hover .links__author
			color: $DarkPurple
	&__description
		display: flex
	&__name
		margin-right: 20px
	&__author
		@extend .links__name
		font-weight: 400
		color: $Grey
	&__btn
		font-style: 13px
		line-height: 15px
		text-align: center
		border: 2px solid transparent
		color: $White
		button
			background-color: $White
			color: $DarkPurple
			border: none
			padding: .5rem 1.5rem
			border: 2px solid $DarkPurple
			border-radius: 27.375px
			cursor: pointer
			transition: all .15s ease
			&:hover
				background-color: $DarkPurple
				color: #fff
				border: 2px solid $MainPurple
#btn:hover
	color: #fff
</style>
