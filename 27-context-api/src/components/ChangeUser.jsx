import { useContext } from "react";
import UserContext from "../context/UserContext";

const ChangeUser = () => {
  const { userName, changeUserName } = useContext(UserContext);
  return (
    <button
      onClick={() => {
        changeUserName(userName === "Serge" ? "Sandra" : "Serge");
      }}
    >
      Change user
    </button>
  );
};

export default ChangeUser;
