import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import PokemonsPage from "./components/PokemonsPage/PokemonsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list50pokemons",
    element: <PokemonsPage endpoint="list_pokemon" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/heavy_pokemon",
    element: <PokemonsPage endpoint="heavy_pokemon" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/grass_pokemon",
    element: <PokemonsPage endpoint="grass_pokemon" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/flying_high_pokemon",
    element: <PokemonsPage endpoint="flying_high_pokemon" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inverted_names",
    element: <PokemonsPage endpoint="inverted_names" />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
