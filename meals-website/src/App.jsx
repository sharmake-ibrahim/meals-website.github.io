import React from "react";
import Header from "./Components/Header";
import "./Scss/header.scss";
import "./Scss/favorite.scss";
import Meals from "./Components/Meals";
import Favorite from "./Components/Favorite";
import "./Scss/meals.scss";

function App() {

  return (
    <>
    <Header/>
    <Favorite/>
    <Meals/>
    
    </>
  )
}

export default App
