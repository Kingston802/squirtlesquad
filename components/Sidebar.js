import Link from 'next/link'

function Sidebar({ user, loading }) {
  return (
    <div style={{left: `12%`}} className="border rounded w-48 text-center mt-2 p-2 absolute"> 
      <form>
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
      </form>
      <button className="rounded bg-blue-400 text-white hover:bg-blue-500">Use my preferred search</button>
      <p className="my-2">When do you want to eat?</p>
      <input className="my-2 border rounded p-2" type="time"/>
    </div>
  )
}

export default Sidebar 
