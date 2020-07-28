import React, {useState} from 'react';
import './App.css';

import ToDoList from './ToDoList';
import NewToDo from './NewToDo';
import {Todo} from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    const newElement = { id: Math.random().toString(), text: text }
    setTodos(prevState => ([...prevState, newElement]))
  }

  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} />
    </div>
  );
}

export default App;
