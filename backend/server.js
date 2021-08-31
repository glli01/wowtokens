import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import Item from "./models/itemModel.js";
import Names from "./models/namesModel.js";
import Realm from "./models/realmModel.js";
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));
app.use(cors());

app.get(`/api/name/:id`, async (req, res) => {
  console.log(`GET request to /api/name/${req.params.id}`);
  try {
    const startTime = new Date().getTime();
    const item = await Item.find({
      itemID: req.params.id,
    }).limit(1);
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    console.log(responseTime);
    if (item) {
      res.json(item[0].name);
    } else {
      throw new Error("Item not found");
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});

app.post(`/api/name/batch/`, async (req, res) => {
  console.log(`POST request to /api/name/batch`);
  try {
    const startTime = new Date().getTime();
    if (!req.body.ids) throw new Error(" Please include an array of ids");
    const item = await Item.find({
      itemID: {
        $in: [...req.body.ids],
      },
    }).limit(100);
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    console.log(responseTime);
    if (item) {
      res.json(item);
    } else {
      throw new Error("Item not found");
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});

app.post(`/api/item/query`, async (req, res) => {
  console.log(`POST request to /api/name/query`);
  try {
    const startTime = new Date().getTime();
    if (!req.body.queryString) throw new Error(" Please include query string");
    const item = await Item.find({
      name: {
        $regex: req.body.queryString,
        $options: "i",
      },
    }).limit(1000);
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    console.log(responseTime);
    if (item) {
      res.json(item);
    } else {
      throw new Error("Items not found");
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});

app.get(`/api/names`, async (req, res) => {
  console.log(`GET request to /api/names`);
  try {
    const startTime = new Date().getTime();
    const names = await Names.findOne({});
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    console.log(names);
    console.log(responseTime);
    res.json(names);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});

app.get("/api/realms", async (req, res) => {
  console.log(`GET request to /api/realms`);
  try {
    const startTime = new Date().getTime();
    const realms = await Realm.find();
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    console.log(realms);
    console.log(responseTime);
    res.json(realms);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});

app.post("/api/item/update", async (req, res) => {
  console.log("POST to /api/item/update");
  try {
  } catch (error) {}
});
app.listen(PORT, console.log(`Server started on port ${PORT}`));
