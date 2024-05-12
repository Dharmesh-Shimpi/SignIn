function getGoogleAuth() {
	const googeleAuthURL = 'https://accounts.google.com/o/oauth2/v2/auth';
	const options = {
		redirect_uri: 'http://localhost:5000/oauth',
		client_id:
			'512294437222-jictqq1sf37uhcngoa0n7tt1pqcoolrv.apps.googleusercontent.com',
		access_type: 'offline',
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