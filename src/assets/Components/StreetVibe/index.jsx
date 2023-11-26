import React from "react";
import Text from "../StreetVibeText/index";
import "../Scss/components/_streetVibe.scss";
function StreetVibe() {
  return (
    <>
      <div className="street_container">
        <div className="text_container">
          <Text />
        </div>
      </div>
    </>
  );
}

export default StreetVibe;
