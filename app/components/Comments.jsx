import Avatar from './Avatar'

const datestring = (createdAt) => ("0" + createdAt.getDate()).slice(-2) + "-" + ("0" + (createdAt.getMonth() + 1)).slice(-2) + "-" +
  createdAt.getFullYear()

const Comments = ({ comments }) => {
  return (<div className='grid gap-2'>
    {comments?.map(item => <div key={item.id} className='px-5'>
      <Avatar datestring={datestring(item.createdAt)} user={item.user} />
      <div className='px-2'>{item.desc}</div>
    </div>)}
  </div>
  )
}

export default Comments