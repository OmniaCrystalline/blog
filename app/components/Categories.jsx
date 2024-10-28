import React, { Suspense } from 'react'
import CategoryButton from './CategoryButton'
import { prisma } from '@/utils/prisma/prisma'

const Categories = async ({ id = 0 }) => {

  const list = await prisma.category.findMany({})

  return (<div className='p-5'>
    <span className='bold text-xl block mb-2'>Popular categories</span>
    <div className='flex gap-5 flex-wrap justify-evenly'>
      <Suspense fallback={<div>loading categories...</div>}>
        {list && <CategoryButton list={list} id={id} />}
      </Suspense>
    </div>
  </div>
  )
}

export default Categories


