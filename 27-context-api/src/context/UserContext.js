import { createContext } from "react";

// const UserContext = createContext();
// можна вказувати значення по замовченню на випадок якщо Реакт не знайде відповідного провайдера
const UserContext = createContext({
  userName: "",
  //   порожня функція, щоб не виникала помилка, якщо не буде надано UserContext.Provider
  changeUserName: () => {},
});

export default UserContext;
