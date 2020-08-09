// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import {useRouter} from 'next/router'

function Profile () {
  const { user, loading } = useFetchUser({ required: false })

  const router = useRouter()
  const res=router.query
  var wallet_limit = 120
  var reduced = 0
  
  if(res.price == "$-$$") {
    reduced = wallet_limit/100 * 10
   
  } else if (res.price == "$$-$$$") {
    reduced = wallet_limit/100 * 30
  } else if(res.price == "$$$-$$$$") {
    reduced = wallet_limit/100 * 50
  } else {
    reduced = wallet_limit/100 * 70
  }

  wallet_limit = wallet_limit - reduced

  if(res.purchased) {
    alert(`Your wallet was reduced by ${reduced}%`);
  }

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</>
        : (
          <>
            <h1 className="text-center">Your Profile</h1>
            <img className="inline-block w-32 rounded-full" src="blank.png"/>
            <div style={{right: `20%`, top: `15%`}} className="absolute">
              <h2>Wallet</h2>
              <div className="border rounded shadow text-center">
                <h3>$ {wallet_limit}</h3>
              </div>
            </div>
            <br/>
            <h1>Alexander Bailey</h1>
            <h2>Address:</h2><p>35 Whitaker Place</p>
            <h2>Phone Number:</h2><p>021 165 9850</p>
            <div style={{right: `20%`, top: `30%`}} className="absolute">
              <h2>Preferences</h2>
              <div className="text-center">
                <select className="w-32">
                  <option>Indian</option>
                  <option>Cuisine</option>
                </select>
              <br/>
                <select className="my-4 w-32">
                  <option>None</option>
                  <option>Diet</option>
                </select>
              <br/>
                <select className="mb-4 w-32">
                  <option>$$</option>
                  <option>Price</option>
                </select>
              </div>
            </div>
          </>)}
    </Layout>
  )
}

export default Profile
