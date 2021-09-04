import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

(async () => {
  const getAccessToken = async () => {
    try {
      const { data } = await axios.get("/api/accessToken");
      console.log(data);
      return data.access_token;
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  const token = await getAccessToken();

  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
})();

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
