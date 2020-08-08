import React, {Component} from "react";

class Location extends Component {
    constructor(props) {
      super(props);
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
      await fetch('https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?latitude=' + currentLocation.lat + '&longitude=' + currentLocation.lng,{
        method: "GET",
        headers: {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": "1675195e27msh90ac8fbce74dfa8p19c5f6jsnba2c0d50c801"
        }
        }).then(res => console.log(res.data));
     
      // await fetch('https://developers.zomato.com/api/v2.1/geocode',{
      //   method: "GET",
      //   headers: 
      //   {
      //     'user-key': 'b16dc15ed311e53c5d1f27d10a7884be', 
      //     'lat':currentLocation.lat,
      //     'lon': currentLocation.lng,
      //     // "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   }
      // }).then(res => console.log('response is', res));

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
      
      return (
        <div>
          <h4>Using geolocation JavaScript API in React</h4>
          
        </div>
      );
    }
}
  

export default Location