import mongoose from "mongoose";

const realmSchema = mongoose.Schema(
  {
    realmID: {
      type: Number,
      required: true,
      unique: true,
    },
    realmName: {
      type: String,
      required: true,
      unique: true,
    },
    realmSlug: {
      type: String,
      required: true,
      unique: true,
    },
    connectedRealmID: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Realm = mongoose.model("Realm", realmSchema);

export default Realm;
