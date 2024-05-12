import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
export default class oAuth {
	static async signup(code) {
		const googeleAuthURL = 'https://oauth2.googleapis.com/token';
		const values = {
			code,
			grant_type: 'authorization_code',
			client_id: '512294437222-jictqq1sf37uhcngoa0n7tt1pqcoolrv.apps.googleusercontent.com',
			client_secret: process.env.CLIENT_SECRET,
			redirect_uri: process.env.REDIRECT_URI,
		};

		try {
			const response = await axios.post(googeleAuthURL, values);
			const { access_token } = response.data;
			// const decodedToken = jwt.decode(access_token);
			// console.log(decodedToken);
			// if (decodedToken.exp < Date.now() / 1000) {
			//   console.log('Access token has expired');
			//   const response = await axios.post(googeleAuthURL, values);
			//   const { refresh_token } = response.data;
			return access_token;
			// } else {
			//   console.log('Access token is still valid');
			// }
		} catch (error) {
			console.log(error);
		}
	}
}
