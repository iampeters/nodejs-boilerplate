//Body parser
const bodyParser = require('body-parser')
const models = require('../models/users')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.render('index')
	})
	
	//get register
	app.get('/register', (req, res) => {
		res.render('register')
	})

	app.get('/register-success', (req, res) => {
		res.render('register-success')
	})
	
	
	
	app.get('/profile/:id', (req, res) => {
		res.render('profile', {data: req.params.id})
	})

	//Login
	app.get('/signin', (req, res) => {
		res.render('signin')
	})

	

	
}
