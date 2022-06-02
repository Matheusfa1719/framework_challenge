import { Router } from "express";
import decomposerRouter from "../../../modules/decomposer/routes";

const routes = Router();

routes.use("/decomposer", decomposerRouter);

export default routes;
