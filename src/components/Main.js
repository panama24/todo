import React from "react";

import Form from "./Form";
import Items from "./Items";

import "../App.css";

const Main = () => {
  return (
    <div className="Main">
      <div className="wrapper">
        <Form />
        <Items />
      </div>
    </div>
  );
};

export default Main;
