import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import NewTodo from "./NewTodo";

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: false,
    },
    {
      text: "Продать квартиру",
      favorite: false,
    },
    {
      text: "Выучить уроки по JavaScript",
      favorite: true,
    },
  ]);

  const [text, setText] = useState('')

  const deleteTodo = (i) => {
    const filtered = todos.filter((todo, index) => {
      if (index === i) {
        return false;
      }
      return true;
    });
    setTodos(filtered);
  };

  const makeFavorite = (i) => {
    const newTodos = todos.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    setTodos([{
      text: text,
      favorite: false,
    },
    ...todos
  ])
  setText('')
  }

  return (
    <div className="app">
      <Header/>
      <Form text={text} setText={setText} addTodo={addTodo}  />
      <NewTodo todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
