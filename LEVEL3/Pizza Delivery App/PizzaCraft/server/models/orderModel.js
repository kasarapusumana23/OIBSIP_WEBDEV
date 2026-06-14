import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },

    items: {
      type: Array,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Placed",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model(
  "Order",
  orderSchema
);

export default Order;