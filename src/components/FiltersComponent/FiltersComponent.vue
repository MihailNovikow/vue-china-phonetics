<template>
  <div class="filters">
    <div class="filters__wrap">
      <div class="filters__name">
        <slot name="name"></slot>
      </div>
      <ul class="filters__menu">
        <li class="filters__li">
          <button
            class="filters__li__btn"
            :class="[btnBorder ? 'btn__border' : 'border__none']"
          >
            <slot name="btn__text1"></slot>
          </button>
        </li>
        <li class="filters__li">
          <button
            class="filters__li__btn"
            :class="[btnBorder ? 'btn__border' : 'border__none']"
          >
            <slot name="btn__text2"></slot>
          </button>
        </li>
        <li class="filters__li">
          <button
            class="filters__li__btn"
            :class="[btnBorder ? 'btn__border' : 'border__none']"
          >
            <slot name="btn__text3"></slot>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btnBorder: Boolean
  }
}
</script>

<style scoped lang="sass">
@import '../../assets/sass/vars.sass'
.btn__border
	border: 1px solid $DarkPurple
.filters
	margin-bottom: 45px
	&__name
		font-family: $MontserratFamily
		font-weight: 400
		font-size: 26px
	&__wrap
		display: flex
		flex-direction: row
		justify-content: space-between
		align-items: center
		margin: 0 auto
		max-width: 960px
	&__menu
		display: flex
		flex-direction: row
	&__li
		margin-right: 25px
		&__btn
			font-family: $RobotoFamily
			font-weight: 400
			font-size: 12px
			padding: 10px 30px
			border-radius: 27px
			cursor: pointer
			background-color: $White
			transition: all 0.15s ease-in-out
			&:hover
				background-color: $DarkPurple
				color: #fff
		&:last-of-type
			margin-right: 0
.btn__border
	border: 1px solid $DarkPurple
.border__none
	border: none
</style>
