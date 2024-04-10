const handleHelloWord = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = (req, res) => {
    return res.render("user.ejs");
}

// hàm mode như class có thể khai báo nhiều hàm bên trong để sử dụng
module.exports = {
    handleHelloWord, handleUserPage
}