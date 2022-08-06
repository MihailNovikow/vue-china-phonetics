<template>
	<div>
		<h1>Hello it's Phonetics Audio 2</h1>
		<PagePhonetics />
		<AudioComponen2 />
	</div>
</template>

<script>
import PagePhonetics from '../PhoneticsPageComponent.vue';
import AudioComponen2 from '../PhoneticsAudio/AudioComponent-2.vue';
export default {
	components: {
		PagePhonetics,
		AudioComponen2,
	},
};
</script>
