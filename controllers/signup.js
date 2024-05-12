import userSchema from '../model/users.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

export default class controller {
	static get(req, res) {
		res.render('signup', { message: '' });
	}

	static async post(req, res) {
		const { email, password } = req.body;
		if (!password) {
			return res
				.status(400)
				.render('signup', { message: 'Password is required' });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		console.log(hashedPassword);
		const user = await userSchema.findOne({ email });
		if (user) {
			res.status(409).render('signup', { message: 'User Already Exists' });
		} else {
			const newUser = new userSchema({
				email: email,
				password: hashedPassword,
			});
			await newUser.save();
			res.status(201).render('signin', { message: 'Successfully Registered' });
		}
	}
}
