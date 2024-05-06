import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import conFigCors from "./config/cors";

// thư viện dotenv sử dụng process.env.PORT
require("dotenv").config();
import bodyParser from "body-parser";
import connection from "./config/connectDB";

const app = express();
//cổng mặc định khi quên khai báo file .env
const PORT = process.env.PORT || 8080;

//config cors
conFigCors(app);

//config view engine
configViewEngine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connection
connection();

//init web routes
initWebRoutes(app);

//init api routes
initApiRoutes(app);

app.listen(PORT, () => {
  console.log("Example app listening on port" + PORT);
})