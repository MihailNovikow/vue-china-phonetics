<template>
	<div>
		<h1><div class="table-a">
				<p class="a">A</p>
				<p class="a-descr">with Easy Consonants</p>
			</div></h1>
		<PagePhonetics />
		<AudioComponent />
	</div>
</template>

<script>
import PagePhonetics from '../PhoneticsPageComponent.vue';
import AudioComponent from '../PhoneticsAudio/AudioComponent-1.vue';
export default {
	components: {
		PagePhonetics,
		AudioComponent,
	},
};
</script>