import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import a from '../images/contact.jpg'
import { datestring } from './helpers/functions'


const Post = ({ post, parent }) => {    
    const { id, desc, title, slug, views, createdAt, catSlag } = post
    return (
        <div className='grid md:flex gap-5 flex-row-reverse p-5' key={id + parent}>
            <div className='flex-1 grid gap-2'>
                <div>
                <h1 className='text-xl bold '>{title}</h1>
                    <div className='flex justify-between'><span className='text-sm text-neutral-500'>views: {views}</span><span className='text-sm text-neutral-500'>{datestring(createdAt) }</span></div>
                </div><p className='max-h-36 overflow-clip'>{desc}</p>
                <div className='flex justify-between ml-auto'>
                    <Link className='text-sm text-neutral-500 underline' href={`/${slug}`}>details</Link>
                </div>
                </div>
            <div className='flex-1'>
                <Image src={a} width={500} height={500} alt={title } className=' w-full h-auto' />
            </div>
        </div>
    )
}

export default Post