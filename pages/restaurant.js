import Layout from '../components/layout'
import Location from '../components/location.js'
import Sidebar from '../components/Sidebar.js'
import ProfileCard from '../components/ProfileCard.js'

const items = [{image:'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg', name: 'Cat Hotel', desc: 'this is a cat hotel for cat people', price: "$$$", rating: "4.5", dist: "3km"}];
const res = items[0];

export default () =>
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
