import React from "react";
import "./App.css";
import FullPageVideoBG from "./components/FullPageVideoBG";
import RegularVideo from "./components/RegularVideo";
const App = () => {
  return (
    <>
      <FullPageVideoBG />
      <div className="pageContent">
        <div className="regular-container">
          <RegularVideo />
        </div>
        <div className="half-container">
          <h2>Bengal's rich theatre culture</h2>
          <div className="content">
            This year, the pandal celebrates Bengal's timeless theatre heritage,
            weaving together the elegance of stagecraft with the vibrancy of
            Durga Puja. Step into a world where drama, emotion, and devotion
            come alive, paying tribute .
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
