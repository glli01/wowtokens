import dotenv from "dotenv";
import mongoose from "mongoose";
import Item from "../models/itemModel.js";
import connectDB from "./db.js";
import axios from "axios";
import Names from "../models/namesModel.js";
import Realm from "../models/realmModel.js";

dotenv.config();
connectDB();
const ACCESS_TOKEN = "US6RPVNeUsdX952rQ3Fbz2OKkFrNHyERYb"; // retrieve from database.

importData();
