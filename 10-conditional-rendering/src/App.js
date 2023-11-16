import "./App.css";
import PetInfo from "./components/PetInfo.js";

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={11} hasPet />
      <PetInfo animal="dog" age={5} hasPet={false} />
    </div>
  );
}

export default App;
