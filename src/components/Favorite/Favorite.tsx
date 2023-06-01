// importing hooks
import { NavLink } from "react-router-dom";
import { useContext } from "react";

// importing assets
import newWindowIcon from "../../assets/icon-new-window.svg";
import "./styles/favorite-style.scss";

// importing icons
import { PlayIcon } from "../Icons/Icons";

const Favorite = () => {
  // const [wordInfo, setWordInfo] = useState(() => data[0]);

  return (
    // <main className="main">
    //   {wordInfo ? (
    //     <div className="container container--main">
    //       <div className="main__top">
    //         <div className="main__top--left">
    //           <h1 className="main__word">{wordInfo?.word}</h1>
    //           <p className="main__pronunciation">
    //             {wordInfo.phonetics[0]?.text}
    //           </p>
    //         </div>
    //         <PlayIcon />
    //       </div>
    //       <div className="main__meanings">
    //         {wordInfo.meanings.map((meaning, index) => {
    //           return (
    //             <div key={index} className="main__meaning">
    //               <div className="main__hr"></div>
    //               <h4 className="main__part-of-speech">
    //                 {meaning?.partOfSpeech}
    //               </h4>
    //               <h4 className="main__meaning-title sub-text">Meaning</h4>
    //               <ul className="main__ul">
    //                 {meaning.definitions.map((definition, innerIndex) => {
    //                   return (
    //                     <div>
    //                       <li className="main__li" key={innerIndex}>
    //                         <p className="main__definition text">
    //                           {definition.definition}
    //                         </p>
    //                       </li>
    //                       {definition.example ? (
    //                         <p className="main__definition-example text">
    //                           "{definition.example}"
    //                         </p>
    //                       ) : (
    //                         ""
    //                       )}
    //                     </div>
    //                   );
    //                 })}
    //               </ul>
    //               <div className="main__synonyms">
    //                 {meaning.synonyms.length ? (
    //                   <div>
    //                     <h4 className="main__synonyms-title sub-text">
    //                       Synonyms
    //                       {meaning.synonyms.map((synonym, i) => {
    //                         return (
    //                           <NavLink
    //                             className="main__synonym-link"
    //                             key={i}
    //                             to="/"
    //                           >
    //                             {synonym}
    //                           </NavLink>
    //                         );
    //                       })}
    //                     </h4>
    //                   </div>
    //                 ) : (
    //                   ""
    //                 )}
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //       <div className="main__source-container">
    //         <div className="main__hr"></div>
    //         <div className="main__source-sub-container">
    //           <span className="main__source-span">Source: </span>
    //           <NavLink className="main__source-link" to="/">
    //             {wordInfo.sourceUrls[0]}
    //           </NavLink>
    //           <img className="main__source-img" src={newWindowIcon} />
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     "Such word not found"
    //   )}
    // </main>
    <h1>Hello, world</h1>
  );
};

export default Favorite;

// https://api.dictionaryapi.dev/api/v2/entries/en/hello
