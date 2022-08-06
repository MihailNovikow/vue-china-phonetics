<template>
  <div>
    <div class="wrapper">
      <div class="wrapper__inner">
        <h1 class="heading">
          Загрузите иероглиф <span>Вы</span> <span class="ieroglif">您</span>
        </h1>
        <input id="file-upload" type="file" multiple @change="uploadImage" />
        <div class="content">
          <label for="file-upload">
            <img src="../../assets/img/plus.png" alt="" />
          </label>

          <div
            class="content__wrap"
            v-for="(image, key) in productImages"
            :key="key"
          >
            <div id="preview" class="content__img">
              <img v-bind:ref="'image'" alt="chinese hieroglyphs" />
            </div>
            <div class="content__close" @click="DeleteFileURL">
              <img
                @click="removeImage(image, key)"
                src="../../assets/img/close-red.png"
                alt="close"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecognizeScript',
  data() {
    return {
      productImages: []
    }
  },
  methods: {
    uploadImage(e) {
      let selectedFiles = e.target.files
      for (let i = 0; i < selectedFiles.length; i++) {
        this.productImages.push(selectedFiles[i])
      }
      this.refreshImg()
    },
    refreshImg() {
      for (let i = 0; i < this.productImages.length; i++) {
        let reader = new FileReader()
        reader.onload = () => {
          this.$refs.image[i].src = reader.result
        }
        reader.readAsDataURL(this.productImages[i])
      }
    },
    removeImage(image, index) {
      this.productImages.splice(index, 1)
      this.refreshImg()
    }
  }
}
</script>

<style scoped lang="sass">
#file-upload
	opacity: 0
	width: 0
	height: 0
#preview
	display: flex
	justify-content: center
	align-items: center
#preview img
	width: 100%
	height: 130px
	object-fit: cover
.wrapper
	font-family: "MontserratAlternates", Verdana, Geneva, Tahoma, sans-serif
	background-color: #fff
	border-radius: 27px
	padding: 70px 100px
	max-width: 960px
	margin: 0 auto
.heading
	font-size: 24px
	font-weight: 500
	margin-bottom: 80px
	span
		font-weight: 600
.ieroglif
	font-size: 36px
.content
	display: flex
	flex-direction: row
	justify-content: center
	align-items: center
	gap: 10.4%
	flex-wrap: wrap
	&__wrap
		position: relative
		width: 130px
		height: 130px
		border: 2px solid #AFB9FF
		border-radius: 7px
		margin-bottom: 50px
		padding: 0
	&__img
		object-fit: cover
		cursor: pointer
		transition: all 0.1s ease-in-out
		&:hover
			transform: scale(2)
			z-index: 100
	&__img:hover ~ .content__close
		display: none
	&__close
		position: absolute
		top: 0
		right: 0
		transform: translate(50%, -50%)
		width: 32px
		height: 32px
		display: flex
		justify-content: center
		align-items: center
		background-color: #F9F9F9
		cursor: pointer
		border-radius: 50%
		border: 2px solid #E23030
		img
			width: 50%
label
	@extend .content__wrap
	cursor: pointer
	display: flex
	justify-content: center
	align-items: center
	padding: 60px 40px
	img
		width: 100%
</style>
