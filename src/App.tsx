import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { FontContextProvider } from "./contexts/FontsContext";

import "./styles/app-style.scss";

// importing components
import Layout from "./components/Main/Layout";
import Favorite from "./components/Favorite/Favorite";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <FontContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/words/keyboard" />} />
                <Route
                  path="/words"
                  element={<Navigate to="/words/keyboard" />}
                />
                <Route path="/words/:word" element={<Favorite />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </FontContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;

// https://api.dictionaryapi.dev/api/v2/entries/en/hello
