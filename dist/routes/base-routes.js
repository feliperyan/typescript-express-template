"use strict";
const express_1 = require("express");
const commonRouter = express_1.Router();
commonRouter.get("/", (req, res) => {
    res.render("index");
});
commonRouter.get("/example", (req, res) => {
    res.render("example");
});
module.exports = commonRouter;
//# sourceMappingURL=base-routes.js.map