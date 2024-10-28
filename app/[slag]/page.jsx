import Comments from "../components/Comments"
import CommentForm from "../components/CommentForm"
import SinglePost from "../components/ SinglePost"
import SideMenu from "../components/SideMenu"
import SideMenu2 from "../components/SideMenu2"
import { prisma } from "@/utils/prisma/prisma"
import { addView } from "../components/actions/actions"


const page = async ({ params }) => {
    const { slag } = await params

    const comments = await prisma.comment.findMany({
        where: {
            postSlug: slag
        },
        include: { user: true }
    })
    const data = await prisma.post.findFirst({
        where: {
            slug: slag
        },
        include: { user: true }
    }
    )
    await addView(data.id, data.views)
    return (
        <div className='ml-auto mr-auto'>
            <div className='p-5 grid gap-5' >
                <SinglePost data={data} />
            </div>
            <div className='grid gap-5 lg:grid-cols-[3fr_1fr] p-5'>
                <div className='flex flex-col gap-5'>
                    <CommentForm data={data} />
                    <Comments comments={comments} />
                </div>
                {/*sidebar*/}
                <div>
                    <SideMenu />
                    <SideMenu2 />
                </div>
            </div>
        </div>
    )
}

export default page