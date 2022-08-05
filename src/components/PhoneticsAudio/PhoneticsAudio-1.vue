<template>
	<div>
		<h1>Hello it's Phonetics Audio 1</h1>
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
