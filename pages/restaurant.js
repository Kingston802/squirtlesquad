import Layout from '../components/layout'
import Location from '../components/location.js'
import Sidebar from '../components/Sidebar.js'
import ProfileCard from '../components/ProfileCard.js'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { Map, GoogleApiWrapper } from 'google-maps-react';

export default ((props) => {
  const router = useRouter()
  const res=router.query
  console.log(res);



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
   
        </div>
        <div className="float-right border mt-2 rounded p-2">
          {res.price}
          <br/>
          {res.rating || '3.5*'} 
          <br/>
          {res.dist || '2km'}
          <br/>
        </div>
      </div>
      </div>
  </Layout>
    );

})

  
   
  
 

   
    

  

 

  
 

