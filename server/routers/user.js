const router = require("express").Router();
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorize,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const User = require("../Models/User");
// UPDATING USER

router.put("/:id", verifyTokenAndAuthorize, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
// DELETING USER
router.delete("/:id", verifyTokenAndAuthorize, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean();
    const { password, ...others } = user;
    return res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USRES
router.get("/find", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const user = query
      ? await User.find().lean().sort({ _id: -1 }).limit(5)
      : await User.find({}).lean();
    const sanitizedUser = user.map((user) => {
      const { password, ...others } = user;
      return others;
    });
    return res.status(200).json(sanitizedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gt: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {}
});

module.exports = router;
