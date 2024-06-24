import { Link } from "react-router-dom";
import likeIcon from "../assets/likeIcon.png";
import { MealData } from "../Layouts";
import { useContext } from "react";

const Meals = ( {setValue})=> {

    const Meals = useContext(MealData);
const handleClick = (meal)=> {
    setValue((prevValue) => [...prevValue, meal]);
}
    return(
        <main>
            <div className="meals-container">

                {Meals.map( (meal)=> {
                    return(
                       
                        <div className="meal">
                             <Link to={`/${meal.idMeal}`} key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt={meal.MealDatastrMeal} className="meal-img" />
                            </Link>
                            <div className="text">
                                <span>{meal.strMeal}</span>
                                <img src={likeIcon} alt=" like icon" onClick={()=> handleClick(meal)}/>
                            </div>
                        </div>
                      
                        // console.log(meal)
                    )
                })}
                            
            </div>
        </main>
    )
}

export default Meals;