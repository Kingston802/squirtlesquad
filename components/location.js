import React, {Component} from "react";
import ShowRestaurant from '../pages/showRestaurants';

class Location extends Component {
    constructor(props) {
      super(props);
      this.state = {
       rests : []

      };
      this.getRest = this.getRest.bind(this);
      this.setRest = this.setRest.bind(this);
    }

    componentDidMount() {
      if("geolocation" in navigator) {
        this.getRest();
      }
      else {
        console.log("Not available");
      }
     //this.getLocation();
     
    }
  
    async setRest(currentLocation) {
     
      console.log(currentLocation);
      await fetch('https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?distance=2&is_closed=false&latitude=' + currentLocation.lat + '&longitude=' + currentLocation.lng,{
        method: "GET",
        headers: {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": "1675195e27msh90ac8fbce74dfa8p19c5f6jsnba2c0d50c801"
        }
        })
        .then(res =>   res.json())
        .then((data) => {
          console.log(data);
         
          this.setState ({
           rests: data.data.map((item) => ({
            name: item.name,
            location: item.address_obj,
            image: item.photo && item.photo.images.thumbnail.url,
            distance: item.distance_string,
            rating: item.rating,
            price: item.price_level,
            cuisine: item.cuisine,
            dietary: item.dietary_restrictions,
            desc: item.description,
            url: item.web_url,
            latitude: item.latitude,
            longitude: item.longitude
          }))

         
        });
        
        });
     
     
    }

    getRest() {
      let self = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        let updatedLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        self.setRest(updatedLocation);
       
      })
    }

    render() {
      //this.state.rests.map((rest) => console.log(rest.name));
      console.log(this.state.rests);
      return (
        <div>
         <ShowRestaurant rest={this.state.rests} />
          
        </div>
      );
    }
}
  

export default Location