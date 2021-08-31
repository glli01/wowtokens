import axios from "axios";
import { Image } from "react-bootstrap";
export const getImage = async (id, access_token) => {
  const { data } = await axios.get(
    `https://us.api.blizzard.com/data/wow/media/item/${id}?namespace=static-us&locale=en_US&access_token=${access_token}
    `
  );
  return <Image src={data ? data.assets[0].value : ""} fluid></Image>;
};
export const getName = async (id, access_token) => {
  const { data } = await axios.get(
    `https://us.api.blizzard.com/data/wow/item/${id}?namespace=static-us&locale=en_US&access_token=${access_token}`
  );
  return data.name ? data.name : "";
};

export const translateToGoldSilverCopper = (num) => {
  return (Math.floor(num / 100) / 100).toFixed(2) + "g ";
};

export const translateToGold = (num) => {
  return Math.floor(num / 10000);
};

export const translateToSilver = (num) => {
  return Math.floor((num % 10000) / 100);
};

export const translateToTimeLeft = (string) => {
  const SHORT = "SHORT";
  const MEDIUM = "MEDIUM";
  const LONG = "LONG";
  const VERY_LONG = "VERY_LONG";
  switch (string) {
    case SHORT:
      return "< 30m";
    case MEDIUM:
      return "30m - 2h";
    case LONG:
      return "2h - 12h";
    case VERY_LONG:
      return "12h - 48h";
    default:
      return "???";
  }
};

export const findMedian = (arr) => {
  arr = arr.filter((val) => !!val);
  let len = arr.length;
  let arrSort = arr.sort();
  let mid = Math.ceil(len / 2);

  return len % 2 === 0
    ? (arrSort[mid] + arrSort[mid - 1]) / 2
    : arrSort[mid - 1];
};
