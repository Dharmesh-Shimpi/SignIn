import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default class middleware {
	static async auth(req, res, next) {
		const authHeader = req.headers['authorization'];
		if (authHeader == null) return res.sendStatus(401);
		jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
			if (err) return res.sendStatus(403);
			req.user = user;
			console.log(req.user);
			req.headers.authorization = authHeader;
			next();
		});
	}
}
