import express from "express";
import homeController from "../controller/homeController"

const router = express.Router();

/** expres app */

const initWebRoutes = (app) => {
    // router.get(path,hander)
    router.get("/",homeController.handleHelloWord);
    router.get("/user",homeController.handleUserPage);

    return app.use("/", router)
}

export default initWebRoutes;