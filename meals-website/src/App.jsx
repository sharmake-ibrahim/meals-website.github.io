import React, {useState, useEffect, createContext} from "react";
import Header from "./Components/Header";
import React from "react";
// import Header from "./Components/Header";
import "./Scss/header.scss";
import "./Scss/favorite.scss";
import Meals from "./Components/Meals";
// import Favorite from "./Components/Favorite";
import "./Scss/view-meal.scss";
import "./Scss/meals.scss";


import Layouts from "./Layouts";
import ViewMeal from "./Components/ViewMeal";
import {BrowserRouter, Route, Routes} from "react-router-dom";



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
  
    <BrowserRouter>
      <Routes>
            <Route path="/" element={ <Layouts/>} />
              {/* <Route path="/mealspage" element= {<Meals/>}/> */}
              <Route path="viewmeal" element= {<ViewMeal/>}/>
              <Route path="*" element={ <div> 404 page is not working</div>}/>
  
      </Routes>
    </BrowserRouter>
        // <Header/>
      
        // <Favorite/>
        // <Meals/>
  

  
  )
}

export default App
