//Body parser
const bodyParser = require('body-parser')
const models = require('../models/users')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.render('index')
	})

}
