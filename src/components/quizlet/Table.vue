<template>
  <div>
    <svg1 class="big_character" />
    <svg2 class="big_character" />
    <svg3 class="big_character" />
    <svg4 class="big_character" />
    <svg5 class="big_character" />
    <svg6 class="big_character" />
    <svg7 class="big_character" />
    <svg8 class="big_character" />
    <svg9 class="big_character" />
    <svg10 class="big_character" />
    <svg11 class="big_character" />
    <!-- <div class="table">
			<div :class="adaptiveClass(type)">
				<img
					class="character"
					v-for="num in 12"
					v-bind:key="num"
					:src="getCharacter(num)"
					:alt="num"
				/>
			</div>
			<img
				class="big_character"
				:src="getCharacter(12)"
				alt="12"
				:style="{
					width: getBigCharacterSize(width),
					height: getBigCharacterSize(width)
				}"
			/>
		</div>		 -->
  </div>
</template>

<script>
import svg1 from '../../assets/svg/characters/1.svg'
import svg2 from '../../assets/svg/characters/2.svg'
import svg3 from '../../assets/svg/characters/3.svg'
import svg4 from '../../assets/svg/characters/4.svg'
import svg5 from '../../assets/svg/characters/5.svg'
import svg6 from '../../assets/svg/characters/6.svg'
import svg7 from '../../assets/svg/characters/7.svg'
import svg8 from '../../assets/svg/characters/8.svg'
import svg9 from '../../assets/svg/characters/9.svg'
import svg10 from '../../assets/svg/characters/10.svg'
import svg11 from '../../assets/svg/characters/11.svg'

export default {
  name: 'Table',
  components: {
    svg1,
    svg2,
    svg3,
    svg4,
    svg5,
    svg6,
    svg7,
    svg8,
    svg9,
    svg10,
    svg11
  }
  // inject: ['type', 'width'],
  // props: {
  //   limit: Number
  // },
  // data() {
  //   return {
  //     type: this.type,
  //     width: this.width
  //   }
  // },
  // methods: {
  //   getCharacter: (number) => require(`@/assets/svg/characters/${number}.svg`),
  //   getBigCharacterSize(width) {
  //     if (width > 441) return '151px'
  //     if (width > 397) return '115px'
  //     return '83px'
  //   },
  //   adaptiveClass: (type) => `grid__${type}`
  // }
}
</script>

<style scoped>
.table {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20%;
  align-items: center;
}
.big_character {
  opacity: 0;
  transition: 1s;
  animation: show 3s 1;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
.character {
  width: 86px;
}
.grid__lg {
  display: grid;
  align-content: start;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: none;
  grid-column-gap: 2vw;
  grid-row-gap: 0;
}
.grid__md {
  display: grid;
  align-content: start;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: none;
  grid-column-gap: 2vw;
  grid-row-gap: 0;
}
.grid__xs {
  display: grid;
  align-content: start;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: none;
  grid-column-gap: 2vw;
  grid-row-gap: 0;
}
</style>
