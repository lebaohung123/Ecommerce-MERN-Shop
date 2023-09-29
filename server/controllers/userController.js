const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const userController = {
    register: asyncHandler(async (req, res) => {
        const { email, password, firstname, lastname, mobile } = req.body;
        if (!email || !password || !firstname || !lastname || !mobile)
            res.status(400).json({ success: false, msg: "Missing inputs" });
        const response = await User.create(req.body);
        return res.status(200).json({
            success: response ? true : false,
            mgs: response,
        });
    }),
};

module.exports = userController;
