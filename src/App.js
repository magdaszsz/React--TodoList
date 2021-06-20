import './App.css';
import {useState, useEffect} from 'react';
import Form from './Form';
import TodoList  from './TodoList';

const getLocalStorage = () => {
  const data = localStorage.getItem('list');
  if(data) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}


function App() {
  const [todos, setTodos] = useState(getLocalStorage());
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todos))
  }, [todos])
  return (
    <main>
      <Form setTodos={setTodos} todos={todos} userInput={userInput} setUserInput={setUserInput}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </main>
  );
}

export default App;
