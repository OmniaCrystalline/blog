'use client'
import { addComment } from "./actions/actions"
import { createRef } from "react";


const ref = createRef();

const CommentForm = ({ data }) => {

  const formAction = async (formData) => {
    const desc = formData.get('desc')
    if (desc.length < 3) return
    const res = await addComment(desc, data.user.email, data.slug)
    if (res) {
      formData.set('desc', '')
      ref.current.reset()
    }
}
  
  return (
    <div className='w-full grid gap-4 px-5'>
      <form className='flex gap-4' action={formAction} ref={ref} >
        <textarea
          ref={ref}
          name='desc'
          required
          placeholder='write a comment...'
          className='w-full block bg-inherit px-5 py-2 border border-neutral-500 rounded-lg min-h-24'>
          </textarea>
        <button type='submit' className='w-fit h-fit place-self-end px-5 py-2 ml-auto border bg-neutral-500/50 outline-none hover:shadow-md hover:bg-neutral-600/50'>submit</button>
      </form> 
    </div>
  )
}

export default CommentForm