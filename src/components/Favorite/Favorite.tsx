// importing types
import { FC } from "react";

// importing hooks
import { useParams } from "react-router-dom";

// importing assets
import data from "../Dummy/ok.json";

const Favorite: FC = () => {
  const { word } = useParams();

  return (
    <main className="main">
      <div className="container container--main"></div>
    </main>
  );
};

export default Favorite;

// https://api.dictionaryapi.dev/api/v2/entries/en/hello
