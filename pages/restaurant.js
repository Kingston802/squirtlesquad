import Layout from '../components/layout'
import Location from '../components/location.js'
import Sidebar from '../components/Sidebar.js'
import ProfileCard from '../components/ProfileCard.js'
import {useRouter} from 'next/router'
import Link from 'next/link'
import GoogleMapReact from 'google-maps-react';
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

export default ((props) =>  {
  const router = useRouter()
  const res=router.query
<<<<<<< HEAD
  console.log(res);
  const lat = res.latitude
  const long = res.longitude

  const mapStyles = {
    width: '100%',
    height: '100%'  
  };

 
  console.log('latitude',res.latitude)
=======
  res.purchased = true;
>>>>>>> 1c9c5689050e741f85c0636e4cdc710cc9a612ce

  return (
    
    <Layout>
    <div>
      <h1>{res.name}</h1>
      <img src={res.image || 'picture.jpeg'} width='100%'/>
      <div className="">
        <div className="float-left">
          <h2>Description</h2>
          <p>
            {res.desc || 'Best restaurant in town'}
          </p>
          <br/>
          <h3> Address:</h3>
          <p>
            {res.location || '34 Albert street, Auckland central, Aucland 1041'}
          </p>
          <br/>
          <h4>
           <blue><a href={res.url || 'https://nakhonthai.co.nz/'}> {res.url || 'https://nakhonthai.co.nz/'}</a></blue> 
          </h4>
          <br/>
          <Link href={{ pathname: '/profile', query: res}}>
          
          <button className="rounded p-2 bg-green-400 hover:bg-green-500 absolute" id="btncalculate" > Calculate my Wallet</button>
          
          </Link> 
          <br/>
          <br/>
         
   
        </div>
        <div className="float-right border mt-2 rounded p-2">
          {res.price}
          <br/>
          {res.rating || '3.5*'} 
          <br/>
          {res.dist || '2km'}
          <br/>
         
          <br/>
         
        </div>
       
       
        <img width="100%" src="map.jpeg"/>
      
       </div>
      </div>
      
  </Layout>
    );

})




  
   
  
 

   
    

  

 

  
 

