import React, {useState, useEffect, createContext} from "react";
import Header from "./Components/Header";;
import "./Scss/header.scss";
import "./Scss/favorite.scss";
import "./Scss/view-meal.scss";
import "./Scss/meals.scss";
import Layouts from "./Layouts";
import ViewMeal from "./Components/ViewMeal";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const UserMeals = createContext();

function App() {

  const [mealsData, setMealsData] = useState([])
  
console.log("state data", mealsData)




  const fetchData = async ()=> {
              const api = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
              try{
                const res = await fetch(api);
                const data = await res.json()
                  console.log(" Meals data",data.meals);
                  setMealsData(data.meals)
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
            <Route path="/" element={
              <UserMeals.Provider value={mealsData}>
                  <Layouts/>
              </UserMeals.Provider>
               
               } />
            
              <Route path="/:id" element= {
                <UserMeals.Provider value={mealsData}>
                     <ViewMeal/> 
                </UserMeals.Provider>} />
              <Route path="*" element={ <div> 404 page is not working</div>}/>
  
      </Routes>
    </BrowserRouter>
        // <Header/>
      
        // <Favorite/>
        // <Meals/>
  

  
  )
}

export default App
