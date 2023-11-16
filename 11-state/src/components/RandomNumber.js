import { useState } from "react";
import generateRandomNum from "../utils/generateRandomNum";

function RandomNumber(props) {
  console.log("rendered");
  const [randomNumber, setRandomNumber] = useState(
    generateRandomNum(props.maxNum)
  );
  const changeRandomNum = () => {
    setRandomNumber(generateRandomNum(props.maxNum));
  };
  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  );
}

export default RandomNumber;
