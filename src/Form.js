import './Form.css';
import {useState} from 'react';
import shortid from 'shortid';

export default function Form({setTodos, todos, setUserInput, userInput}) {
  const [isValid, setIsValid] = useState(true)
  const submitHandler = (e) => {
     e.preventDefault();
    if(!userInput) {
      setIsValid(false);
      return;
    }
   
    setTodos([...todos, {text: userInput, id: shortid.generate()}])
    setUserInput('');
    
  }

  const inputHandler = (e) => {
    if(e.target.value.length > 0) setIsValid(true);
    setUserInput(e.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        style={{ borderColor: isValid ? "rgba(129, 236, 236 , .5)" : "red" }}
        onChange={inputHandler}
        type="text"
        value={userInput}
      ></input>
    </form>
  );
}
