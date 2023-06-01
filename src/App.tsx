import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { FontContextProvider } from "./contexts/FontsContext";

import "./styles/app-style.scss";

// importing components
import Layout from "./components/Main/Layout";
import Favorite, {
  loader as favoriteLoader,
} from "./components/Favorite/Favorite";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path=":word" loader={favoriteLoader} element={<Favorite />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <ThemeContextProvider>
        <FontContextProvider>
          <RouterProvider router={router} />
        </FontContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;

// https://api.dictionaryapi.dev/api/v2/entries/en/hello
