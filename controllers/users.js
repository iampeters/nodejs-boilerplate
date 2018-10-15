//Body parser
const bodyParser = require('body-parser')
const models = require('../models/users')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = (app) => {
    //post register
	app.post('/register', urlencodedParser, (req, res) => {
		var uname = req.body.username,
			email = req.body.email,
			password = req.body.password

			models.register(uname, email, password, (err) => {
				if (err) {
					console.log('Errors were found');
				} else {
					console.log('Inserted')
				}
			})
		
		// res.render('register-success', {data: req.body})
		res.json(req.body)
    })
    
    // Login
    app.post('/signin', urlencodedParser, (req, res) => {
		var username = req.body.username,
			password = req.body.password;
		
		models.login(username, password, (err, rows, fields) => {
			if (err) {
                console.log('Invalid login credentials');
			} else {
                var u_name = rows[0]
                // console.log(`You are logged in as ${u_name}`)
				// res.render('account', {data: req.body})
				res.json(u_name)
				
				
			}
		});
	})

	//get users
	app.get('/users', (req, res) => {

		models.users((err, rows, fields) => {
			if (err) {
				console.log('Error occurred')
				return;
			}

			res.json(rows)
		})
	})

}