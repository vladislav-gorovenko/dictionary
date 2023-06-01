export interface Word {
  license: {
    name: string;
    url: string;
  };
  meanings: Meanings[];
  phonetic: string;
  phonetics: Phonetic[];
  sourceUrls: string[];
  word: string;
}

interface Meanings {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
}

interface Phonetic {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
}

interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}
