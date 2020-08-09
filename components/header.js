import Link from 'next/link'

const MenuItem = ({ children, href }) =>
  <Link href={href}>
    <li className='text-white text-2xl inline-block text-center no-underline mx-2 hover:underline'>
      <a className='no-underline hover:underline'>{children}</a>
    </li>
  </Link>

function Header ({ user, loading }) {
  return (
    <header className='bg-green-500'>
      <nav className='container flex items-center justify-between flex-wrap  py-2 '>
        <div id='Brand' className='text-3xl text-white'>
          <Link href='/'>
            Easy Health 
          </Link>
        </div>
        <ul className='flex'>
          {!loading &&
            (user ? (
              <>
                <MenuItem href='/profile'>
                  Profile
                </MenuItem>
                <MenuItem href='/api/logout'>
                  Logout 
                </MenuItem>
              </>
            ) : (
              <MenuItem href='/api/login'>
                Login
              </MenuItem>
            ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
