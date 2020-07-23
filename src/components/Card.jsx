import React from "react";
import Emoji from "./Emoji";
import EmojiName from "./EmojiName";
import EmojiMeaning from "./EmojiMeaning";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emoji}></Emoji>
        <EmojiName name={props.name}></EmojiName>
      </dt>

      <EmojiMeaning meaning={props.meaning}></EmojiMeaning>
    </div>
  );
}

export default Card;
