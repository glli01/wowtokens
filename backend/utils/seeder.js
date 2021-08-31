import dotenv from "dotenv";
import mongoose from "mongoose";
import Item from "../models/itemModel.js";
import connectDB from "./db.js";
import axios from "axios";
import Names from "../models/namesModel.js";
import Realm from "../models/realmModel.js";

dotenv.config();
connectDB();
const ACCESS_TOKEN = "US6RPVNeUsdX952rQ3Fbz2OKkFrNHyERYb";

// // import realm data
// const importData = async () => {
//   try {
//     //get 1000 items
//     await Realm.deleteMany();
//     const { data } = await axios.get(
//       `https://us.api.blizzard.com/data/wow/search/connected-realm?namespace=dynamic-us&access_token=${ACCESS_TOKEN}`
//     );
//     //response gives you: data.results is an array of all the items which are objects.
//     // data.results = [{id, name.en_US},... {id, name.en_US}]
//     // console.log(data.results);
//     let reformattedData = [...data.results]
//       .filter((val) => !!val)
//       .map((entry) => [
//         ...entry.data.realms.map((realm) => ({
//           realmID: realm.id,
//           realmName: realm.name.en_US,
//           realmSlug: realm.slug,
//           connectedRealmID: entry.data.id,
//         })),
//       ]);
//     let newArray = [];
//     reformattedData.forEach((array) => {
//       return (newArray = [...newArray, ...array]);
//     });
//     reformattedData = newArray;
//     // console.log(reformattedData);
//     reformattedData.forEach((realm) => {
//       if (!realm.realmSlug) console.log(realm);
//     });
//     console.log(reformattedData);
//     console.log("INSERTING: \n==========================");
//     const response = await Realm.insertMany(reformattedData);
//     console.log(response);
//     process.exit();
//   } catch (error) {
//     console.error(`${error}`);
//     process.exit(1);
//   }
// };

// // ITEM IMPORT
// const importData = async () => {
//   try {
//     //get 1000 items
//     await Item.deleteMany();
//     let startID = 1;
//     let idArr = "[" + startID + ",]";
//     while (startID < 250000) {
//       idArr = "[" + startID + ",]";
//       console.log(idArr);
//       const { data } = await axios.get(
//         `https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&orderby=id&_pageSize=1000&id=${idArr}&_page=1&access_token=${ACCESS_TOKEN}`
//       );
//       //response gives you: data.results is an array of all the items which are objects.
//       // data.results = [{id, name.en_US},... {id, name.en_US}]
//       // console.log(data.results);
//       const reformattedData = [...data.results]
//         .filter((val) => !!val)
//         .map((item) => {
//           if (!item.data.quality.type)
//             throw new Error("one quality type not found");
//           return {
//             name: item.data.name.en_US,
//             itemID: item.data.id,
//             rarity: item.data.quality.type,
//           };
//         });
//       // console.log(reformattedData);
//       const returned = await Item.insertMany(reformattedData);
//       console.log(returned);
//       startID = returned[returned.length - 1].itemID + 1;
//       console.log(startID);
//       console.log("Data Imported up until id: " + startID);
//     }
//     process.exit();
//   } catch (error) {
//     console.error(`${error}`);
//     process.exit(1);
//   }
// };

//ALL NAMES IMPORT
// const importData = async () => {
//   try {
//     const access_token = "USf3wFNCD7gZAepW5hQGyiG5YXZWyg4K41";
//     //get 1000 items
//     await Names.deleteMany();
//     let startID = 1;
//     let idArr = "[" + startID + ",]";
//     let reformattedFinal = [];
//     while (startID < 187917) {
//       idArr = "[" + startID + ",]";
//       console.log(idArr);
//       const { data } = await axios.get(
//         `https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&orderby=id&_pageSize=1000&id=${idArr}&_page=1&access_token=${access_token}`
//       );
//       //response gives you: data.results is an array of all the items which are objects.
//       // data.results = [{id, name.en_US},... {id, name.en_US}]
//       // console.log(data.results);
//       const reformattedData = [...data.results]
//         .filter((val) => !!val)
//         .map((item) => ({ name: item.data.name.en_US, id: item.data.id }));
//       // console.log(reformattedData);
//       // const returned = await Item.insertMany(reformattedData);
//       reformattedFinal = [...reformattedData, ...reformattedFinal];
//       console.log(reformattedFinal);
//       startID = reformattedData[reformattedData.length - 1].id + 1;
//       console.log(startID);
//       console.log("Data Imported up until id: " + startID);
//     }
//     const returnedNames = await Names.create({ names: reformattedFinal });
//     console.log(returnedNames.names);
//     process.exit();
//   } catch (error) {
//     console.error(`${error}`);
//     process.exit(1);
//   }
// };

importData();
