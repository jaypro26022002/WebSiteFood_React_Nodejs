import userService from '../service/userService';

const handleHelloWord = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = async (req, res) => {
    //model => get data from database
    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList });
}


const handleCreateUser = (req, res) => {
    // tạo biến let email bên homecontrol để hứng dữ liệu yêu cầu "red.body.email" từ name bên ejs(html)
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.createNewUser(email, password, username);
    // refresh lại page với url "/user"  
    return res.redirect("/user");
}

const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
}

// const handerCreateUser = (req, res) => {
//     console.log(">> check request<< ", req.body)
//     return res.send("Handle user")
// }

const getUpdateUserPage = async (req, res) => {
    //let id hứng data id từ ejs 
    let id = req.params.id;
    //let user hứng id từ database 
    let user = await userService.getUserById(id);
    // tạo userData để chứa tất cả 
    let userData = {};
    userData = user;

    return res.render("update-user.ejs", { userData });

    // console.log(">> check out<< ", userData)
    // return res.send("Handle")
}

const handleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.id;

    await userService.updateUserInfor(email, username, id);

    return res.redirect("/user");
}

// hàm mode như class có thể khai báo nhiều hàm bên trong để sử dụng
module.exports = {
    handleHelloWord, handleUserPage, handleCreateUser, handleDeleteUser, getUpdateUserPage, handleUpdateUser
}