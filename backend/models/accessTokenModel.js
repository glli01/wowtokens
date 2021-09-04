import mongoose from "mongoose";

const accessTokenSchema = mongoose.Schema({
  access_token: { type: String, required: true },
  token_type: { type: String, required: true },
});

const AccessToken = mongoose.model("AccessToken", accessTokenSchema);
export default AccessToken;
