import mongoose, { Mongoose } from "mongoose";

const professionSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skillTiers: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectID,
          ref: "SkillTier",
          required: true,
        },
      ],
    },
  },
  { timestamps: true }
);

const Profession = mongoose.model("Profession", professionSchema);
export default Profession;
