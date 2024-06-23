import { Link } from "react-router-dom";

const ViewMeal = ()=> {
    return(
        <section>
            <div className="img-container">
                <img src="https://foodtank.com/wp-content/uploads/2017/01/IF-Burger-1-1024x772.jpg" alt="food" />
            </div>

            <div className="details">
                        <div className="txt">
                                <h1>Hamburger</h1>
                                <p> cooking instructions</p>
                        </div>
            

                        <article>
                  
                        <p>A hamburger is often accompanied by side dishes such as French fries, onion rings, coleslaw, or a salad. It is a versatile dish that can be customized to individual tastes and preferences, making it a staple in many cuisines worldwide.</p>
                        <a className="underline" href="https://github.com/sharmake-ibrahim" target="_blank">Original Source</a>
                        <Link  className="close-btn"   to="/">Close</Link>
                    </article>

                 </div>
        </section>
    )
}

export default ViewMeal;