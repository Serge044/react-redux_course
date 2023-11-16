import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      <Button myOnClick={incrementCount} />
      <Button myOnClick={incrementCount} />
      <Button myOnClick={incrementCount} />
      <Button myOnClick={incrementCount} />
    </div>
  );
}

export default App;
