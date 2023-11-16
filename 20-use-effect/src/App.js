import { useState, useEffect } from "react";
import "./App.css";

function App() {
  console.log("App renderred");
  // перший рендерінг надасть todo значення null, а другий рендерінг, після виконання fetch запиту надасть todo значення json'на.
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    // звернення до віддаленого сервера
    fetch("https://jsonplaceholder.typicode.com/todos/8")
      .then((response) => response.json())
      .then((json) => {
        setTodo(json);
        console.log("is really rendering only once? Yes!");
      })
      .catch((error) => console.log(error.message));
  }, []);
  // вище [] це порожній масив залежностей, і завдяки ньому ми виконуємо код всередині useEffect() лише один раз, при першому рендерінгу App.js
  // якщо вказати в ньому [todo], то код буде ререндеретись при кожній знімі у todo, що в даному випадку призведе до безкінечного циклу
  console.log(todo);
  // додавши {todo && <h1>{todo.title}</h1>}</div> таким чимном у нас не буде помилки, коли при першому рендерінгу todo буде дорівнювати null(тому що ми не можемо прочитати значення null.title)
  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>;
}

export default App;
