import React from 'react'
import Post from './Post'

const PostsList = ({ posts, parent }) => {   
    return (
        <div className='grid gap-2 py-5'>
            {posts && posts.map(e => <Post key={e.id} post={e} parent={parent} />)}
        </div>
    )
}

export default PostsList