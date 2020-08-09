import Link from 'next/link'

export const ProfileCard = (res) => {
 console.log('profile',res);
  return (
    <Link href={{ pathname: '/restaurant', query: res.res}}>
      <div className='max-w-sm flex bg-white rounded-lg shadow-lg hover:shadow-xl mt-2 lg:mx-4'>
        <div className='flex-shrink-0'>
          <img className='h-32 w-32 rounded-l-lg' src={res.res.image || 'picture.jpeg'} alt='user picture' />
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
            {res.res.distance}
          </div>
          <div hidden>
            {res.location}
            {res.desc}
            {res.url}
            {res.latitude}
            {res.longitude}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProfileCard
