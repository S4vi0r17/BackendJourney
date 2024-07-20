import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'E-commerce', message: 'Bienvenido a nuestro E-commerce' });
});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/* 
	import express, { Express, Request, Response } from 'express';
	import path from 'path';
	import { fileURLToPath } from 'url';

	const app: Express = express();
	const __dirname: string = path.dirname(fileURLToPath(import.meta.url));

	let PORT: string | number = process.env.PORT || 3000;
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'pug');

	app.use(express.static('public'));

	app.get('/', (req, res) => {
		res.render('index')
	});

	// Iniciar el servidor
	app.listen(PORT, () => {
		console.log(`Servidor escuchando en el puerto ${PORT}`);
	});
*/
