const mongoose = require("mongoose");
const item_list = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    cartItems: [],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", item_list);
