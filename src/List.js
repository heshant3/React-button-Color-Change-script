import React, { useState } from "react";
import "./Navigation.css"; // Import CSS file for Navigation component

const Navigation = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const getButtonStyle = (button) => {
    if (button === activeButton) {
      return "active";
    } else if (activeButton === "Button1" && button === "Button3") {
      return "pink";
    }
    return "";
  };

  return (
    <div>
      <button
        className={`nav-button ${getButtonStyle("Button1")}`}
        onClick={() => handleButtonClick("Button1")}
      >
        Button 1
      </button>
      <button
        className={`nav-button ${getButtonStyle("Button2")}`}
        onClick={() => handleButtonClick("Button2")}
      >
        Button 2
      </button>
      <button
        className={`nav-button ${getButtonStyle("Button3")}`}
        onClick={() => handleButtonClick("Button3")}
      >
        Button 3
      </button>
    </div>
  );
};

export default Navigation;
