import './TodoList.css';
import SingleTodo from './SingleTodo';

export default function TodoList({todos, setTodos}) {
 
  return (
    
    <ul className="todo-list">
     {todos.map(todo => {
       return <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
      
     })}
    </ul>
  )
}
