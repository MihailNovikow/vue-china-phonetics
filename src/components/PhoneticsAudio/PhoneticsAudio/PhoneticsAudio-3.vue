<template>
	<div>
		<div class="text-cont">
			<h1 class="title-1">Chinese Pronunciation</h1>
			<p class="descr-1">Pinyin Section 3</p>
		</div>
		<PagePhonetics />
		<h2 class="title-2">A, O with Z, C, S</h2>
    <p class="descr-2">The Mandarin consonant sounds z, c, and s are not totally foreign sounds to the native English speaker, but can nevertheless cause some difficulty. The s sound is identical to English's, so it will not be explained. The consonant sounds z and c are very noteworthy first because they are not pronounced at all like "z" and "c" are pronounced in English. You must train yourself to recognize z and c as special Mandarin consonants.

The z consonant sound is almost like a "dz" sound. You can hear a very similar sound in English at the end of words like "suds", "ads", or "kids". The difficulty in learning this sound lies in getting used to it coming at the beginning of words rather than always at the end. (The other difference is that the z consonant is not actually voiced like English's "dz", but this detail should not give you pronunciation problems.)

The c consonant sound is a "ts" sound. You can hear a very similar sound in English at the end of words like "cuts", "hats", or "bits". Like z, the difficulty in learning the c sound lies only in getting used to it coming at the beginning of words rather than always at the end. In addition, the c sound is accompanied with a more forceful aspiration (puff of air), unlike the English "ts" when it comes at the end of a syllable.

The consonants z, c, and s combine with all of the vowel sounds covered in Section 1 and Section 2 of the tutorial except for -o, creating the following syllables. (These syllables are pronounced exactly as you would expect them to be; there are no tricks here.)
    </p>
<p>za	ca	sa
zai	cai	sai
zao	cao	sao
zan	can	san
zang	cang	sang
zong	cong	song
zou	cou	sou</p>
    <div class="text-cont">
      <h3 class="title-3">Linguist's Note:</h3>
      <p class="descr-2">
        The following are the IPA symbols for this section's pinyin vowel
        sounds:
      </p>
    </div>
    <div class="rectangle-1">
      <p class="rectangle-1-text">z	[ts]
c	[tsh]
s	[s]</p>
    </div>
    <div class="text-cont">
      <p class="descr-2">
        Listen to the sounds of this section and try repeating them by clicking on the syllables below:
      </p>
    </div>
    <AudioComponent />
    <ToggleButtons />
	</div>
</template>

<script>
import ToggleButtons from "../../ToggleButtons.vue";
import PagePhonetics from '../../PhoneticsPageComponent.vue';
import AudioComponent from '../AudioComponents/AudioComponent-3.vue';
export default {
	components: {
		PagePhonetics,
		AudioComponent,
		ToggleButtons
	},
};
</script>
