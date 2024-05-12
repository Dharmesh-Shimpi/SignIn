import dotenv from 'dotenv';
dotenv.config();
function getGoogleAuth() {
	const googeleAuthURL = 'https://accounts.google.com/o/oauth2/v2/auth';
	const options = {
		redirect_uri: process.env.START_URI,
		client_id: process.env.CLIENT_ID,
		access_type: 'online',
		response_type: 'code',
		prompt: 'consent',
		scope: [
			'https://www.googleapis.com/auth/userinfo.email',
			'https://www.googleapis.com/auth/userinfo.profile',
		].join(' '),
	};
	const qs = new URLSearchParams(options);
	window.location.href = `${googeleAuthURL}?${qs.toString()}`;
}

function signOut() {
	window.location.href = '/';
}