import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!todos.length) {
      axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => setTodos(res.data));
    }
  });

  const markComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    );
  };

  const delTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => setTodos([...todos.filter(todo => todo.id !== id)]));
  };

  const addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      })
      .then(res => setTodos([...todos, res.data]));
  };

  return (
    <div className="App">
      <div className="container">
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
      </div>
    </div>
  );
};

export default App;
