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
  console.log(res);

  
  if(res.price == "$-$$") {
    wallet_limit = wallet_limit - (wallet_limit/100 * 10)
   
  } else if (res.price == "$$-$$$") {
    wallet_limit = wallet_limit -  (wallet_limit/100 * 30)
  } else if(res.price == "$$$-$$$$") {
    wallet_limit = wallet_limit - (wallet_limit/100 * 50)
  } else {
    wallet_limit = wallet_limit - (wallet_limit/100 * 60)
  }

  window.alert('Your wallet is now ', wallet_limit)

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</>
        : (
          <>
            <h1 className="text-center">Your Profile</h1>
            <div style={{right: `20%`}} className="absolute">
              <h2>Wallet</h2>
              <div className="border rounded shadow text-center">
                <h3>$ {wallet_limit}</h3>
              </div>
            </div>
            <div className="absolute">
              <h2>Preferences</h2>
              <div className="text-center">
                <select className="w-32">
                  <option>Cuisine</option>
                </select>
              <br/>
                <select className="my-4 w-32">
                  <option>Diet</option>
                </select>
              <br/>
                <select className="mb-4 w-32">
                  <option>Price</option>
                </select>
              </div>
            </div>
          </>)}
    </Layout>
  )
}

export default Profile
