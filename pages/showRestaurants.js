import react from "react";
import Location from '../components/location'

class ShowRestaurant extends React.Component {

    constructor(props) {
        super(props);
    
    }

    

    render() {
        if (this.props.rest.length === 0) {
            return (
            <div></div>)
        } 
        else {
            console.log(this.props.rest);
            const cuisineObj = {}
            const dietObj = {}
            this.props.rest.forEach((res) => { 
               
                res.cuisine && res.cuisine.forEach((cui) => {
                    cuisineObj[cui.name] = true
                })
                res.dietary && res.dietary.forEach((diet) => {
                    dietObj[diet.name] = true
                })
                console.log('price', res.price);
            } );
            let cuisines = Object.keys(cuisineObj)
            let cuisineItems = cuisines.map((cui_item)=> <option key={cui_item}> {cui_item}</option>)
            let diets = Object.keys(dietObj)
            let dietItems = diets.map((diet_item) => <option key={diet_item}> {diet_item} </option>)
           
            return (
                <div>
                    <div id="filter">
                        <select id="cuisine_search">
                        {cuisineItems}
                        </select>
                        <select id="dietary_search">
                        {dietItems}
                        </select>
                        <select id="price_search">
                           
                        </select>
                    </div>
                     {this.props.rest.map((res) => {
                        return (
                             <div id="search ">
                               
                           
                                <div id="rest">
                                    <br/>
                                    <img src={res.image}></img>
                             
                                    <h2>{res.name}</h2> 
                                    Distance: {res.distance} 
                                    <br/>
                                    Rating: {res.rating}
                                    <br/>
                                    Price: {res.price}
                                    <br/>
                                  
                                    <hr/>
                                </div>
                                <div id="map"> </div>
                            </div>

                        )
             
                    })}
                   
                </div>
            );
        }
      
    }
}

export default ShowRestaurant;



