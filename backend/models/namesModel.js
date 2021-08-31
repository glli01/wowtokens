import mongoose from "mongoose";

const namesSchema = mongoose.Schema({
  names: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

const Names = mongoose.model("Names", namesSchema);
export default Names;
