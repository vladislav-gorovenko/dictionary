import { Word } from "../../contexts/interfaces";
export function findSoundUrl(word: Word) {
  try {
    return word.phonetics.filter((item) => item.audio.includes(".mp3"))[0]
      .audio;
  } catch {
    return null;
  }
}
