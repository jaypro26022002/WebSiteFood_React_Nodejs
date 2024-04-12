import express from "express";
import homeController from "../controller/homeController"

const router = express.Router();

/** expres app */

const initWebRoutes = (app) => {
    // router.get(path,hander)
    router.get("/", homeController.handleHelloWord);
    //method get lấy data từ server rồi đẩy ra client
    router.get("/user", homeController.handleUserPage);
    //method post 1 gửi data từ client lên server và luôn đi với chức năng tạo mới users..
    router.post("/user-create", homeController.handleCreateUser);
    //method post 2 xóa người dùng 
    router.post("/user-delete/:id", homeController.handleDeleteUser);
    //method update user
    router.get("/user-update/:id", homeController.getUpdateUserPage);
    router.post("/user/user-update", homeController.handleUpdateUser)

    return app.use("/", router)
}

export default initWebRoutes;