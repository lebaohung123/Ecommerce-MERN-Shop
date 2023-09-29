const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8001;
const dbConnect = require("./config/dbconnect");
const initialRoutes = require("./routers/index");

// Connect DB
dbConnect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


initialRoutes(app);

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}`);
});
