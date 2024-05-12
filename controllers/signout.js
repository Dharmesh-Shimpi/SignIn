export default class controller {
    static get(req, res) {
        res.render('signout', { message: '' });
    }
    static post(req, res) {
        req.headers.authorization = null;
        res.render('signup', { message: '' });
    }
}