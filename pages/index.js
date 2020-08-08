import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'
import Link from 'next/link'
import Location from '../components/location'

const LinkA = ({ children, href }) =>
  <Link href={href}>
    <a className='pl-4 block pr-4 underline hover:text-white'>{children}</a>
  </Link>



function Home () {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: false })

  const logEvent = async (type, value) => {
    const event = {
      name: user.nickname,
      type: type,
      value: value
      // date: added server side so we can't lie
    }
    await fetch(`${config.HOST}/api/events`, {
      method: 'post',
      body: JSON.stringify(event)
    })

    // TODO handle error if event cannot be posted.
    // TODO display feedback if event is ok
  }

  const handleClick = (e) => {
    // console.log(e.target)
    logEvent('click', 1)
  }
  return (
    <Layout user={user} loading={loading}>

      <h1>Page heading</h1>
      <br/>
     <Location />
      <p>Interesting content here</p>

      {loading && <p>Loading login info...</p>}
      {!loading && !user && (
        <>
          <br/>
          <h1 style={{transform: `translateX(-50%) translateY(-150%)`, top: `50%`, left: `50%`}} className="absolute text-white font-bold shadow-xl">We provide your daily meal solution </h1>
          <img className="rounded shadow-xl" src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2280&q=80"/>

          <h1 className="text-center">Who are we?</h1>
          <p className="mb-3">
             Easy Health is a web based application developed by Squirtle Squad (at the 2020 WDCC Hackathon) to provide dietary advice for students. We help students develop a healthy life style based on their eating habits, preferences and budget. We understand everyone's diet plan is unique and easy to change. That's why we are here to not only help you to save money with every meal, but also give appropriate dietary advice according to your needs. We are committed to build a healthy life for all the students.
          </p>
          <div className="text-center">
            <Link href="/api/login">
              <button onClick="" className="bg-green-500 p-4 text-white rounded">Join Us</button>
            </Link>
          </div>

          <br/>
        </>
      )}
      {user && (
        <>
        </>)}
    </Layout>
  )
}

export default Home
