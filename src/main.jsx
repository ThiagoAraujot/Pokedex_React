import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import List50Pokemons from "./pages/List50Pokemons/list50Pokemons.jsx";
import { HeavyPokemons } from "./pages/HeavyPokemons/HeavyPokemons.jsx";
import { GrassPokemon } from "./pages/GrassPokemon/GrassPokemon.jsx";
import FlyPokemons from "./pages/FlyPokemons/FlyPokemons.jsx";
import InvertedNames from "./pages/InvertedNames/InvertedNames.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list50pokemons",
    element: <List50Pokemons />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/heavy_pokemon",
    element: <HeavyPokemons />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/grass_pokemon",
    element: <GrassPokemon />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/flying_high_pokemon",
    element: <FlyPokemons />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inverted_names",
    element: <InvertedNames />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
