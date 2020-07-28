import React from 'react';
import './App.css';

import ToDoList from './ToDoList';
import NewToDo from './NewToDo';

const App: React.FC = () => {
  const todo = [{
    id: '1',
    text: 'Finish eating....'
  }]

  return (
    <div className="App">
      <NewToDo />
      {/* <ToDoList items={todo} /> */}
    </div>
  );
}

export default App;
