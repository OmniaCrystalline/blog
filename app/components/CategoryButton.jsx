'use client'
import Link from "next/link"

const Buttons = () => {
    return (<>
        <button className="bg-teal-500/50" type="button"></button>
        <button className="bg-lime-500/50" type="button"></button>
        <button className="bg-green-500/50" type="button"></button>
        <button className="bg-orange-500/50" type="button"></button>
        <button className="bg-indigo-500/50" type="button"></button>
        <button className="bg-amber-500/50" type="button"></button>
    </>)
}

const CategoryButton = ({ list, id }) => {
    return (<div className='w-full flex justify-between flex-wrap gap-5 py-2'>
        {list.map((e) => {
            const style = `py-2 text-center rounded px-5 flex-grow`
            return <Link href={`/category/${e.title}`} key={e.id + id} className={`px-5 py-2 text-center ${e.color} flex-grow  rounded`}>{e.title}</Link>
        })}
    </div>)
}

export default CategoryButton