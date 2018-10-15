const express = require('express')
const routes  = require('./controllers/routes')
const userController  = require('./controllers/users')

var app = express();


//Set the view engine
app.set('view engine', 'ejs')

//Middleware to serve static files
app.use('/assets', express.static('assets'))

//set the headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE")
    res.header('Access-Control-Allow-Headers', "Content-Type")
    next();
})

//Fire controller
routes(app);
userController(app)


app.listen(3000)
console.log('listening to port 3000')