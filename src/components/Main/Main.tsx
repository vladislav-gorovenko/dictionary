import { FcSearch } from "react-icons/fc";

const Main = () => {
  return (
    <main className="main main--error">
      <div className="container container--main container--main--error">
        <div className="main__top main__top--error">
          <FcSearch size="50px" />
          <h1 className="sub-text sub-text--error">Let's start searching...</h1>
        </div>
      </div>
    </main>
  );
};

export default Main;
