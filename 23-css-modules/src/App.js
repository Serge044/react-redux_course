import "./App.css";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>H1 from main App component</h1>
        <h2>H2 from main App component</h2>
      </div>

      <button className="my-btn">Button from main App component</button>
    </div>
  );
}

export default App;
