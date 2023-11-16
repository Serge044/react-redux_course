const App = (props) => {
  console.log("Main func was called!");

  const [buttonText, setButtonText] = React.useState(props.btnText);
  const [buttonText2, setButtonText2] = React.useState(props.btnText2);

  const [btnColor, setBtnColor] = React.useState("");
  const [btnColor2, setBtnColor2] = React.useState("");

  const onBtnClick = () => {
    setButtonText(`${props.newText} ${Math.random()}`);

    setBtnColor("green-btn");
  };
  const onBtnClick2 = () => {
    setButtonText2(`${props.newText2}`);
    setBtnColor2("green-btn");
  };

  return (
    <div className="app">
      <button className={btnColor} onClick={onBtnClick}>
        {buttonText}
      </button>
      <button className={btnColor2} onClick={onBtnClick2}>
        {buttonText2}
      </button>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(
  <App
    btnText="push me"
    btnText2="click me"
    newText="it's your new text"
    newText2="new simple text"
  />
);
