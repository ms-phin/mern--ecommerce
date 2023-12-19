const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const productRouter = require("./routers/Product");
const cartRouter = require("./routers/Cart");
const orderRouter = require("./routers/Order");
const cors = require("cors");

app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is conneceted");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is running");
});
