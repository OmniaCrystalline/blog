import React, { Suspense } from 'react'
import PostsList from './PostsList'
import Pagination from './Pagination'
import { prisma } from '@/utils/prisma/prisma'
import { cookies } from 'next/headers'

const RecentPosts = async ({parent}) => {
  const readyCookies = await cookies()
  const page1 = readyCookies.get('page')?.value
  const page = Number(page1) > 0 ? Number(page1) : 1
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc', 
    },
    take: 4,
    skip: (page - 1) * 4,
  })
  const num = await prisma.post.count()
  const lastPage = Math.ceil(num / 4)

  return (
    <div className='grid py-5'>
      <span className='text-xl px-5'>Recent posts</span>
      <Suspense fallback={<div>recent posts loading...</div>}>
        <span id='firstPost'></span>
        {posts && <PostsList parent={parent} posts={posts} />}
      </Suspense>
      <Pagination page={page} lastPage={lastPage} />
    </div>
  )
}

export default RecentPosts