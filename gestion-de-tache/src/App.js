
import Todo from './components/Todo';
import TodoForm from './components/Form';
import { useState } from 'react';

import './App.css'

function App() {

  const initialTodos = [
    {text: "Apprendre JS", isCompleted: false},
    {text: "Apprendre React", isCompleted: true},
    {text: "Apprendre axios", isCompleted: false},
    
  ]

  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (text) => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)

  }

  const completedTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos] 
    newTodos.splice(index, 1)
    setTodos(newTodos)
    
  }



  return (
    <div className="App">
      <div className='todo-list'>
        
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo}
            completedTodo={completedTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
          
      

      </div>
    </div>
  );
}

export default App;
