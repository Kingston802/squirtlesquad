import react from "react";
import Location from '../components/location'

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
            return (    
                <div>
                    <div id="filter">
                    <select id="cuisine_search" onChange={this.cuiSearch.bind(this)}  >
                        {cuisineItems}
                        </select>
                        <select id="dietary_search" onChange={this.dietSearch.bind(this)}>
                        {dietItems}
                        </select>
                        <select id="price_search" onChange={this.priceSearch.bind(this)}>
                           <option value="$-$$">$-$$</option> 
                           <option value="$$-$$$">$$-$$$</option> 
                           <option value="$$$-$$$$"> $$$-$$$$</option>
                           <option value="$$$$"> $$$$ ></option>
                        </select>
                    </div>
                     {this.state.rest_objects.map((res) => { 
                        
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
                         }
                      
             
                    )}
                   
                </div>
            );
        
      
    }
}
}

export default ShowRestaurant;



