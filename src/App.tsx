import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

// importing components
import Layout from "./components/Layout";
import Favorite from "./components/Favorite/Favorite";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/words/word" />} />
            <Route path="/words/:word" element={<Favorite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// https://api.dictionaryapi.dev/api/v2/entries/en/hello
