import React from 'react'
import LoginForm from '../components/LoginForm'
import SocialLogin from '../components/SocialLogin'

const page = () => {
  return (
    <div>
      <SocialLogin />
      <span className='p-5 justify-center flex'>or</span>
      <LoginForm/>
    </div>
  )
}

export default page