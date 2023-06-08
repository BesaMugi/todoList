import React from 'react'

const NewTodo = (props) => {
  return (
    <div className="todos">
        {props.todos.map((todo, index) => {
        return (
          <div className={`todo ${todo.favorite ? "selected" : ""}`}>
            <div className="favorite">
              <button onClick={() => props.makeFavorite(index)}>★</button>
            </div>
            <div className="todo-text">{todo.text}</div>
            <div className="remove">
              <button onClick={() => props.deleteTodo(index)}>✖</button>
            </div>
          </div>
        );
      })
      }
    </div>
  )
}

export default NewTodo