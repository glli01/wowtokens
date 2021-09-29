import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  media: {
    type: String,
  },
  crafted_item: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Item",
  },
  reagents: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Item",
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  quantity: {
    type: Number,
    required: true,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
