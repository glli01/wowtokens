import React from "react";
import {
  Table,
  Button,
  Container,
  Image,
  Spinner,
  Badge,
} from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  findMedian,
  translateToGold,
  translateToSilver,
} from "../scripts/AHscripts";
import coinGold from "../assets/img/coin-gold.png";
import coinSilver from "../assets/img/coin-silver.png";
import DismissableAlert from "./DismissableAlert";
import CenteredModal from "./CenteredModal";

const AHTable = ({ realm, setRealm }) => {
  const increment = 15;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(increment);
  const [auctionHouseNames, setAuctionHouseNames] = useState(new Map());
  const [auctionHouseMap, setAuctionHouseMap] = useState(new Map());
  const [auctionHouseData, setAuctionHouseData] = useState(new Map());
  const [search, setSearch] = useState("");
  const [badges, setBadges] = useState([]);
  const [qAsc, setQAsc] = useState(0);
  const [pAsc, setPAsc] = useState(0);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState("");
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [NLIP, setNLIP] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalAuctions, setModalAuctions] = useState([]);
  const [modalItem, setModalItem] = useState({});
  const [ILIP, setILIP] = useState(false);
  const [auctionNum, setAuctionNum] = useState(0);

  useEffect(() => {
    getAllAuctionHouseData();
    clearSearches();
    setStartIndex(0);
    setEndIndex(increment);
    console.log("start endIndex =" + endIndex);
  }, [realm]);

  useEffect(() => {
    getNames();
  }, [endIndex, auctionHouseMap]);

  const getAllAuctionHouseData = async () => {
    try {
      const { data } = await axios.get(
        `https://us.api.blizzard.com/data/wow/connected-realm/${realm.connectedRealmID}/auctions?namespace=dynamic-us&locale=en_US`
      );
      // console.log(data.auctions);
      setAuctionNum(data.auctions.length);
      mapInfo(data.auctions);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      setMessage(
        `Auction House Data Retrieval Error: ${error.message}.\n If this occurs repeatedly, please contact the service owner.`
      );
      setShowError(true);
    }
  };

  const handleSearch = async (e) => {
    let newMap = [...auctionHouseMap];
    const response = await axios.post("/api/item/query", {
      queryString: search,
      ids: [...auctionHouseMap.keys()],
    });
    console.log(response.data);
    if (response.data.length >= 1000) {
      setMessage(
        `Caution: Your search query may not be specific enough, so the items shown may vary from what is expected.`
      );
      setShowError(true);
    }
    let responseMap = new Map();
    response.data.forEach((entry) => responseMap.set(entry.itemID, 1));
    console.log(responseMap);
    newMap = newMap.filter((map) => responseMap.has(map[1].itemID));
    console.log(newMap);
    newMap = new Map(newMap);
    setBadges([...badges, search]);
    setSearch("");
    setStartIndex(0);
    setEndIndex(increment);
    setAuctionHouseMap(newMap);
  };

  //convert auction house information to a default version of the information that we need.
  //the auction house map should map keys (itemIDs) to: {itemID:, itemName: itemAuctions:[{buyout, quantity},{unit_price,quantity}] totalQuantity:}
  const mapInfo = (data) => {
    const start = new Date().getTime();
    let auctionMap = new Map();
    data.forEach((auction) => {
      if (auction.buyout || auction.unit_price) {
        if (auctionMap.has(auction.item.id)) {
          const old = auctionMap.get(auction.item.id);
          auctionMap.set(auction.item.id, {
            ...old,
            totalQuantity: old.totalQuantity + auction.quantity,
            itemAuctions: [auction, ...old.itemAuctions],
          });
        } else {
          auctionMap.set(auction.item.id, [auction]);
          auctionMap.set(auction.item.id, {
            itemID: auction.item.id,
            itemName: null,
            totalQuantity: auction.quantity,
            itemAuctions: [auction],
          });
        }
      }
    });
    console.log("mapInfo took: " + (new Date().getTime() - start));
    console.log(auctionMap); // to access a slice, turn it into an array: [...auctionMap].slice(0,increment) = array of size 2.
    // the first index of the array is always the key
    // second index is an object that contains: {itemID: ... , itemName: ..., totalQuantity:..., itemAuctions: [{auctions}]}
    setAuctionHouseMap(auctionMap);
    setAuctionHouseData(auctionMap);
  };

  const clearSearches = () => {
    setAuctionHouseMap(new Map(auctionHouseData));
    setBadges([]);
  };

  const sortByQuantityAsc = () => {
    const QUANTITY_ASCENDING = "Quantity (Asc)";
    const QUANTITY_DESCENDING = "Quantity (Dsc)";
    if (!qAsc) {
      console.log("Sorting by Quantity Ascending");
      let newMap = [...auctionHouseMap];
      newMap = newMap.sort((a, b) => {
        return a[1].totalQuantity > b[1].totalQuantity ? 1 : -1;
      });
      setAuctionHouseMap(new Map(newMap));
      setBadges([
        ...badges.filter(
          (string) =>
            string !== QUANTITY_ASCENDING && string !== QUANTITY_DESCENDING
        ),
        "Quantity (Asc)",
      ]);
      setQAsc(1);
    } else {
      console.log("Sorting by Quantity Descending");
      let newMap = [...auctionHouseMap];
      newMap = newMap.sort((a, b) => {
        return a[1].totalQuantity > b[1].totalQuantity ? -1 : 1;
      });
      setAuctionHouseMap(new Map(newMap));
      setBadges([
        ...badges.filter(
          (string) =>
            string !== QUANTITY_ASCENDING && string !== QUANTITY_DESCENDING
        ),
        "Quantity (Dsc)",
      ]);
      setQAsc(0);
    }
    setStartIndex(0);
    setEndIndex(increment);
  };

  const sortByPrice = () => {
    const PRICE_ASC = "Price (Asc)";
    const PRICE_DSC = "Price (Dsc)";
    if (!pAsc) {
      console.log("Sorting by Price Ascending");
      let newMap = [...auctionHouseMap];
      newMap = newMap.sort((a, b) => {
        return Math.min(
          ...a[1].itemAuctions.map((auction) =>
            auction.buyout
              ? auction.buyout
              : auction.unit_price
              ? auction.unit_price
              : auction.bid
          )
        ) >
          Math.min(
            ...b[1].itemAuctions.map((auction) =>
              auction.buyout
                ? auction.buyout
                : auction.unit_price
                ? auction.unit_price
                : auction.bid
            )
          )
          ? 1
          : -1;
      });
      setAuctionHouseMap(new Map(newMap));
      setBadges([
        ...badges.filter(
          (string) => string !== PRICE_ASC && string !== PRICE_DSC
        ),
        PRICE_ASC,
      ]);
      setPAsc(1);
    } else {
      console.log("Sorting by Price Ascending");
      let newMap = [...auctionHouseMap];
      newMap = newMap.sort((a, b) => {
        return Math.min(
          ...a[1].itemAuctions.map((auction) =>
            auction.buyout
              ? auction.buyout
              : auction.unit_price
              ? auction.unit_price
              : auction.bid
          )
        ) >
          Math.min(
            ...b[1].itemAuctions.map((auction) =>
              auction.buyout
                ? auction.buyout
                : auction.unit_price
                ? auction.unit_price
                : auction.bid
            )
          )
          ? -1
          : 1;
      });
      setAuctionHouseMap(new Map(newMap));
      setBadges([
        ...badges.filter(
          (string) => string !== PRICE_ASC && string !== PRICE_DSC
        ),
        PRICE_DSC,
      ]);
      setPAsc(0);
    }
    setStartIndex(0);
    setEndIndex(increment);
  };

  const findAvg = (item, Map) => {
    return [...Map.get(item).itemAuctions].reduce(function (
      avg,
      value,
      _,
      { length }
    ) {
      if (!value) console.log("item: " + item + " index: " + _);
      return (
        avg +
        (value.quantity *
          (value.buyout
            ? value.buyout
            : value.unit_price
            ? value.unit_price
            : value.bid)) /
          Map.get(item).totalQuantity
      );
    },
    0);
  };

  const findMin = (item, map) => {
    return Math.min(
      ...map
        .get(item)
        .itemAuctions.map((auction) =>
          auction.buyout
            ? auction.buyout
            : auction.unit_price
            ? auction.unit_price
            : auction.bid
        )
    );
  };
  const getNames = async () => {
    try {
      if (NLIP) return;
      // console.log("start: " + startIndex + " end: " + endIndex);
      // console.log("get names called");
      for (let i = startIndex; i < endIndex; i++) {
        if (!auctionHouseNames.has([...auctionHouseMap.keys()][i])) break;
        if (i === endIndex - 1)
          return console.log("No new names needed to be found");
      }
      let names = new Map(auctionHouseNames);
      setNLIP(true);
      const { data } = await axios.post("/api/name/batch", {
        ids: [...auctionHouseMap.keys()].slice(startIndex, startIndex + 100), //TODO change endIndex to startIndex + 100
      });
      setNLIP(false);
      data.forEach((item) => {
        if (!names.has(item.itemID)) {
          names.set(item.itemID, {
            name: item.name,
            quality: item.rarity ? item.rarity : "COMMON",
            imgUrl: item.imgUrl ? item.imgUrl : null,
          });
        }
      });
      setAuctionHouseNames(names);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const getImages = async (names) => {
    try {
      if (ILIP) return;
      console.log("getting images");

      setILIP(true);
      let newMap = new Map(names);
      for (let i = startIndex; i < endIndex - 5; i++) {
        const id = [...auctionHouseMap.keys()][i];
        console.log(id);
        if (!id) continue;
        const { data } = await axios.get(
          `https://us.api.blizzard.com/data/wow/media/item/${id}?namespace=static-us&locale=en_US`
        );
        newMap.set(id, {
          ...names.get(id),
          imgUrl: data ? data.assets[0].value : null,
        });
        console.log(data.assets[0].value);
      }
      setAuctionHouseNames(newMap);
      setILIP(false);
    } catch (error) {
      setILIP(false);
      console.log(`Error: ${error.message}`);
    }
  };

  const handleModal = (item) => {
    setModalAuctions([
      ...auctionHouseMap.get(item).itemAuctions.sort((a, b) => {
        let aPrice = a.buyout ? a.buyout : a.unit_price ? a.unit_price : a.bid;

        let bPrice = b.buyout ? b.buyout : b.unit_price ? b.unit_price : b.bid;

        if (aPrice > bPrice) return 1;
        return -1;
      }),
    ]);
    let name = auctionHouseNames.get(item);
    setModalItem({ ...name, id: item });
    setModalShow(true);
    // console.log("item Auctions:");
    // console.log(auctionHouseMap.get(item).itemAuctions);
    // console.log("Item:");
    // console.log(auctionHouseNames.get(item));
  };

  return (
    <>
      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={modalItem}
        auctions={modalAuctions}
      />
      <DismissableAlert
        show={showError}
        setShow={setShowError}
        message={message}
      ></DismissableAlert>
      {true ? (
        <>
          <Container
            fluid
            className="d-flex flex-row justify-content-between w-50 py-3 px-0"
          >
            {startIndex > 0 ? (
              <Button
                variant="dark"
                onClick={() => {
                  setStartIndex(
                    startIndex - increment > 0 ? startIndex - increment : 0
                  );
                  setEndIndex(startIndex > 0 ? endIndex - increment : endIndex);
                }}
              >
                Previous Page
              </Button>
            ) : (
              <Button
                disabled
                variant="dark"
                onClick={() => {
                  setStartIndex(
                    startIndex - increment > 0 ? startIndex - increment : 0
                  );
                  setEndIndex(startIndex > 0 ? endIndex - increment : endIndex);
                }}
              >
                Previous Page
              </Button>
            )}
            <input
              type="text"
              placeholder="search"
              value={search}
              className="w-50 rounded px-3 search-bar"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onSubmit={handleSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            {endIndex <= auctionHouseMap.size ? (
              <Button
                variant="dark"
                disabled={nextDisabled}
                onClick={() => {
                  setStartIndex(startIndex + increment);
                  setEndIndex(endIndex + increment);
                  setNextDisabled(true);
                  setTimeout(() => setNextDisabled(false), 50);
                }}
              >
                Next Page
              </Button>
            ) : (
              <Button
                disabled
                variant="dark"
                onClick={() => {
                  setStartIndex(startIndex + increment);
                  setEndIndex(endIndex + increment);
                  setPrevDisabled(true);
                  setTimeout(() => setPrevDisabled(false), 50);
                }}
              >
                Next Page
              </Button>
            )}
          </Container>
          <Container
            fluid
            className="d-flex flex-row justify-content-center mb-3 w-100 px-0"
          >
            {badges.length > 0 ? (
              <>
                {" "}
                {badges.map((badge) => (
                  <Badge
                    key={badge}
                    pill
                    bg="light"
                    text="dark"
                    className="mx-1"
                  >
                    {badge}
                  </Badge>
                ))}
                <Badge
                  pill
                  bg="info"
                  text="dark"
                  onClick={clearSearches}
                  className="pointer mx-1"
                >
                  Clear
                </Badge>
              </>
            ) : (
              ""
            )}
          </Container>
          <Container
            fluid
            className="d-flex flex-row justify-content-center mb-3 px-0 white-text"
          >
            Items {startIndex} - {endIndex} of {auctionHouseMap.size} in{" "}
            {auctionNum} auctions
          </Container>
          <Container
            fluid
            className="d-flex flex-row justify-content-center px-0"
          >
            <Table striped bordered hover variant="dark" className="table-w-50">
              <thead>
                <tr className="text-end">
                  <th className="text-start">
                    {" "}
                    <span
                      style={{
                        marginLeft: "5vh",
                        marginLeft: "calc(var(--vh, 1vh) * 5)",
                      }}
                    >
                      Item
                    </span>
                  </th>
                  <th
                    style={{ width: "8em" }}
                    className="hover-underline"
                    onClick={sortByPrice}
                  >
                    Low
                  </th>
                  <th
                    style={{ width: "8em" }}
                    className="hover-underline"
                    onClick={sortByPrice}
                  >
                    Median
                  </th>
                  <th
                    style={{ width: "8em" }}
                    className="hover-underline"
                    onClick={sortByPrice}
                  >
                    Average
                  </th>
                  <th
                    style={{ width: "5em" }}
                    className="hover-underline"
                    onClick={sortByQuantityAsc}
                  >
                    Quantity{" "}
                  </th>
                </tr>
              </thead>
              <tbody className="text-end">
                {[...auctionHouseMap.keys()]
                  .slice(startIndex, endIndex)
                  .map((item) => (
                    <tr key={item}>
                      <td
                        onClick={() => handleModal(item)}
                        className="hover-underline text-start p-1 px-0"
                      >
                        <div style={{ minHeight: "33px" }}>
                          <span className="px-2">
                            <Image
                              fluid
                              src={
                                auctionHouseNames.get(item) &&
                                auctionHouseNames.get(item).imgUrl
                                  ? auctionHouseNames.get(item).imgUrl
                                  : "https://render.worldofwarcraft.com/us/icons/56/inv_sword_39.jpg"
                              }
                              className="icn rounded"
                            ></Image>{" "}
                          </span>
                          {auctionHouseNames.get(item) ? (
                            <span
                              className={auctionHouseNames.get(item).quality}
                            >
                              {auctionHouseNames.get(item).name}
                            </span>
                          ) : (
                            <span style={{ minHeight: "25px" }}>
                              <Spinner animation="border" size="sm" />
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-0">
                        <Container className="d-flex px-0 flex-row justify-content-end">
                          <div
                            className="d-flex flex-row justify-content-end"
                            style={{ minWidth: "6em" }}
                          >
                            {translateToGold(findMin(item, auctionHouseMap))}
                            <Image src={coinGold} className="coin"></Image>
                          </div>
                          <div
                            className="d-flex flex-row justify-content-end"
                            style={{ minWidth: "3em" }}
                          >
                            {translateToSilver(findMin(item, auctionHouseMap))}
                            <Image src={coinSilver} className="coin"></Image>
                          </div>
                        </Container>
                      </td>
                      <td className="px-0">
                        <Container className="d-flex flex-row px-0 justify-content-end">
                          <div
                            className="d-flex flex-row justify-content-end"
                            style={{ minWidth: "6em" }}
                          >
                            {translateToGold(
                              findMedian(
                                auctionHouseMap
                                  .get(item)
                                  .itemAuctions.map((auction) =>
                                    auction.buyout
                                      ? auction.buyout
                                      : auction.unit_price
                                      ? auction.unit_price
                                      : auction.bid
                                  )
                              )
                            )}
                            <Image src={coinGold} className="coin"></Image>
                          </div>
                          <div
                            className="d-flex flex-row justify-content-end"
                            style={{ minWidth: "2em" }}
                          >
                            {translateToSilver(
                              findMedian(
                                auctionHouseMap
                                  .get(item)
                                  .itemAuctions.map((auction) =>
                                    auction.buyout
                                      ? auction.buyout
                                      : auction.unit_price
                                      ? auction.unit_price
                                      : auction.bid
                                  )
                              )
                            )}
                          </div>
                          <Image src={coinSilver} className="coin"></Image>
                        </Container>
                      </td>
                      <td
                        className="px-0"
                        onClick={() => {
                          console.log(
                            JSON.stringify(
                              auctionHouseMap
                                .get(item)
                                .itemAuctions.map(function (auction) {
                                  return {
                                    auctionPrice: auction.buyout
                                      ? auction.buyout
                                      : auction.unit_price
                                      ? auction.unit_price
                                      : auction.bid,
                                    auctionQuantity: auction.quantity,
                                  };
                                })
                            )
                          );
                        }}
                      >
                        <Container className="d-flex flex-row p-0 justify-content-end">
                          <div
                            className="d-flex flex-row justify-content-end"
                            style={{ minWidth: "6em" }}
                          >
                            {translateToGold(findAvg(item, auctionHouseMap))}
                            <Image src={coinGold} className="coin"></Image>
                          </div>
                          <div
                            className="d-flex flex-row justify-content-end"
                            style={{ minWidth: "2em" }}
                          >
                            {translateToSilver(findAvg(item, auctionHouseMap))}
                          </div>
                          <Image src={coinSilver} className="coin"></Image>
                        </Container>
                      </td>
                      <td>{auctionHouseMap.get(item).totalQuantity}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
        </>
      ) : (
        <Container
          fluid
          className="d-flex flex-row justify-content-center h-75"
        >
          <Spinner
            animation="border"
            className="m-auto"
            variant="light"
          ></Spinner>
        </Container>
      )}
    </>
  );
};

export default AHTable;
