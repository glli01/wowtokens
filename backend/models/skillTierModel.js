import mongoose, { model, Mongoose } from "mongoose";

const skillTierSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  minLvl: {
    type: Number,
    required: true,
  },
  maxLvl: {
    type: Number,
    required: true,
  },
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Recipe",
      required: true,
    },
  ],
});

const SkillTier = mongoose.model("SkillTier", skillTierSchema);

export default SkillTier;
