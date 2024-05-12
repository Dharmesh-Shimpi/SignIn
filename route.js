import app from './index.js';
import signin from './controllers/signin.js';
import signup from './controllers/signup.js';
import signout from './controllers/signout.js';
import oAuth from './controllers/oauth.js'; 
import auth from './middlewares/auth.js';

app.get('/', (req, res) => {
	signup.get(req, res);
});
app.post('/', (req, res) => {
	signup.post(req, res);
});
app.get('/signin', signin.get);
app.post('/signin', signin.post);
app.get('/oauth', oAuth.signup );
app.post('/oauth', oAuth.signup );
app.get('/signout', auth.auth, signout.get);
app.post('/signout', auth.auth, signout.post);

export default app;