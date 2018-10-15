var conn = require('../database/database')

//user login
var login = (username, password, callback) => {
    var uname = username
    var pass = password

    //sql
    var sql = `select username, password from users where username = "${uname}" and password = "${pass}" `

    conn.query(sql, (err, rows, fields) => {
        callback(err, rows, fields)
    })
}

//register user
var register = (username, email, password, callback) => {
    var uname = username,
        email = email,
        pass = password
        sql = `insert into users values(null, "${uname}", "${email}", "${pass}")`
        chksql = `select username from users where username = "${username}" or email = "${email}"`

        conn.query(sql, (err, result) => {
            callback(err);
        })
}

//get all users
var users = (callback) => {
    sql =  'select username from users'

    conn.query(sql, (err, rows, fields) => {
        callback(err, rows, fields)
        
    })
}


//Exports
module.exports = {
    login: login,
    register: register,
    users: users
}
