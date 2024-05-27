import express from "express";
import apiController from "../controller/apiController"
import userController from "../controller/userController"
import groupController from '../controller/groupController';
import dishesController from '../controller/dishesController';
// import homeController from '../controller/homeController';
const router = express.Router();

/** expres app */

const initApiRoutes = (app) => {
    //rest api 
    //GET,POST,PU,DELETE
    router.get('/test-api', apiController.testApi);
    router.post('/register', apiController.handleRegister);
    router.post('/login', apiController.handleLogin);

    router.get('/user/read', userController.readFunc);
    router.post('/user/create', userController.createFunc);
    router.put('/user/update', userController.updateFunc);
    router.delete('/user/delete', userController.deleteFunc);

    router.get('/group/read', groupController.readFunc);

    router.get('/food/read', dishesController.readFuncFood);
    router.post('/food/create', dishesController.createFuncFood);
    // router.post('/food/create', dishesController.upload.single('avatar'), dishesController.createFuncFood);

    // test upload file
    // router.get("/upload", homeController.getUploadFilePage)
    // router.post('/upload-profile-pic', upload.single('profile_pic'), homeController.handleUploadFile)


    return app.use("/api/v1", router)
}

export default initApiRoutes;