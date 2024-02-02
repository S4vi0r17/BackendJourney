import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    // Create a new post
    const post = await prisma.post.create({
        data: {
            title: 'Title of the post',
            content: 'This is a post',
        }
    })
    // console.log('Created post:', post)

    // Create multiple posts
    const posts = await prisma.post.createMany({
        data: [
            {
                title: 'Post 1',
                content: 'This is the first post'
            },
            {
                title: 'Post 2',
                content: 'This is the second post'
            },
            {
                title: 'Post 3',
                content: 'This is the third post'
            }
        ]
    })
    // console.log('Created posts:', posts);

    // Show all posts
    const allPosts = await prisma.post.findMany();
    // console.log('All posts:', allPosts)

    // Show one post
    const onePost = await prisma.post.findUnique({
        where: {
            id: 3
        }
    })
    // console.log('One post:', onePost);

    // Update a post
    const updatedPost = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            title: 'Updated title'
        }
    })
    // console.log('Updated post:', updatedPost);

    // Delete a post
    const deletedPost = await prisma.post.delete({
        where: {
            id: 5
        }
    })
    // console.log('Deleted post:', deletedPost);
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })