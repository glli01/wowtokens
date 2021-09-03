import React from "react";
import { Container, Table } from "react-bootstrap";

const Calculator = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-between p-0 white-text w-50"
        style={{ height: "80vh", height: "calc(var(--vh, 1vh) * 80)" }}
      >
        <Container
          fluid
          className="d-flex flex-row justify-content-between p-0"
          style={{ height: "35%" }}
        >
          <Container
            fluid
            className="d-flex flex-column justify-content-between p-0 m-0"
            style={{ height: "100%", width: "25%" }}
          >
            <Container className="p-0" style={{ height: "65%" }}>
              Profession
            </Container>
            <Container className="p-0" style={{ height: "25%" }}>
              decorational banner
            </Container>
          </Container>
          <Container
            fluid
            className="p-0 m-0"
            style={{ height: "100%", width: "70%" }}
          >
            Ingredients Owned
          </Container>
        </Container>
        <Container fluid className="p-0" style={{ height: "60%" }}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Recipe</th>
                <th> Cost</th>
                <th> Price</th>
                <th> Profit</th>
                <th> Profit (Owned)</th>
              </tr>
            </thead>
          </Table>
        </Container>
      </Container>
    </>
  );
};

export default Calculator;
