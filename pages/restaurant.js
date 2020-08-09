import Layout from '../components/layout'
import Location from '../components/location.js'
import Sidebar from '../components/Sidebar.js'
import ProfileCard from '../components/ProfileCard.js'

export default (res) =>
  <Layout>
    <div>
      <h1>{res.name}</h1>
      <img src={res.image}/>
      <div className="">
        <div className="float-left">
          <h2>Description</h2>
          <p>
            {res.desc}
          </p>
        </div>
        <div className="float-right border mt-2 rounded p-2">
          {res.price}
          <br/>
          {res.rating}
          <br/>
          {res.dist}
          <br/>
        </div>
      </div>
    </div>
  </Layout>
