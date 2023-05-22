// importing types
import { ReactNode } from "react";

// importing tools/hooks
import { createContext, useState } from "react";

// import assets
import data from "../components/Dummy/ok.json";

// creating interfaces
interface WordContextProps {
  children: ReactNode;
}

interface WordContextType {
  word: Array<{}>;
  findWord: (value: string) => void;
}

// main code

const defaultValue: WordContextType = {
  word: [],
  findWord: () => {},
};

const Context = createContext(defaultValue);

export const WordContextProvider = ({ children }: WordContextProps) => {
  const [word, setWord] = useState(data[0]);

  const findWord = (newWord: string) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`)
      .then((resp) => resp.json())
      .then((info) => setWord(info[0]))
      .catch((_) => setWord([]));
  };

  return (
    <Context.Provider value={{ word, findWord }}>{children}</Context.Provider>
  );
};

export { Context as WordContext };
