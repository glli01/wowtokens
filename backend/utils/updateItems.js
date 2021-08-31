import dotenv from "dotenv";
import mongoose from "mongoose";
import Item from "../models/itemModel.js";
import connectDB from "./db.js";
import axios from "axios";
import Names from "../models/namesModel.js";
import Realm from "../models/realmModel.js";

dotenv.config();
const ACCESS_TOKEN = "USlUrTvFZyuhoutdrEd7B0di5rqcqM2vKX";
// ITEM UPDATE
const updateData = async () => {
  await connectDB();
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  try {
    //get 1000 items
    //get 100 items
    const items = await Item.find({ imgUrl: { $exists: false } });

    while (items.length > 0) {
      let count = 0;
      while (items.length > 0 && count < 340) {
        try {
          count++;
          let promiseArray = [];
          let dataArray = [];
          for (let i = 0; i < 90; i++) {
            if (items.length == 0) break;
            let currentDoc = items.shift();
            console.log(
              "Working!! ID: " + currentDoc.itemID + " Name: " + currentDoc.name
            );

            const dataPromise = axios.get(
              `https://us.api.blizzard.com/data/wow/media/item/${currentDoc.itemID}?namespace=static-us&locale=en_US&access_token=${ACCESS_TOKEN}`
            );
            dataArray.push(dataPromise);
            // currentDoc.imgUrl = data.assets[0].value;
            // const promise = currentDoc.save();
            // promiseArray.push(promise);
          }
          console.log("resolving promises");
          const responses = await Promise.all(dataArray);
          const data = responses.map((response) => ({
            imgUrl:
              response.data && response.data.assets
                ? response.data.assets[0].value
                : null,
            id: response.data.id,
          }));
          console.log(data);
          //updateAll
          for (let i = 0; i < data.length; i++) {
            const current = data[i];
            if (current.imgUrl) {
              const promise = Item.updateOne(
                { itemID: current.id },
                {
                  $set: { imgUrl: current.imgUrl },
                }
              );
              promiseArray.push(promise);
            }
          }
          console.log("Awaiting promiseArray");
          console.log(await Promise.all(promiseArray));
          console.log("waiting for 1s");
          await timer(1000);
        } catch (error) {
          console.log(`Error: ${error.message}`);
          continue;
        }
      }
      console.log("waiting for 1hr");
      await timer(3600000);
    }

    //get all data and resolve,
    // use update function to update all 100
    console.log("Done");
    process.exit(1);
  } catch (error) {
    console.error(`${error}`);
  }
};

updateData();
