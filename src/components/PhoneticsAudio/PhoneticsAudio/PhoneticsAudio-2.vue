<template>
  <div>
    <div class="text-cont">
      <h1 class="title-1">Chinese Pronunciation</h1>
      <p class="descr-1">Pinyin Section 2</p>
    </div>
	<PagePhonetics />
    <h2 class="title-2">O with Easy Consonants</h2>
    <p class="descr-2">
      Before you get confused, it’s important to know from the start that pinyin
      o is actually pronounced in several distinct ways, depending on what other
      sounds it combines with. When o is a syllable all by itself, it is
      pronounced as a pure "o" sound, lips rounded but not moving as the sound
      is produced. (If your lips are drawing tighter together as you make an
      "oh" sound, it's likely that you are adding an "oo" sound after the "oh."
      Mandarin o does not contain that "oo" sound. The Mandarin o combines
      exclusively (no other sounds involved) with only four pure consonant
      sounds: b, p, m, and f. In these cases the o does not make the same sound
      as it does when all by itself. In these cases, the o makes a sound which
      starts out sounding like the English word "war" but then changes into an
      "aw" or "uh" sound. This applies to bo, po, mo, and fo. The sound is hard
      to describe, but is not hard to reproduce once you have heard it enough
      times and it becomes familiar. When o combines with u to make ou, the
      sound is similar to the English word "oh." The careful listener, however,
      will detect that the o is actually making an "uh" (schwa) sound, while the
      u is pronounced "oo." The ou sound can stand alone as a syllable, and is
      also commonly paired with initial consonants to make sounds like pou, mou,
      fou, dou, tou, nou, and lou (but there is no *vou sound, and nou is rarely
      used) Finally, o can also combine with the -ng final, making ong. Although
      not a syllable by itself, -ong can combine with d, t, n, and l, giving us
      dong, tong, nong, and long. In the final -ong sound, the o sounds partway
      between an "oh" and "oo" sound
    </p>

    <div class="text-cont">
      <h3 class="title-3">Linguist's Note:</h3>
      <p class="descr-2">
        The following are the IPA symbols for this section's pinyin vowel
        sounds:
      </p>
    </div>
    <div class="rectangle-1">
      <p class="rectangle-1-text">o [o] -o [uɔ] ao [ɑu] -ong [uŋ] ou [ɤʊ]</p>
    </div>
    <div class="text-cont">
      <div class="title-2">Cultural Note:</div>
      <p class="descr-2">
        Some non-standard dialects of Chinese do not distinguish between the n
        and l sounds. Chinese people from those regions (such as Hubei, Hunan,
        Sichuan) may confuse the n and l sounds when they speak Mandarin. If
        you're unaware of this, it can be quite confusing. Some Chinese teachers
        unfamiliar with Westerners will even spend class time teaching Western
        students to differentiate the n and l sounds, unaware that the
        difference is completely obvious to the typical Westerner. Listen to the
        sounds of this section and try repeating them by clicking on the
        syllables below:
      </p>
    </div>
    <AudioComponent />
    <ToggleButtons />
  </div>
</template>

<script>
import ToggleButtons from "../../ToggleButtons.vue";
import PagePhonetics from "../../PhoneticsPageComponent.vue";
import AudioComponent from "../AudioComponents/AudioComponent-2.vue";
export default {
  components: {
    PagePhonetics,
    AudioComponent,
	ToggleButtons
  },
};
</script>
