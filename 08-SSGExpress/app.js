import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import express from 'express';
import fm from 'front-matter';
import fs from 'fs/promises';
import MarkdownIt from 'markdown-it';
import morgan from 'morgan';
import path from 'path';

const app = express();
const port = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// Generate dynamic routes
const pageDir = path.join(__dirname, 'pages');
const files = await fs.readdir(pageDir);

for (let file of files) {
    const filePath = path.join(pageDir, file);
    const ext = path.extname(filePath);

    console.log(file, filePath, ext);

    if (ext === '.md' || ext === '.html' || ext === '.pug') {
        const name = path.basename(file, ext); // remove extension
        app.get(`/${name}`, async (req, res) => {
            try {
                if (ext === '.md') {
                    let data = await fs.readFile(filePath, 'utf-8');
                    let { body, attributes } = fm(data);
                    // let md = new MarkdownIt();
                    // let html = md.render(body);
                    let html = new MarkdownIt().render(body);
                    res.render('layout-md', { ...attributes, html });
                }

                if (ext === '.html') {
                }

                if (ext === '.pug') {
                    res.render(name, { title: name });
                }
            } catch (err) {
                res.status(404).render('error-404', { title: 'Not Found' });
            }
        });
    }
}

// main page route
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// error 404 route
app.use((req, res, next) => {
    res.status(404).render('error-404', { title: 'Not Found' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
