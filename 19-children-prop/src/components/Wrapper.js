function Wrapper(props) {
  console.log(props);
  const wrapperStyle = {
    backgroundColor: props.color,
    width: "250px",
    padding: "70px",
    margin: "20px auto",
  };
  return (
    <div style={wrapperStyle}>
      <h1>Hello from Wrapper</h1>
      {props.children}
    </div>
  );
}

export default Wrapper;
