import { useState } from "react";


// setTasks(tasks.filter((_, i) => i !== index));

const Favorite = ({value})=> {
    const [favoMeal, setFavoMeal] = useState(value);

   
    
    return(
        <section className="favorities">
            <p> Favorites</p>
            <div className="grid">
                {favoMeal.map( (item, index)=> {
                    return( 
                        <div className="item" key={index}>
                        <img src={item.strMealThumb} alt={item.strMeal} />
                        <span onClick={()=> handleDelete(index)}>remove</span>
                    </div>
                    )
                })}
               
                {/* <div className="item">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545" alt="food" />
                    <span>remove</span>
                </div>
                <div className="item">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545" alt="food" />
                    <span>remove</span>
                </div>
                <div className="item">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545" alt="food" />
                    <span>remove</span>
                </div>
                <div className="item">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545" alt="food" />
                    <span>remove</span>
                </div>
                <div className="item">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545" alt="food" />
                    <span>remove</span>
                </div>
                <div className="item">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545" alt="food" />
                    <span>remove</span>
                </div>
                <div className="item">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545" alt="food" />
                    <span>remove</span>
                </div> */}

            </div>
        </section>
    )
}

export default Favorite;