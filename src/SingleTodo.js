import React from 'react';
import './SingleTodo.css';
import { BsTrash } from "react-icons/bs";

export default function SingleTodo({todo, todos, setTodos}) {
  
  const deleteHandler = (id) => {
    const filteredTodos = todos.filter(item => item.id !== todo.id);
    
    setTodos(filteredTodos)

  }

  return (
    <li className="todo" id={todo.id}>
      {todo.text}
      <BsTrash className="bin" onClick={deleteHandler} />
    </li>
  );
}
