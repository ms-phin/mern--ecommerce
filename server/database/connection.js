const mongoose = require("mongoose");

const connectBD = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectBD;
