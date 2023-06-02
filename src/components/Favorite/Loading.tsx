import { Dna } from "react-loader-spinner";

const Loading = () => {
  return (
    <main className="main main--error">
      <div className="container container--main container--main--error">
        <div className="main__top main__top--error">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperClass="dna-wrapper"
          />
        </div>
      </div>
    </main>
  );
};

export default Loading;
