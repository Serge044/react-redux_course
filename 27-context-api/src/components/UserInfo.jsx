import UserContext from "../context/UserContext";
import { useContext } from "react";

const UserInfo = () => {
  // нижче два різних приклади виводу з однаковою функціонеальністю
  const { userName } = useContext(UserContext);
  return (
    <>
      {/* <h2>Hello,</h2>
      <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
      <h2>and also</h2>
      <h1>{user}</h1> */}
      <h1>{userName}</h1>
    </>
  );
};

export default UserInfo;
