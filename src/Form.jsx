import React from "react";

const Form = (props) => {
  return (
    <div className="form">
      <input
        placeholder="Введите текс..."
        type="text"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <button onClick={props.addTodo}>Добавить</button>
    </div>
  );
};

export default Form;
