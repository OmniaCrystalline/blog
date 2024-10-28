'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const NavLinks = () => {
    const [first, setfirst] = useState('login')
    const [user, setuser] = useState('')
    const { data, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'authenticated') {
            setfirst('logout')
            setuser(data.user.name)
            router.push('/')
        
        }
    }, [status, data])
    const path = usePathname()
    return (
        <div className='hidden md:flex rounded flex-1 justify-end gap-5'>
            <span>{ user}</span>
            <Link
                href='/'
                className={path === "/" ? " text-amber-500" : ""}
            >
                home
            </Link>
            {first === 'login' ? <Link
                href='/login'
                className={path === "/login" ? " text-amber-500" : ""}
            >
                login
            </Link> : <button className=' bg-transparent hover:bg-inherit' onClick={()=>signOut()}>logout</button>}
            <Link
                href='/locked'
                className={path === "/locked" ? " text-amber-500" : ""}
            >
                locked page
            </Link>
            <Link
                href='/write'
                className={path === "/write" ? " text-amber-500" : ""}
            >
                write
            </Link>
            
        </div>
    )
}

export default NavLinks