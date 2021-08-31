import AHTable from "../components/AHTable";
import WTNavbar from "../components/WTNavbar";
import { useState } from "react";
const AHData = () => {
  const [realm, setRealm] = useState({
    realmName: "Malygos",
    connectedRealmID: 104,
  });
  return (
    <div className="main">
      <WTNavbar realm={realm} setRealm={setRealm}></WTNavbar>
      <AHTable realm={realm} setRealm={setRealm}></AHTable>
    </div>
  );
};

export default AHData;
