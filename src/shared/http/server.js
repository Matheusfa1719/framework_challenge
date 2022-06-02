/* eslint-disable no-unused-vars */
import "express-async-errors";
import express from "express";
import routes from "./routes";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(morgan("dev"));
app.use(routes);

app.use((error, req, res, next) => {
  res.status(500).json({error: true, message: "Erro interno no servidor"});
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API is running on htttp://localhost:${port}/`));

