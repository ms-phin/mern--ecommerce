const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorize,
} = require("./verifyToken");
const Order = require("../Models/Order");
//CRATE ORDER

router.post("/create", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATING ORDER

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});
// DELETING ORDER
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET ORDER
router.get("/find/:id", verifyTokenAndAuthorize, async (req, res) => {
  try {
    const Order = await Order.findById(req.params.id).lean();
    return res.status(200).json(Order);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL ORDER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const Order = await Order.find();
    res.status(500).json(Order);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previosMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previosMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
