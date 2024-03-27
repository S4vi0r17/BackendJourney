import express from 'express'

const app = express()

app.get('/hola', (req, res) => {
    res.send('nose')
})

app.listen(3000, () => {
    console.log('runing on port 3000');
})