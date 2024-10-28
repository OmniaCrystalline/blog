'use client'
import React, { useEffect, useState } from 'react'
import { changePage } from '../actions'
import Link from 'next/link'

const Pagination = ({ page, lastPage }) => {

    lastPage = Number(lastPage)
    page = Number(page)

    const [current, setpcurrent] = useState(page)

    useEffect(() => {
        changePage(current)
    }, [current])

    return (
        <div className='flex cont justify-between mt-auto' >
            <Link href='#firstPost' className={`pag-btn rounded ${current === 1 ? 'disabled-link rounded' : ''}`} onClick={() => setpcurrent(current !== 1 ? current - 1 : current )}   >Previous</Link>
            <Link href='#firstPost' className={`pag-btn rounded ${current === lastPage ? 'disabled-link rounded' : ''}`} onClick={() => setpcurrent(current !== lastPage ? current + 1 : current)}  >Next</Link>
        </div>
    
    )
}

export default Pagination