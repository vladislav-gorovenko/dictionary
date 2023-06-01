// importing hooks
import { NavLink, useLoaderData } from "react-router-dom";

// importing assets
import newWindowIcon from "../../assets/icon-new-window.svg";
import "./styles/favorite-style.scss";

// importing icons
import { PlayIcon } from "../Icons/Icons";
import axios from "axios";

// importing types
import { Word } from "../../contexts/interfaces";

const Favorite = () => {
  const word = useLoaderData() as Word;
  return (
    <main className="main">
      <div className="container container--main">
        <div className="main__top">
          <div className="main__top--left">
            <h1 className="main__word">{word.word}</h1>
            <p className="main__pronunciation">{word.phonetic}</p>
          </div>
          <PlayIcon />
        </div>
        <div className="main__meanings">
          {word.meanings.map((meaning, index) => {
            return (
              <div key={index} className="main__meaning">
                <div className="main__hr"></div>
                <h4 className="main__part-of-speech">{meaning.partOfSpeech}</h4>
                <h4 className="main__meaning-title sub-text">Meaning</h4>
                <ul className="main__ul">
                  {meaning.definitions.map((definition, innerIndex) => {
                    return (
                      <div key={innerIndex}>
                        <li className="main__li">
                          <p className="main__definition text">
                            {definition.definition}
                          </p>
                        </li>
                        {definition.example && (
                          <p className="main__definition-example text">
                            {definition.example}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </ul>
                <div className="main__synonyms">
                  {meaning.synonyms.length > 0 && (
                    <div>
                      <h4 className="main__synonyms-title sub-text">
                        Synonyms
                        {meaning.synonyms.map((synonym, i) => {
                          return (
                            <NavLink
                              className="main__synonym-link"
                              key={i}
                              to={`/${synonym}`}
                            >
                              {synonym}
                            </NavLink>
                          );
                        })}
                      </h4>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="main__source-container">
          <div className="main__hr"></div>
          <div className="main__source-sub-container">
            <span className="main__source-span">Source: </span>
            <NavLink
              className="main__source-link"
              target="_blank"
              to={word.sourceUrls[0]}
            >
              {word.sourceUrls[0]}
            </NavLink>
            <img className="main__source-img" src={newWindowIcon} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Favorite;

export async function loader({ params }: { params: any }) {
  const { word } = params;
  try {
    const { data } = await axios.get<Word[]>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return data[0];
  } catch (_) {
    const errorObject = {
      title: "No Definitions Found",
      text: "Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.",
    };
    throw Error(JSON.stringify(errorObject));
  }
}

// hello
