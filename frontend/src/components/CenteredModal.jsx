import React from "react";
import { Modal, Button, Container, Image, Table } from "react-bootstrap";
import {
  translateToGoldSilverCopper,
  translateToTimeLeft,
} from "../scripts/AHscripts";
const CenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading ? props.heading : "Auctions"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container
          fluid
          className="d-flex flex-row justify-content-between w-85 pt-2 px-0"
        >
          <Container className="w-50">
            <Image
              fluid
              src={
                props.item && props.item.imgUrl
                  ? props.item.imgUrl
                  : "https://render.worldofwarcraft.com/us/icons/56/inv_sword_39.jpg"
              }
              style={{ width: "60%" }}
            ></Image>
          </Container>
          <Container className="d-flex flex-column justify-content-evenly w-50 px-0">
            <h4>
              {props.item ? "Name: " + props.item.name : "Name: Unknown Item"}
            </h4>
            <h4>{props.item ? "ID: " + props.item.id : "ID: ???"}</h4>
            <h4 className={props.item.quality + "_MODAL"}>
              {props.item ? "Rarity: " + props.item.quality : "Rarity: ???"}
            </h4>
          </Container>
        </Container>
        <Container
          fluid
          className="d-flex d-row justify-content-center mt-5"
          style={{ maxHeight: "50vh" }}
        >
          <div
            className="custom-scrollbar-css"
            style={{ width: "85%", overflow: "auto" }}
          >
            <Table striped bordered hover variant="dark" className="w-100 mb-0">
              <thead>
                <tr>
                  <th style={{ width: "8%" }}>Qty</th>
                  <th style={{ width: "30%" }}>Price</th>
                  <th style={{ width: "10%" }}>Time Left</th>
                </tr>
              </thead>
              <tbody>
                {props.auctions
                  ? props.auctions.map((auction) => (
                      <tr>
                        <td>{auction.quantity}</td>
                        <td>
                          {translateToGoldSilverCopper(
                            auction.buyout
                              ? auction.buyout
                              : auction.unit_price
                              ? auction.unit_price
                              : auction.bid
                          )}
                        </td>
                        <td>{translateToTimeLeft(auction.time_left)}</td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </Table>
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CenteredModal;
