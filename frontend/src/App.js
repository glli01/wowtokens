import "./App.css";
import { useState, useEffect } from "react";
import AHData from "./screens/AHData";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calculator from "./screens/Calculator";
import WTNavbar from "./components/WTNavbar";

function App() {
  useEffect(() => {
    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      let vw = window.innerWidth * 0.01;
      console.log("resized");
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty("--vw", `${vw}px`);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  const [realm, setRealm] = useState({
    realmName: "Malygos",
    connectedRealmID: 104,
  });

  return (
    <>
      <Router>
        <div
          className="main"
          style={{ width: "100vw", width: "calc(var(--vw,1vh) * 100)" }}
        >
          <WTNavbar realm={realm} setRealm={setRealm}></WTNavbar>

          <Route path="/" exact>
            <AHData realm={realm} setRealm={setRealm}></AHData>
          </Route>
          <Route path="/test" component={Calculator}></Route>
        </div>
      </Router>
    </>
  );
}

export default App;
