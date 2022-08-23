<template>
  <div>
    <div class="text-cont">
      <h1 class="title-1">Chinese Pronunciation</h1>
      <p class="descr-1">Pinyin Section 5</p>
    </div>
    <PagePhonetics />
    <h2 class="title-2">E with Easy Consonants</h2>
    <p class="descr-2">
      Once again, before you get confused, it's important to know from the start
      that the pinyin e is actually pronounced in several distinct ways,
      depending on what other sounds it is combined with. When e is a syllable
      all by itself, or when e simply combines with an initial consonant, it
      sounds as if you started out with an [ʊ] sound (as in the English word
      "put"), and then ended with sort of an [ʌ] sound (as in the English slang
      word "duh.") This pronunciation applies to the following syllables of this
      section: e, de, te, ne, le.<br> For the -n and -ng final consonants, the
      pronunciation of e stays roughly the same, with just the addition of the
      consonant sounds at the end. That gives you the following syllables: ben,
      beng, pen, peng, men, meng, fen, feng, deng, teng, nen, neng, leng.
      (Notice which possible syllables are not included. Those sounds do not
      exist in Mandarin, except for den, which is quite rare.)<br> The other sound
      that the Mandarin e makes can be heard in ei. Mandarin's ei sounds like
      the "ei" in the English word "vein." This is a common vowel sound you will
      hear in the following syllables: bei, pei, mei, fei, dei, nei, lei.<br>
      Finally, the Mandarin e can make another separate sound in the syllable
      er. The syllable er sounds more or less like the English word "are",
      although the r sound is the Mandarin r we mentioned earlier.
    </p>
    <div class="text-cont">
      <h3 class="title-3">Linguist's Note:</h3>
      <p class="descr-2">
        The following are the IPA symbols for this section's pinyin vowel
        sounds:
      </p>
    </div>
    <div class="rectangle-1">
      <p class="rectangle-1-text">e	[ɤ]
ei	[ei]
en	[ən]
eng	[əŋ]
er	[ɚ] or [er]</p>
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
import AudioComponent from "../AudioComponents/AudioComponent-5.vue";
export default {
  components: {
    PagePhonetics,
    AudioComponent,
    ToggleButtons,
  },
};
</script>
