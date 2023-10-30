const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorize,
} = require("./verifyToken");
// const CryptoJS = require("crypto-js");
const Cart = require("../Models/Cart");
// const { find } = require("../Models/User");
//CRATE PRODUCAT

router.post("/create", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const saveCart = await newCart.save();
    res.status(200).json(saveCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATING Cart

router.put("/:id", verifyTokenAndAuthorize, async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (error) {
    res.status(500).json(error);
  }
});
// DELETING Cart
router.delete("/:id", verifyTokenAndAuthorize, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET Cart
router.get("/find/:id", verifyTokenAndAuthorize, async (req, res) => {
  try {
    const Cart = await Cart.findById(req.params.id).lean();
    return res.status(200).json(Cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL Cart
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(500).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
