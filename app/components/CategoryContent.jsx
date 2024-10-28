import { prisma } from "@/utils/prisma/prisma"
import PostsList from "./PostsList"
import Pagination from "./Pagination"

const CategoryContent = async ({ category }) => {
    const posts = await prisma.post.findMany({
        where: {
            catSlag: category
        }
    })
    const lastPage = Math.ceil(posts.length / 3)
    return (<>
        <PostsList posts={posts} parent={'category'} />
        <Pagination lastPage={lastPage} page={1} />
    </>)
}

export default CategoryContent