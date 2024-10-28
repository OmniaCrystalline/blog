'use client'
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

const BurgerMenu = ({theme}) => {
    const [open, setopen] = useState(false)
    return (<>
        <div className='md:hidden h-full ml-auto'>
            <button className='bg-inherit p-0 hover:bg-slate-500' onClick={() => setopen(!open)}>
                <RxHamburgerMenu className='w-10 h-10 text-inherit' />
            </button>
        </div>
        {open && <MobileMenu setopen={setopen} open={open} theme={theme} />}
    </>
    )
}

export default BurgerMenu

const MobileMenu = ({ setopen, open, theme }) => {
    const toggleColors = theme === 'light' ? 'light' : 'dark'
    return (<div onClick={() => setopen(!open)} className={`w-screen h-screen absolute top-0 left-0 ${toggleColors} grid place-content-center`}>
        <button className='absolute border-none right-5 top-5 bg-transparent p-1 hover:bg-inherit'>X</button>
        <div className='grid gap-5 text-2xl text-center text-inherit bg-inherit'>
            <Link href='/' className='hover:scale-105 transition-all'>home</Link>
            <Link href='/login' className='hover:scale-105 transition-all'>login</Link>
            <Link href='/locked' className='hover:scale-105 transition-all'>locked</Link>
            <Link href='/blog' className='hover:scale-105 transition-all'>blog</Link>
        </div>
    </div>)
}

