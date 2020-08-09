import react from "react";
import Location from '../components/location'
import Layout from '../components/layout'

import ProfileCard from '../components/ProfileCard.js'

class ShowRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            cuisine_search: 'Japanese',
            dietary_search: 'Vegetarian Friendly',
            price_search: '$-$$',
            rest_objects: []
           
        }
        this.filterResultByCuisine = this.filterResultByCuisine.bind(this);
       
    }

    componentDidMount() {
        console.log('renders');
        this.filterResultByCuisine();
    }

    cuiSearch(event) {
        this.setState ({ cuisine_search : event.target.value })
        console.log('cuisne selected', event.target.value);
        this.filterResultByCuisine();
        //console.log('the objects is ', res);
    }
    
    dietSearch(event) {
        this.setState ({ dietary_search: event.target.value })
        console.log('diet selected', event.target.value);
        this.filterResultByCuisine();
    }

    priceSearch(event) {
        this.setState({ price: event.target.value})
        this.filterResultByCuisine();
    }

    filterResultByCuisine() {
        let restlist = []
        let list2 = []
        let result = []
        let list3 = []
        console.log(this.state.cuisine_search);
        this.props.rest.map((res) => {
            res.cuisine && res.cuisine.forEach((cui) => {
                if(cui.name == this.state.cuisine_search) {
                    restlist.push(res)
                }             
            })
            res.dietary && res.dietary.forEach((diet) => {
                if(diet.name == this.state.dietary_search) {
                    list2.push(res)
                   
                }
            })
            
           
         
            if(res.price = this.state.price) {
                list3.push(res)
            }
         

            result = restlist.filter(function(o1) {
                return list2.some(function(o2) {
                     return list3.some(function(o3) {
                        return o1.id === o2.id 
                    })
                })
               })
            
        })
    console.log(result);
        this.setState ({ rest_objects: result })
       
      
        
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
               
            } );
            let cuisines = Object.keys(cuisineObj)
            let cuisineItems = cuisines.map((cui_item)=> <option key={cui_item}> {cui_item}</option>)
            let diets = Object.keys(dietObj)
            let dietItems = diets.map((diet_item) => <option key={diet_item}> {diet_item} </option>)
            let cards = this.state.rest_objects.map((res) => { 
                return <ProfileCard res={{image: res.image, name: res.name, price: res.price, rating: res.rating, distance: res.distance}}/>
            });
            return (    
                <div>
                 
                <div style={{overflow: `hidden`}} className="">
                <div style={{left: `12%`}} className="border rounded w-48 text-center mt-2 p-2 absolute"> 
      <form>
        <select className="w-32" id="cuisine_search" onChange={this.cuiSearch.bind(this)}>
         {cuisineItems}
        </select>
      <br/>
        <select className="my-4 w-32" onChange={this.dietSearch.bind(this)}>
          {dietItems}
        </select>
      <br/>
        <select className="mb-4 w-32" id="price_search" onChange={this.priceSearch.bind(this)}>
           <option value="$-$$">$-$$</option> 
                           <option value="$$-$$$">$$-$$$</option> 
                           <option value="$$$-$$$$"> $$$-$$$$</option>
                           <option value="$$$$"> $$$$ ></option>
        </select>
      </form>
      <button className="rounded bg-blue-400 text-white hover:bg-blue-500">Use my preferred search</button>
      <p className="my-2">When do you want to eat?</p>
      <input className="my-2 border rounded p-2" type="time"/>
    </div>
                                  <div style={{right: `12%`}} className="absolute grid sm:grid-cols-1 sm:right-8 lg:grid-cols-2">
                                   {cards}
                                   
                                  </div>
                                </div>                               
                   
                </div>
            );
        
      
    }
}
}

export default ShowRestaurant;



