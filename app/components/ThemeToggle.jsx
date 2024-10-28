import { cookies } from 'next/headers'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'

const ThemeToggle = async() => {
  const readyCookies = await cookies()
  const current = readyCookies?.get('theme')?.value

  const themeToggle = async () => {
    'use server'
    const readyCookies = await cookies()
    const current = readyCookies?.get('theme')?.value
    const next = current === 'light' ? 'dark' : 'light'
    readyCookies.set('theme', next)
  }

  return (
    <form action={themeToggle}>
    <button className=' bg-inherit p-2 hover:bg-inherit'>{current === 'light' ? <FaRegMoon/> : <FaRegSun/>}<a href='#firstPost'></a></button>
    </form>)
}

export default ThemeToggle