const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const Jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  console.log(req.body);
  const newuser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  console.log(newuser);
  try {
    const user = await newuser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).lean();

    if (!user) {
      return res.status(401).json("Wrong credentials");
    }

    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    ).toString(CryptoJS.enc.Utf8);

    if (req.body.password !== decryptedPassword) {
      return res.status(401).json("Wrong credentttials");
    }
    const accessToken = Jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user;
    return res.status(200).json({ ...others, accessToken });
  } catch (error) {
    console.log("Something went wrong:", error);
    res.status(500).json("Internal Server Error");
  }
});

module.exports = router;
