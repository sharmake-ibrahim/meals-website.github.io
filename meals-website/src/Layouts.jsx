import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Favorite from "./Components/Favorite";

function Layouts() {
    return(
        <>
        <Header/>
        <Favorite/>
        <Meals/>
        </>
    )
}

export default Layouts;