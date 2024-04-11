import mysql from 'mysql2';

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sellfood',
});

const handleHelloWord = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = (req, res) => {
    return res.render("user.ejs");
}


const handerCreateUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    Connection.query(
        'INSERT INTO users (email, password, username)VALUES ( ?, ?, ?)', [email, password, username],
        function (err, result, fields) {
            if (err) {
                console.log(err);
            }
        }
    );
    return res.send("handleCreateUser");
}

// const handerCreateUser = (req, res) => {
//     console.log(">> check request<< ", req.body)
//     return res.send("Handle user")
// }

// hàm mode như class có thể khai báo nhiều hàm bên trong để sử dụng
module.exports = {
    handleHelloWord, handleUserPage, handerCreateUser
}