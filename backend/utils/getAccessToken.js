import axios from "axios";
import dotenv from "dotenv";
import AccessToken from "../models/accessTokenModel.js";
import FormData from "form-data";
dotenv.config();

const getAccessToken = async () => {
  try {
    const formData = new FormData();
    formData.append("grant_type", "client_credentials");
    const { data } = await axios.post(
      "https://us.battle.net/oauth/token",
      formData,
      {
        auth: {
          username: process.env.B_CLIENT_ID,
          password: process.env.B_CLIENT_SECRET,
        },
        headers: formData.getHeaders(),
      }
    );
    const token = await AccessToken.findOne({});
    token.access_token = data.access_token;
    const newToken = await token.save();
    const time = new Date();
    console.log(`got new token at ` + time);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default getAccessToken;
