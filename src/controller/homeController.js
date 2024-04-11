import userService from '../service/userService';

const handleHelloWord = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList });
}


const handerCreateUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;


    // userService.createNewUser(email, password, username);



    return res.send('>> checkUserHash<<');
}

// const handerCreateUser = (req, res) => {
//     console.log(">> check request<< ", req.body)
//     return res.send("Handle user")
// }

// hàm mode như class có thể khai báo nhiều hàm bên trong để sử dụng
module.exports = {
    handleHelloWord, handleUserPage, handerCreateUser
}