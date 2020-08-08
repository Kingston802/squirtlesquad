import Layout from '../components/layout'
import Location from '../components/location.js'
import Sidebar from '../components/Sidebar.js'
import ProfileCard from '../components/ProfileCard.js'

const items = [{image:'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg', name: 'Cat Hotel', desc: 'this is a cat hotel for cat people', price: "$$$", rating: "4.5", dist: "3km"}];

export default () =>
  <Layout>
    <div style={{overflow: `hidden`}} className="">
      <Sidebar/>
      <div style={{right: `30%`}}className="absolute lg:flex">
        <ProfileCard res={items[0]}/>
        <ProfileCard res={items[0]}/>
      </div>
    </div>
  </Layout>
