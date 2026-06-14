import express from "express";
import Order from "../models/orderModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { user, items, totalPrice } =
      req.body;

    const order = new Order({
      user,
      items,
      totalPrice,
    });

    const createdOrder =
      await order.save();

    res.status(201).json(
      createdOrder
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;