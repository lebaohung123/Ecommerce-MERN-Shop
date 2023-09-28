const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8001
// Middlewares

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())



app.get("/", (req, res)=> {
    res.json("Well come to backend Ecommerce mern")
})




app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}`)
})