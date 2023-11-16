import "./App.css";
import PetInfo from "./components/PetInfo.js";

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="11" />
      <PetInfo animal="dog" age="5" />
    </div>
  );
}

export default App;
