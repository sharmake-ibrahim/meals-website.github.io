import { Link } from "react-router-dom";
import likeIcon from "../assets/likeIcon.png";
const Meals = ()=> {
    return(
        <main>
            <div className="meals-container">
            <Link to="/viewmeal">
                <div className="meal">
                    <img src="https://content.api.news/v3/images/bin/2dc7f8ff0978db1caf54772a201b93ca" alt="food" className="meal-img" />
                    <div className="text">
                        <span>Food</span>
                        <img src={likeIcon} alt=" like icon" />
                    </div>
                </div>
                </Link>
               
                <div className="meal">
                    <img src="https://content.api.news/v3/images/bin/2dc7f8ff0978db1caf54772a201b93ca" alt="food" className="meal-img" />
                    <div className="text">
                        <span>Food</span>
                        <img src={likeIcon} alt=" like icon" />
                    </div>
                </div>
                <div className="meal">
                    <img src="https://content.api.news/v3/images/bin/2dc7f8ff0978db1caf54772a201b93ca" alt="food" className="meal-img" />
                    <div className="text">
                        <span>Food</span>
                        <img src={likeIcon} alt=" like icon" />
                    </div>
                </div>
                <div className="meal">
                    <img src="https://content.api.news/v3/images/bin/2dc7f8ff0978db1caf54772a201b93ca" alt="food" className="meal-img" />
                    <div className="text">
                        <span>Food</span>
                        <img src={likeIcon} alt=" like icon" />
                    </div>
                </div>
                            
            </div>
        </main>
    )
}

export default Meals;