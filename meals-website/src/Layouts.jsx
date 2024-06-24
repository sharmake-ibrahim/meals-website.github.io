import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Favorite from "./Components/Favorite";
import { UserMeals } from "./App";
import { useContext } from "react";
import { createContext , useState } from "react";
export const MealData = createContext();

function Layouts() {
    const data = useContext(UserMeals);
    console.log("layouts data", data);
    const [value, setValue] = useState([]);

    console.log("Value", value);
     
    return(
        <>
        <Header/>
        <Favorite value= {value}/>
    <MealData.Provider value={data}>
        <Meals setValue= {setValue}/>
    </MealData.Provider>
        <Outlet/>
        </>
    )
}

export default Layouts;