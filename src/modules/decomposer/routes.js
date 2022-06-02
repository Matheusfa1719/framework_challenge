import { Router } from "express";
import controller from "./controller";

const decomposerRouter = Router();

decomposerRouter.get("/:id", controller.decomposeNumber);

export default decomposerRouter;