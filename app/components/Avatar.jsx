import React from 'react'
import Image from 'next/image'

const Avatar = ({ user, datestring }) => {
  return (<div className='flex gap-2 place-items-center p-2' key={user._id}>
    <Image src={user?.image} alt={user.name} width='24' height='24' className='w-12 h-12 rounded-full' />
    <div className=''><span className=''>{user?.name}</span> <br></br>
      <span>{datestring}</span></div></div>
  )
}

export default Avatar


