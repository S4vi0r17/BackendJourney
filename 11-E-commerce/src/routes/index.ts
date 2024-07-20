import express from 'express';

const router = express.Router();

// router.get('/', (req, res) => {
// 	// req: Lo que enviamos
// 	// res: Lo que Express nos responde
// 	res.render('home', {
// 		title: 'Home',
// 	});
// });

router.get('/home', (req, res) => {
    res.render('home', { title: 'E-commerce', message: 'Bienvenido a nuestro E-commerce' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

router.get('/products', (req, res) => {
    res.render('products', { title: 'Shop' });
});

router.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

export default router;
