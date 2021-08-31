import React from "react";
import { Navbar, Container, Nav, NavDropdown, Spinner } from "react-bootstrap";
import { useState } from "react";
import DismissableAlert from "./DismissableAlert";
import axios from "axios";

const WTNavbar = ({ realm, setRealm }) => {
  const [realmList, setRealmList] = useState([]);
  const [realmsRetrieved, setRealmsRetrieved] = useState([]);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const loadRealms = async () => {
    try {
      setSearch("");
      setRealmList([...realmsRetrieved]);
      if (realmsRetrieved.length > 0) return;
      const { data } = await axios.get("/api/realms");
      setRealmList(data.sort((a, b) => a.realmName.localeCompare(b.realmName)));
      setRealmsRetrieved(
        data.sort((a, b) => a.realmName.localeCompare(b.realmName))
      );
    } catch (error) {
      console.log(`Error: ${error.message}`);
      setMessage(`Error: ${error.message}`);
      setShowError(true);
      setRealmList([
        { realmName: "Error Retrieving Realm Data", connectedRealmID: 404 },
      ]);
      setRealmsRetrieved([
        { realmName: "Error Retrieving Realm Data", connectedRealmID: 404 },
      ]);
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="w-100">
        <Container fluid className="w-75">
          <Navbar.Brand href="#home">Wowtokens</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Calculator</Nav.Link>
          </Nav>
          <Nav onClick={loadRealms}>
            <NavDropdown
              id="nav-realm"
              title={realm.realmName}
              menuVariant="dark"
            >
              {realmsRetrieved.length > 0 ? (
                <>
                  <input
                    type="text"
                    placeholder="search"
                    value={search}
                    className="rounded w-75 mx-3"
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setRealmList(
                        [...realmsRetrieved].filter((realm) =>
                          realm.realmName.match(
                            new RegExp(`${e.target.value}`, "i")
                          )
                        )
                      );
                    }}
                  ></input>
                  {realmList.map((item) => (
                    <NavDropdown.Item onClick={() => setRealm(item)}>
                      {item.realmName}
                    </NavDropdown.Item>
                  ))}
                </>
              ) : (
                <Spinner animation="border" size="sm"></Spinner>
              )}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <DismissableAlert
        show={showError}
        setShow={setShowError}
        message={message}
        variant={"info"}
        heading="Realm Retrieval Error"
      ></DismissableAlert>
    </>
  );
};

export default WTNavbar;
