import Link from 'next/link'

function Sidebar({ user, loading }) {
  return (
    <div className="border rounded w-32 text-center mt-2 p-2 float-left"> 
      <form>
        <select>
          <option>Test</option>
        </select>
      </form>
      <br/>
      <form>
        <select>
          <option>Test</option>
        </select>
      </form>
    </div>
  )
}

export default Sidebar 
