const userRouter = require("./user");

const initalRoutes = app => {
    app.use("/api/user", userRouter);
};

module.exports = initalRoutes;
