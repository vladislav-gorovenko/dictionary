import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";

import "./styles/app-style.scss";

// importing components
import Layout from "./components/Main/Layout";
import Favorite from "./components/Favorite/Favorite";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/words/word" />} />
              <Route path="/words/:word" element={<Favorite />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}

export default App;

// https://api.dictionaryapi.dev/api/v2/entries/en/hello
