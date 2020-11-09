import React from "react";
import "./App.css";
import Conatct from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <Conatct
        name={"Sherri Jensen"}
        avatar={"https://randomuser.me/api/portraits/women/74.jpg"}
        status={false}
      />
    </div>
  );
}

