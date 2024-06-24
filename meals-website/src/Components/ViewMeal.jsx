import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserMeals } from "../App";
const ViewMeal = ()=> {
    const MealDetail = useContext(UserMeals)
            // console.log(MealDetail);
    const parms = useParams();
    console.log(parms);
        const MealInfo = MealDetail.find( (item)=> item.idMeal === parms.id);
        console.log("Meal info from find method", MealInfo)
        
        const {idMeal, strInstructions, strMealThumb, strMeal, strSource} = MealInfo;

    return(
        <section>
            <div className="img-container" key={idMeal}>
                <img src={strMealThumb} alt= {strMeal} />
            </div>

            <div className="details">
                        <div className="txt">
                                <h1>{strMeal}</h1>
                                <p> cooking instructions</p>
                        </div>
            

                        <article>
                  
                        <p> {strInstructions}</p>
                        <a className="underline" href={strSource} target="_blank">Original Source</a>
                        <Link  className="close-btn"   to="/">Close</Link>
                    </article>

                 </div>
        </section>
    )
}

export default ViewMeal;