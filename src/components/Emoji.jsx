import React from "react";

function Emoji(props) {
  return (
    // <span className="emoji" role="img" aria-label="Tense Biceps">
    <span className="emoji" role="img">
      {props.emoji}
    </span>
  );
}

export default Emoji;
