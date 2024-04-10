import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
// thư viện dotenv sử dụng process.env.PORT
require("dotenv").config();

const app = express();
//cổng mặc định khi quên khai báo file .env
const PORT = process.env.PORT || 8080;
//config view engine
configViewEngine(app);

//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log("Example app listening on port" + PORT);
})