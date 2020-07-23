import React from "react";
import "./App.css";
import { emojipedia } from "./emojipedia";
import { emojiList } from "./emojis";
import Card from "./components/Card";

var counter = 0;

function getEmojiData(emojiList) {
  console.log(emojipedia.emoji);
  counter += 1;
  return (
    <Card
      key={counter}
      emoji={emojiList.emoji}
      name={emojiList.description}
      // meaning="meaning goes in here"
    ></Card>
  );
}

// function getEmojiData(emojipedia) {
//   console.log(emojipedia.emoji);
//   counter+=1;
//   return (
//     <Card
//       key={counter}
//       emoji={emojipedia.emoji}
//       name={emojipedia.name}
//       meaning={emojipedia.meaning}
//     ></Card>
//   );
// }
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojiList.map(getEmojiData)}</dl>
    </div>
  );
}

export default App;
