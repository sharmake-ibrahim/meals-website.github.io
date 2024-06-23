import React, {useState, useEffect, createContext} from "react";
import Header from "./Components/Header";
import "./Scss/header.scss";
import "./Scss/favorite.scss";
import Meals from "./Components/Meals";
import Favorite from "./Components/Favorite";
import "./Scss/meals.scss";



function App() {

  const api = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

  const fetchData = async ()=> {
    try{
      const res = await fetch(api);
      const data = await res.json()
        console.log(data)
    } 
   catch(err) {
    console.log(err.massage);
   }
    
  }


  useEffect( ()=>{
    fetchData()


  },[])



  return (
    <>
    <Header/>
    <Favorite/>
    <Meals/>
    
    </>
  )
}

export default App
