import React from "react";
import Clock from "./Clock";

const Heading = () => {
  return (
    <div className="containers">
      <header className="App-header">
        CYF Hotel
        <Clock />
      </header>
      <div className="class-img">
        <img
          src="https://i.pinimg.com/originals/3a/f3/cd/3af3cd437a6c52529c5592cb91602ee8.gif"
          alt=""
          className="App-logo"
        />
      </div>
    </div>
  );
};

export default Heading;
