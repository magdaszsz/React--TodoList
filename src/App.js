import './App.css';
import {useState} from 'react';
import Form from './Form';
import TodoList  from './TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState('');
  return (
    <main>
      <Form setTodos={setTodos} todos={todos} userInput={userInput} setUserInput={setUserInput}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </main>
  );
}

export default App;
