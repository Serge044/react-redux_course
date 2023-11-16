import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <Counter count={count} />
      <Button myOnClick={incrementCount} />
      <Button myOnClick={incrementCount} />
      <Button myOnClick={incrementCount} />
      <Button myOnClick={incrementCount} />
      {count > 0 && (
        <div>
          <button style={{ backgroundColor: "lightred" }} onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
