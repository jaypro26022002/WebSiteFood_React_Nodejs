import express from "express";
import homeController from "../controller/homeController"

const router = express.Router();

/** expres app */

const initWebRoutes = (app) => {
    // router.get(path,hander)
    router.get("/", homeController.handleHelloWord);
    //method get lấy data từ server rồi đẩy ra client
    router.get("/user", homeController.handleUserPage);
    //method post gửi data từ client lên server và luôn đi với chức năng tạo mới users..
    router.post("/user-create", homeController.handerCreateUser);

    return app.use("/", router)
}

export default initWebRoutes;