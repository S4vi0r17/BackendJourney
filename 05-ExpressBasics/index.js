import Express from 'express';
import { resolve } from 'path';

const app = new Express();

app.get('/', (req, res) => {
    // res.send("Hello World");
    // console.log('---- Request ----');
    // console.log(req);
    // // console.log('---- Response ----');
    // // console.log(res);
    res.sendFile(resolve('index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
