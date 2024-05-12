import oAuth from '../middlewares/oAuth.js';
export default class oAuthController {
	static async signup(req, res) {
		const code = req.query.code;
		const token = await oAuth.signup(code);
        console.log(token);
		req.headers.authorization = token;
		res.status(200).render('signout', {message: 'Successfully Signed In'});
	}
}
