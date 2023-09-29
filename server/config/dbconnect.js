const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        if (conn.connection.readyState === 1) {
            console.log("DB conection is successfully!");
        } else {
            console.log("DB conecting");
        }
    } catch (error) {
        console.log("Db conection is fail!!!");
        throw new Error(error);
    }
};

module.exports = connectDB;
