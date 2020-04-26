import { Router } from "express";

const commonRouter = Router();

commonRouter.get( "/", (req: any, res) => {
    res.render("index");
});

commonRouter.get( "/example", (req: any, res) => {
    res.render("example");
});

export = commonRouter;