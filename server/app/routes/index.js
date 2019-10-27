const Router = require("koa-router"),
  KoaBody = require("koa-body"),
  { revenue, costs, more, orders } = require("../controllers/index");

const router = new Router();

    router
      .get("/revenue", revenue)
      .get("/costs", costs)
      .get("/more", more)
      .get("/orders", orders);

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
