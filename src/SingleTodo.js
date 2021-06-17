import React from 'react';
import './SingleTodo.css';
import { BsTrash } from "react-icons/bs";

export default function SingleTodo({todo}) {
  
  const deleteHandler = () => {

  }

  return (
    <li className="todo" >
      {console.log(todo)}
      {todo.text}
      <BsTrash class="bin" onClick={deleteHandler}/>
    </li>
  );
}
