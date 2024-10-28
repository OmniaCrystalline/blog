import Image from 'next/image'
import a from '../images/contact.jpg'

const SinglePost = ({ data }) => {
    const { title, createdAt, desc, img, user } = data
    var datestring = ("0" + createdAt.getDate()).slice(-2) + "-" + ("0" + (createdAt.getMonth() + 1)).slice(-2) + "-" +
        createdAt.getFullYear()

    return (<div className='px-5'>
        <div className='grid gap-5 md:flex'>
            <div className='flex flex-col gap-5'>
                <h1 className='flex-1 text-4xl'>{title}</h1>
                <div className='flex gap-2 place-items-center'>
                    <Image src={user.image} width='24' height='24' className='w-12 h-12 rounded-full' alt={title} />
                    <div className=''><span className=''>{user.name}</span> <br></br>
                        <span>{datestring}</span><br></br>
                        <span>views</span>
                    </div>
                </div>
            </div>
            <div className="md:1/2 md:ml-auto">
                <Image src={img || a} width={500} height={400} alt='' className=' rounded-2xl' />
            </div>
        </div>
        <div className='mt-4' dangerouslySetInnerHTML={{ __html: desc }} />
    </div>)
}

export default SinglePost