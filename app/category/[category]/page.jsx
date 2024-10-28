import React from 'react'
import CategoryContent from '@/app/components/CategoryContent'

const page = ({ params: { category } }) => {
  return (<>
    <h1 className='text-2xl text-indigo-500 text-center pt-4'>{category}</h1>
    <CategoryContent category={category}/>
  </>)
}

export default page


