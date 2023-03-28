import React, { useState, useRef } from "react";

import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className="accordion__section" key={props.custId}>
      <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <div className="accordion__title">{props.header}</div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        {props.content}
      </div>
    </div>
  );
}

export default Accordion;
