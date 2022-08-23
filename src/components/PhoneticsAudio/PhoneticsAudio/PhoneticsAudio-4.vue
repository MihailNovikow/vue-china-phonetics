<template>
	<div>
		<div class="text-cont">
			<h1 class="title-1">Chinese Pronunciation</h1>
			<p class="descr-1">Pinyin Section 4</p>
		</div>
		<PagePhonetics />
		<h2 class="title-2">A, O with ZH, CH, SH, R
</h2>
    <p class="descr-2">
      The Mandarin consonant sounds zh, ch, and sh are similar to English's "j," "ch," and "sh" sounds, but not exactly the same. The beginner will find this approximation perfectly serviceable, but the serious student will want to refine his pronunciation of these consonants eventually.

First, the zh, ch, and sh sounds in Mandarin are all pronounced with the tongue in the same place, just as the sounds "j," "ch," and "sh" in English are all pronounced with the tongue in the same place. Try saying those English sounds (just the consonants) in a row. You don't have to move your tongue to do it. Thus, what is true for the tongue positioning of zh is also true for ch and sh. For this explanation we will use zh, as its spelling makes it more difficult to mistake it for its English consonant sound.

When you pronounce Mandarin's zh sound, your tongue is an a similar position the one you use to make English's "j" sound, except the tongue is pulled back or "curled back" a bit more. (Don't obsess over the "curling" idea; you'll probably manage to make a more natural sound without trying to consciously curl your tongue back.) Thus instead of resting right on that ridge behind your front teeth (the alveolar ridge) as it does when you make the "j" sound, the tip of your tongue is further back, behind the ridge. Behind the ridge the roof of your mouth curves upwards, forming your hard palate. The tip of the tongue hovers right in front of the hard palate, creating a narrow gap.
    This tongue positioning will be more important for other vowel combinations, particularly in Section 9 of this tutorial. For now, you should be able to correctly pronounce the following consonant-vowel combinations:
	</p>
<p>
	zha	cha	sha
zhai	chai	shai
zhao	chao	shao
zhan	chan	shan
zhang	chang	shang
zhong	chong	shong
zhou	chou	shou
</p>
<p class="descr-2">
Another sound which seems quite different from the zh, ch, and sh sounds but is actually very similar is the Mandarin r. The Mandarin r is fairly similar to the [ʒ] sound you hear in the middle of the word "measure." Try making this sound by itself. You'll find your tongue in the same place as it was for the sounds of "j," "ch," and "sh" in English. Now, just as before, pull the tip of your tongue back behind the ridge. Try making the sound now. It should produce a strange, "buzzy" sort of sound. This is the Mandarin r. It will take some practice to be able to produce it reliably.

The Mandarin r does not combine with quite as many vowels as zh, ch, and sh:	
</p>
    <div class="text-cont">
      <h3 class="title-3">Linguist's Note:</h3>
      <p class="descr-2">
        The following are the IPA symbols for this section's pinyin vowel
        sounds:
      </p>
    </div>
    <div class="rectangle-1">
      <p class="rectangle-1-text">Mandarin:	zh	[ts]	English:	j	[dʒ]
Mandarin:	ch	[tsʰ]	English:	ch	[tʃ]
Mandarin:	sh	[s]	English:	sh	[ʃ]
Mandarin:	r	[ɻ] or [ʐ]	English:	r	[ɹ]
</p>
    </div>
	<p class="descr-2">
        Listen to the sounds of this section and try repeating them by clicking on the syllables below:
      </p>
    </div>
    <AudioComponent />
    <ToggleButtons />
</template>

<script>
import ToggleButtons from "../../ToggleButtons.vue";
import PagePhonetics from '../../PhoneticsPageComponent.vue';
import AudioComponent from '../AudioComponents/AudioComponent-4.vue';
export default {
	components: {
		PagePhonetics,
		AudioComponent,
		ToggleButtons
	},
};
</script>