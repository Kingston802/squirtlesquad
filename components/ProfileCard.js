import Link from 'next/link'

export const ProfileCard = (res) => {
  return (
    <Link href="/restaurant">
      <div className='max-w-sm flex my-4 bg-white rounded-lg shadow-xl lg:mx-4'>
        <div className='flex-shrink-0'>
          <img className='h-32 w-32 rounded-l-lg' src={res.res.image} alt='user picture' />
        </div>
        <div className='flex-col flex-grow'>
          <div className='ml-6 pt-1 pr-4'>
            <h4 className='text-xl text-gray-900 leading-tight'>{res.res.name}</h4>
          </div>
          <div className='ml-6 mr-4 leading-loose'>
            {res.res.price}
            <br/>
            {res.res.rating}
            <br/>
            {res.res.dist}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProfileCard
