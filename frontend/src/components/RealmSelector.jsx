import axios from "axios";
import { useState, useEffect } from "react";
const RealmSelector = () => {
  const [realmList, setRealmList] = useState([]);
  const updateRealms = async () => {
    console.log();
    setRealmList();
  };
  useEffect(() => {
    updateRealms();
  }, []);
  return (
    <div>{realmList ? realmList.map((realm) => <div>{realm}</div>) : ""}</div>
  );
};

export default RealmSelector;
