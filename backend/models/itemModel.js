import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    itemID: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    rarity: { type: String, required: true },
    imgUrl: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
export default Item;
