import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Hello World');
});

// Create a new post
app.post('/posts', async (req, res) => {
    const { title, content } = req.body;
    const result = await prisma.post.create({
        data: {
            title,
            content,
        },
    });
    res.json(result);
});

// Get all posts
app.get('/posts', async (req, res) => {
    const result = await prisma.post.findMany();
    res.json(result);
});

// Update a post
app.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const result = await prisma.post.update({
        where: {
            id: parseInt(id),
        },
        data: {
            title,
            content,
        },
    });
    res.json(result);
});

// Delete a post
app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const result = await prisma.post.delete({
        where: {
            id: parseInt(id),
        },
    });
    res.json(result);
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
