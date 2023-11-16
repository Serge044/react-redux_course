import { useState } from "react";

function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({ username: "", password: "" });
  function handleFromSubmit(event) {
    event.preventDefault();
    console.log(userData);
    alert(JSON.stringify(userData));
  }
  function handleInputChange(e, name) {
    setUserData({ ...userData, [name]: e.target.value });
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFromSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={userData.username}
            onChange={(e) => {
              handleInputChange(e, "username");
              console.log(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={userData.password}
            onChange={(e) => {
              handleInputChange(e, "password");
              console.log(e.target.value);
            }}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
