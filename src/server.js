import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
// thư viện dotenv sử dụng process.env.PORT
require("dotenv").config();
import bodyParser from "body-parser";

const app = express();
//cổng mặc định khi quên khai báo file .env
const PORT = process.env.PORT || 8080;
//config view engine
configViewEngine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log("Example app listening on port" + PORT);
})