import app from './app';
import './db/db';

app.listen(app.get('port'), () => {
	console.log(`server on port http://localhost:${app.get('port')}/`);
});
