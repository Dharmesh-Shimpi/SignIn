import userSchema from '../model/users.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
dotenv.config();

export default class controller {
	static get(req, res) {
		res.render('signin', { message: '' });
	}
	static async post(req, res) {
		const { email, password } = req.body;
		console.log(email, password);
		const user = await userSchema.findOne({ email: email });
		console.log(user);
		if (!user) {
			res.status(404).render('signin', { message: 'User Not Found' });
		} else if (user) {
			if (bcrypt.compareSync(password, user.password)) {
				const payload = {
					email: user.email,
					password: user.password,
				};
				const token = jwt.sign(payload, process.env.JWT, {
					expiresIn: '1h',
				});
				req.headers.authorization = token;
				res
					.status(200)
					.render('signout', { message: 'Successfully Signed In' });
			} else {
				res.status(401).render('signin', { message: 'Wrong Password' });
			}
		}
	}
}
