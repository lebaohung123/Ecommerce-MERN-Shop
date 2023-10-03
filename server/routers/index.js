const userRouter = require("./user");
const { notFound, errorHandler } = require("../middleware/errorHandler");

const initalRoutes = app => {
    app.use("/api/user", userRouter);


    app.use(notFound)
    app.use(errorHandler)
};

module.exports = initalRoutes;
