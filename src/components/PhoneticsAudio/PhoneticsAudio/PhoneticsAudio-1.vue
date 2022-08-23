<template>
  <div>
    <div class="text-cont">
      <h1 class="title-1">Chinese Pronunciation</h1>
      <p class="descr-1">Pinyin Section 1</p>
    </div>
    <PagePhonetics />
    
      <h2 class="title-2">A with Easy Consonants</h2>
      <p class="descr-2">
        The pinyin vowel a has a rather uniform pronunciation in Chinese, very
        similar to the "a" sound in the English "father". (The two exceptions to
        this pronunciation rule are ian and üan, both covered in later
        sections.) The most basic syllable involving the pinyin vowel a is the
        sound alone, pronounced as "ah", as in the sound you make for the doctor
        when he examines your tonsils. The vowel a can also combine with other
        vowels in a single syllable. Basic examples of this include ai and ao.
        Pinyin ai sounds very much like the name of the English letter "I",
        although if you draw out the English letter "I" you will notice an "ee"
        sound at the end. This sound is cut off a bit sooner in Mandarin
        ai.Pinyin ao sounds like the vowel sound in the English "now." Just make
        sure not to drag out the "oo" sound at the end. This way the a sound is
        more dominant than the o sound and more closely resembles Mandarin
        speakers’ pronunciation. Mandarin Chinese does not have many
        syllable-final sounds, but pinyin vowel a can take them all, giving us
        an and ang.The syllable ang sounds very much like the second half of the
        English word "song." The an syllable sounds like the second half of the
        man's name "Don," but not like the woman's name "Dawn." Avoid putting an
        "aw" sound into the syllable, keeping to a pure "ah" sound.
      </p>
    
    <div class="text-cont">
      <h3 class="title-3">Linguist's Note:</h3>
      <p class="descr-2">
        The following are the IPA symbols for this section's pinyin vowel
        sounds:
      </p>
    </div>
    <div class="rectangle-1">
      <p class="rectangle-1-text">a [ɑ] ai [ai] ao [ɑu] an [an] ang [ɑŋ]</p>
    </div>
    <div class="text-cont">
      <p class="descr-2">
        The following pinyin consonants are very similar (if not identical) to
        their English equivalents and should not give you much trouble: b, p, m,
        f, d, t, n, l. The two notable exceptions to this rule are b and d. You
        may find it difficult at first to distinguish between Mandarin's b and p
        sounds as well as its d and t sounds. This is because in English "b" and
        "d" sounds are voiced,meaning that the vocal chords are used when
        producing the sound. This creates a somewhat more forceful consonant
        sound. In Mandarin Chinese, the only difference between the b sound and
        the p sound is that the p sound is aspirated, meaning that a puff of air
        comes from the mouth when pronouncing the p sound. (In English, the "p"
        sound is also aspirated.) This makes the difference between Mandarin b
        and p seem subtler, since aspiration and non-aspiration is the only
        difference, as opposed to aspiration and voicing, as in English. Just
        like b and p, the only difference between Mandarin's d and t sounds is
        that the d sound is not aspirated while the t sound is. Neither
        consonant sound is voiced in Mandarin, while the "d" sound is voiced in
        English. While difficult to distinguish at first, this subtle difference
        will become more and more apparent with prolonged exposure.
      </p>
    </div>
    <div class="text-cont">
      <h4 class="title-5">Linguist's Note:</h4>
      <p class="descr-2">
        The following are the IPA symbols for this section's pinyin vowel
        sounds:
      </p>
    </div>
    <div class="rectangle-2">
      <p class="rectangle-2-text">
        b [p] p [ph] m [m] f [f] d [t] t [th] n [n] l [l]
      </p>
    </div>
    <div class="text-cont">
      <p class="descr-2">
        Listen to the sounds of this section and try repeating them by clicking
        on the syllables below:
      </p>
    </div>
    <AudioComponent />
    <ToggleButtons />
  </div>
</template>

<script>
import ToggleButtons from "../../ToggleButtons.vue";
import PagePhonetics from "../../PhoneticsPageComponent.vue";
import AudioComponent from "../AudioComponents/AudioComponent-1.vue";
export default {
  components: {
    PagePhonetics,
    AudioComponent,
    ToggleButtons,
  },
};
</script>
<style>
</style>
