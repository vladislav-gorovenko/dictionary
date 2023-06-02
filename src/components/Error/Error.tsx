import { useRouteError } from "react-router-dom";
import { TbMoodSad2 } from "react-icons/tb";
import "./errorStyle.scss";

const Error = () => {
  const error = useRouteError() as Error;
  let title, text;
  try {
    const data = JSON.parse(error.message);
    title = data.title;
    text = data.text;
  } catch {
    title = "Some error";
    text = "";
  }
  return (
    <main className="main main--error">
      <div className="container container--main container--main--error">
        <div className="main__top main__top--error">
          <TbMoodSad2 size="60px" />
          <h1 className="sub-text sub-text--error">{title}</h1>
          <h1 className="main-text main-text--error">{text}</h1>
        </div>
      </div>
    </main>
  );
};

export default Error;
