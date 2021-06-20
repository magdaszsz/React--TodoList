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

const getStorageMode = () => {
  let mode = 'light-mode';
  if(localStorage.getItem('mode')){
    mode = localStorage.getItem('mode')
  }
  return mode;
}



function App() {
  const [todos, setTodos] = useState(getLocalStorage());
  const [userInput, setUserInput] = useState('');
  const [mode, setMode] = useState(getStorageMode())

  
const toggleMode = () => {
  if (mode === "light-mode") {
    setMode("dark-mode");
  } else {
    setMode("light-mode");
  }
};

  useEffect(() => {
    document.documentElement.className = mode;
    localStorage.setItem('mode', mode)
  }, [mode])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todos))
  }, [todos])


  return (
    <div class="container">
    <main>
      <Form setTodos={setTodos} todos={todos} userInput={userInput} setUserInput={setUserInput}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <button onClick={toggleMode}>theme</button>
    </main>
    </div>
  );
}

export default App;
