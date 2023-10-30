const router = require("express").Router();
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorize,
} = require("./verifyToken");
// const CryptoJS = require("crypto-js");
const Product = require("../Models/Product");
const { find } = require("../Models/User");
//CRATE PRODUCAT
router.post("/add", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (err) {
    res.status.json(err);
  }
});

// UPDATING PRODUCT

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});
// DELETING PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET PRODUCT
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL PRODUCT
router.get("/find", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let product;
    if (qNew) {
      product = await Product.find().lean().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      product = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      product = await Product.find();
    }

    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
